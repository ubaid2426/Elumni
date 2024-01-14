import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  VStack,
} from "@chakra-ui/react";

const ContactUs = () => {
  const formik = useFormik({
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Enter a valid name")
        .min(3, "Minimum length of name should be 3")
        .max(20, "only 20 characters are allowed for name")
        .matches(/[a-zA-Z]/, "name should contain alphabets only"),
    }),

    initialValues: { name: "" },

    onSubmit: (values) => {
      console.log(values.name);
      Swal.fire({
        title: "Form Submitted",
        text: " Congratulations!!! You have successfully submitted",
        type: "success",
      });
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack>
        <FormControl isInvalid={formik.touched.name && !!formik.errors.name}>
          <FormLabel>Enter Full Name</FormLabel>
          <Input
            id="name"
            {...formik.getFieldProps("name")}
            _invalid={{ bg: "red.100" }}
          ></Input>
          <FormErrorMessage>
            *{formik.touched.name && formik.errors.name}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit">Submit</Button>
      </VStack>
    </form>
  );
};

export default ContactUs;
