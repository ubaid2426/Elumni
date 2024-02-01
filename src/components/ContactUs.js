import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import './ContactUs.css'
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  VStack,
  Checkbox,
  Radio,
} from "@chakra-ui/react";

const ContactUs = () => {
  const formik = useFormik({
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Enter a valid name")
        .min(3, "Minimum length of name should be 3")
        .max(20, "Only 20 characters are allowed for name")
        .matches(/[a-zA-Z]/, "Name should contain alphabets only"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      city: Yup.string().required("City is required"),
      gender: Yup.array()
        .of(Yup.string().required("Select at least one gender"))
        .min(1, "Select at least one gender"),
        condition: Yup.string()
        .required("Firstly agree Term and condition")
        .min(1, "Firstly agree Term and condition"),
    }),

    initialValues: {
      name: "",
      email: "",
      password: "",
      city: "",
      gender: [],
      condition:'',

    },

    onSubmit: (values) => {
      console.log(values);
      Swal.fire({
        title: "Form Submitted",
        text: "Congratulations!!! You have successfully submitted",
        type: "success",
      });
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="main-form">
      <VStack className="main-form-1">
        <FormControl isInvalid={formik.touched.name && !!formik.errors.name}>
          <FormLabel className="form-label label">Enter Full Name</FormLabel>
          <Input className="form-label"
            id="name"
            {...formik.getFieldProps("name")}
            _invalid={{ bg: "red.100" }}
          />
          <FormErrorMessage>
            *{formik.touched.name && formik.errors.name}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
          <FormLabel className="form-label">Enter Your E-Mail</FormLabel>
          <Input
            id="email" className="form-label"
            {...formik.getFieldProps("email")}
            _invalid={{ bg: "red.100" }}
          />
          <FormErrorMessage>
            *{formik.touched.email && formik.errors.email}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.password && !!formik.errors.password}>
          <FormLabel className="form-label">Enter Your Password </FormLabel>
          <Input className="form-label"
            id="password"
            {...formik.getFieldProps("password")}
            type="password"
            _invalid={{ bg: "red.100" }}
          />
          <FormErrorMessage>
            *{formik.touched.password && formik.errors.password}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.city && !!formik.errors.city}>
          <FormLabel className="form-label">Enter Your City</FormLabel>
          <Input className="form-label"
            id="city"
            {...formik.getFieldProps("city")}
            _invalid={{ bg: "red.100" }}
          />
          <FormErrorMessage>
            *{formik.touched.city && formik.errors.city}
          </FormErrorMessage>
        </FormControl>

        <FormControl className="label-1" isInvalid={formik.touched.gender && !!formik.errors.gender}>
          <FormLabel className="form-labell la">Enter Your gender</FormLabel>
          <Checkbox
          className="label-1"
            id="gender-male"
            {...formik.getFieldProps("gender")}
            value=" male"
          >
             Male
          </Checkbox>
          
          <Checkbox
          className="label-1"
            id="gender-female"
            {...formik.getFieldProps("gender")}
            value="female"
          >
            Female
          </Checkbox>
          <FormErrorMessage>
            *{formik.touched.gender && formik.errors.gender}
          </FormErrorMessage>
        </FormControl>


        <FormControl className="label-1" isInvalid={formik.touched.condition && !!formik.errors.condition}>
          <FormLabel className="form-labell la"></FormLabel>
          <Radio
          className="label-1"
            id="term-accepted"
            {...formik.getFieldProps("condition")}
            // isChecked={formik.values.condition.includes("accepted")}
            value='accepted'
          >
             I agree terms and conditions 
          </Radio>
          <FormErrorMessage>
            *{formik.touched.condition && formik.errors.condition}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" className="btn">Submit</Button>
      </VStack>
    </form>
  );
};
export default ContactUs