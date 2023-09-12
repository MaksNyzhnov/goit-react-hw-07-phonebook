import React, { useEffect } from "react";
import Section from "./Section/Section";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";


const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)
  useEffect(() => {
   dispatch(fetchContacts())
 }, [dispatch])

    return (
      
      <>
        <h1>PhoneBook</h1>
        <Section>
          {isLoading && !error && <h2>Loading...</h2>}
          <Form/>
        </Section>
        <Section title="Contacts" >
          <Filter />
          < ContactList/>
        </Section>
      </>
    )

  }



export default App
