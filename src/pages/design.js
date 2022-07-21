import Head from "next/head";
import styles from "../styles/Design.module.css";

export default function Design() {
  return (
    <>
      <Head>
        <title>Design Your Own Custom T-Shirt</title>
      </Head>

      <main>
        <div className={styles.design_main}>
          <h1>Design Your Own T-Shirt</h1>
          <div className={styles.design_idea}>
            <h2>HAVE A IDEA?</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              ab a libero, possimus voluptas non consectetur autem veritatis
              rerum? A.
            </div>
            <form action="">
                <fieldset>
                    Name:
                    <input type="text" name="Name" id="" />
                </fieldset>
                <fieldset>
                    Idea:
                    <textarea name="idea" id="" cols="30" rows="10"></textarea>
                </fieldset>
                <fieldset>
                    E-mail:
                    <input type="email" name="email" id="" />
                </fieldset>
                <input type="submit" value="TELL US" />
            </form>
          </div>

          <div className={styles.design_idea}>
            <h2>HAVE A DESIGN?</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              ab a libero, possimus voluptas non consectetur autem veritatis
              rerum? A.
            </div>
            <form action="">
                <fieldset>
                    Name:
                    <input type="text" name="Name" id="" />
                </fieldset>
                <fieldset>
                    Select Your Design:
                    <input type="file" name="" id="" />
                </fieldset>
                <fieldset>
                    E-mail:
                    <input type="email" name="email" id="" />
                </fieldset>
                <input type="submit" value="UPLOAD" /> 
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
