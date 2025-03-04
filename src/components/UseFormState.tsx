import * as React from "react"
import Footer from "./Footer"
import { Menu } from "./Menu"
import api from "../data/en/api"
import useFormState from "./codeExamples/useFormState"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import FormStateTable from "./FormStateTable"
import CodeArea from "./CodeArea"

export default ({ currentLanguage }) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useFormState
      </h1>
      <p className={typographyStyles.subHeading}>
        Subscribe to form state update
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section id="useFormRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                useFormState:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`({ control: Control }) => FormState`}</span>
              </h2>
            </code>

            <p>
              This custom hook allows you to subscribe to each form state, and
              isolate the re-render at the custom hook level. It has its scope
              in terms of form state subscription, so it would not affect other
              useFormState and useForm. Using this hook can reduce the re-render
              impact on large and complex form application.
            </p>

            <p>
              <b className={typographyStyles.note}>Important:</b> returned{" "}
              <code>formState</code> is wrapped with Proxy to improve render
              performance and skip extra logic if specific state is not
              subscribed, so make sure you deconstruct or read it before render
              in order to enable the subscription.
            </p>

            <CodeArea
              rawData={`const { isDirty } = useForm(); // ✅
              
const formState = useForm(); // ❌ should deconstruct the formState
formState.isDirty; // ❌ subscription will be one render behind.      
`}
            />

            <FormStateTable currentLanguage={currentLanguage} api={api} />

            <CodeArea
              rawData={useFormState}
              url={"https://codesandbox.io/s/useformstate-75xly"}
            />
          </section>

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}
