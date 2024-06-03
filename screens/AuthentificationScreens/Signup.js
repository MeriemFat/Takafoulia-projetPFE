import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Formik } from "formik";
import { StatusBar } from "expo-status-bar";
import BeforeLoginPage from "./BeforLoginPage";
import styles from "./StyleSignup";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  StyledContainer,
  PageLogo,
  StyledInputLabel,
  StyledFormArea,
  StyledTextInput,
  LeftIcon,
  InnerContainer,
  RightIcon,
  Colors,
} from "../../components/styles";
import { ActivityIndicator } from "react-native";
// icon
import { Octicons, Fontisto, Ionicons } from "@expo/vector-icons";
import { signUpSevice } from "./authtificationService";
const { darkLight, brand, primary, red } = Colors;
const handleSubmit = async ({ ...data }) => {
  console.log("test", data);

  await signUpSevice(data).then((res) => {
    console.log(res);
  });
};
const initState = {
  codeClient: "",
  codeAgent: "",
  Nom: "",
  prenom: "",
  phone: "",
  adresse: "",
  password: "",
  email: "",
  cin: "",
  ville: "",
  codePostal: "",
  typeIdentifiant: "",
  dateCreation: "",
  dateDernierMiseAjour: "",
  dateValidite: "",
  codeParent: "",
  identifiant: "",
};
const Signup = (props) => {
  const handleSubmit = () => {
    // Logique d'inscription, puis navigation
    props.navigation.navigate("BeforeLoginPage");
  };
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 30 }}>
          <PageLogo resizeMode="cover" source={require("../../img/logo.gif")} />
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 15,
              textAlign: "center",
              color: "#E2443B",
              marginTop: -20,
              marginLeft: 128,
              marginBottom: 20,
            }}
          >
            Se connecter
          </Text>
        </TouchableOpacity>

        {/* <Text style={styles.title2}>Vous pouvez créer votre compte!</Text> */}

        <Formik initialValues={initState} onSubmit={handleSubmit}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                resizeMode="cover"
                label="Code Client"
                placeholder="Entrez votre code client"
                onChangeText={handleChange("codeClient")}
                onBlur={handleBlur("codeClient")}
                value={values.codeClient}
                keyboardType="default"
                icon="person"
              />
              <MyTextInput
                label="Code Agent"
                placeholder="Entrez votre code agent"
                onChangeText={handleChange("codeAgent")}
                onBlur={handleBlur("codeAgent")}
                value={values.codeAgent}
                keyboardType="default"
                icon="person"
              />
              <MyTextInput
                label="Nom"
                placeholder="Entrez votre nom"
                onChangeText={handleChange("Nom")}
                onBlur={handleBlur("Nom")}
                value={values.Nom}
                keyboardType="default"
                icon="person"
              />
              <MyTextInput
                label="Prénom"
                placeholder="Entrez votre prénom"
                onChangeText={handleChange("prenom")}
                onBlur={handleBlur("prenom")}
                value={values.prenom}
                keyboardType="default"
                icon="person"
              />
              <MyTextInput
                label="Téléphone"
                placeholder="Entrez votre numéro de téléphone"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                keyboardType="phone-pad"
                icon="person"
              />
              <MyTextInput
                label="Adresse"
                placeholder="Entrez votre adresse"
                onChangeText={handleChange("adresse")}
                onBlur={handleBlur("adresse")}
                value={values.adresse}
                keyboardType="default"
                icon="home"
              />
              <MyTextInput
                label="Mot de passe"
                placeholder="Entrez votre mot de passe"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                keyboardType="default"
                icon="lock"
                isPassword={true}
              />
              <MyTextInput
                label="Email"
                placeholder="Entrez votre email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                icon="mail"
              />
              <MyTextInput
                label="CIN"
                placeholder="Entrez votre CIN"
                onChangeText={handleChange("cin")}
                onBlur={handleBlur("cin")}
                value={values.cin}
                keyboardType="default"
                icon="mail"
              />
              <MyTextInput
                label="Type Personne"
                placeholder="Entrez votre Type"
                onChangeText={handleChange("typePerson")}
                onBlur={handleBlur("typePerson")}
                value={values.typePerson}
                keyboardType="default"
                icon="person"
              />
              <MyTextInput
                label="VILLE"
                placeholder="Entrez votre Ville"
                onChangeText={handleChange("ville")}
                onBlur={handleBlur("ville")}
                value={values.ville}
                keyboardType="default"
                icon="home"
              />
              <MyTextInput
                label="Code Postal: "
                placeholder="Entrez votre Code Postal"
                onChangeText={handleChange("codePostal")}
                onBlur={handleBlur("codePostal")}
                value={values.codePostal}
                keyboardType="default"
                icon="home"
              />
              <MyTextInput
                label="Type Identifiant: "
                placeholder="Entrez votre Type identifiant: "
                onChangeText={handleChange("typeIdentifiant")}
                onBlur={handleBlur("typeIdentifiant")}
                value={values.typeIdentifiant}
                keyboardType="default"
                icon="home"
              />
              <MyTextInput
                label="Date Creation: "
                placeholder="Entrez votre Date creation: "
                onChangeText={handleChange("dateCreation")}
                onBlur={handleBlur("dateCreation")}
                value={values.dateCreation}
                keyboardType="default"
                icon="home"
              />
              <MyTextInput
                label="Date Validiter: "
                placeholder="Entrez votre Date validiter: "
                onChangeText={handleChange("dateValidite")}
                onBlur={handleBlur("dateValidite")}
                value={values.dateValidite}
                keyboardType="default"
                icon="home"
              />

              <MyTextInput
                label="Date Validiter: "
                placeholder="Entrez votre Date validiter: "
                onChangeText={handleChange("dateValidite")}
                onBlur={handleBlur("dateValidite")}
                value={values.dateValidite}
                keyboardType="default"
                icon="home"
              />
              <MyTextInput
                label=" Votre Identifiant: "
                placeholder="Entrez votre Identifiant: "
                onChangeText={handleChange("identifiant")}
                onBlur={handleBlur("identifiant")}
                value={values.identifiant}
                keyboardType="default"
                icon="person"
              />
              <TouchableOpacity
                style={[
                  styles.btn,
                  { backgroundColor: "red" },
                  { alignItems: "center" },
                  { justifyContent: "center" },
                  { paddingVertical: 10 },
                  { borderRadius: 10 },
                  { width: 240 },
                  { height: 45 },
                ]}
                onPress={handleSubmit}
              >
                <Text style={[styles.aff3, { color: "white" }]}>
                  Enregistrer
                </Text>
              </TouchableOpacity>
            </StyledFormArea>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={red} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        ></RightIcon>
      )}
    </View>
  );
};
export default Signup;
