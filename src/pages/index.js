import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "@components/Layout";
import Container from "@components/Container";
import Button from "@components/Button";

import products from "@data/products";

import styles from "@styles/Page.module.scss";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Home({ home, products }) {
  const { heroTitle, heroText, heroLink, heroBackground } = home;
  return (
    <Layout>
      <Head>
        <title>Buy/ Design Your Own T-Shirt at OnlyGirls Store</title>
        <meta
          name="description"
          content="Custom designed Tees for girls, ou can create and order your own design with us"
        />
        <meta
          property="og:title"
          content="OnlyGirls ♀ Custom Designed Tees"
        ></meta>
        <meta
          property="og:description"
          content="Custom designed Tees for girls, ou can create and order your own design with us"
        ></meta>
        <meta property="og:url" content="https://onlygirls.store/"></meta>
        <meta property="og:type" content="website"></meta>
      </Head>

      <Container>
        <h1 className="sr-only">Only Girls</h1>

        <div className={styles.hero}>
          <h1>BUY/ DESIGN YOUR OWN T-SHIRT</h1>
        </div>
        <div className={styles.hero_btn_holder}>
          <button className={styles.hero_btn}>SHOP</button>
          <button className={styles.hero_btn}>DESIGN</button>
        </div>

        <div className={styles.catagory_main}>
          <div className={styles.catagory_holder}>
            <div className={styles.catagory}>
              <Image
                className={styles.catagory_img}
                src="https://res.cloudinary.com/avidu/image/upload/v1656007955/test%20image/anomaly-WWesmHEgXDs-unsplash_ufxgpa.jpg"
                width="100%"
                height="50%"
              ></Image>
              <button className={styles.catagory_btn}>PETS</button>
            </div>
            <div className={styles.catagory}>
              <Image
                className={styles.catagory_img}
                src="https://res.cloudinary.com/avidu/image/upload/v1656007955/test%20image/anomaly-WWesmHEgXDs-unsplash_ufxgpa.jpg"
                width="100%"
                height="50%"
              ></Image>
              <button className={styles.catagory_btn}>GRAPHICS</button>
            </div>
            <div className={styles.catagory}>
              <Image
                className={styles.catagory_img}
                src="https://res.cloudinary.com/avidu/image/upload/v1656007955/test%20image/anomaly-WWesmHEgXDs-unsplash_ufxgpa.jpg"
                width="100%"
                height="50%"
              ></Image>
              <button className={styles.catagory_btn}>EVENTS</button>
            </div>
            <div className={styles.catagory}>
              <Image
                className={styles.catagory_img}
                src="https://res.cloudinary.com/avidu/image/upload/v1656007955/test%20image/anomaly-WWesmHEgXDs-unsplash_ufxgpa.jpg"
                width="100%"
                height="50%"
              ></Image>
              <button className={styles.catagory_btn}>FUNNY</button>
            </div>
          </div>
        </div>

        <div className={styles.idea_main}>
          <h2>HAVE A IDEA?</h2>
          <div className={styles.idea_text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            eveniet, quo excepturi esse natus in nihil itaque! Laudantium, quos
            quidem.
          </div>
          <button className={styles.idea_btn}>TELL US</button>
        </div>

        <div className={styles.design_main}>
          <h2>HAVE A DESIGN?</h2>
          <div className={styles.design_text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            eveniet, quo excepturi esse natus in nihil itaque! Laudantium, quos
            quidem.
          </div>
          <button className={styles.design_btn}>UPLOAD</button>
        </div>

        <div className={styles.features_main}>
          <div className={styles.features_holder}>
            <div className={styles.feature}>
              <h2>HIGH QUALITY DESIGNS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                nesciunt facilis iusto dolore distinctio magni id laboriosam
                aspernatur dolores amet!
              </p>
            </div>
            <div className={styles.feature}>
              <h2>COMFORT CLOTHING</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                nesciunt facilis iusto dolore distinctio magni id laboriosam
                aspernatur dolores amet!
              </p>
            </div>
            <div className={styles.feature}>
              <h2>FAST SHIPPING</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                nesciunt facilis iusto dolore distinctio magni id laboriosam
                aspernatur dolores amet!
              </p>
            </div>
            <div className={styles.feature}>
              <h2>CUSTOM DESIGNS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                nesciunt facilis iusto dolore distinctio magni id laboriosam
                aspernatur dolores amet!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.faq_main}>
          <h2>FAQs</h2>
          <div className={styles.faq_holder}>
            <div className={styles.faq}>
              <div className={styles.faq_answer}>How are you doing today?</div>
              <div className={styles.faq_question}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                obcaecati.
              </div>
            </div>
            <div className={styles.faq}>
              <div className={styles.faq_answer}>How are you doing today?</div>
              <div className={styles.faq_question}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                obcaecati.
              </div>
            </div>
            <div className={styles.faq}>
              <div className={styles.faq_answer}>How are you doing today?</div>
              <div className={styles.faq_question}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                obcaecati.
              </div>
            </div>
            <div className={styles.faq}>
              <div className={styles.faq_answer}>How are you doing today?</div>
              <div className={styles.faq_question}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                obcaecati.
              </div>
            </div>
          </div>
          <button className={styles.faq_btn}>MORE FAQs</button>
        </div>

        <h2 className={styles.heading}>Featured Gear</h2>

        <ul className={styles.products}>
          {products.map((product) => {
            return (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`}>
                  <a>
                    <div className={styles.productImage}>
                      <Image
                        width={product.image.width}
                        height={product.image.width}
                        src={product.image.url}
                        alt={product.name}
                      />
                    </div>
                    <h3 className={styles.productTitle}>{product.name}</h3>
                    <p className={styles.productPrice}>${product.price}</p>
                  </a>
                </Link>
                <p>
                  <Button
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={`/products/${product.slug}`}
                    data-item-description={product.description}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                  >
                    Add to Cart
                  </Button>
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-ap-south-1.graphcms.com/v2/cl4qzscem0e9v01wb39frhj6t/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageHome {
        page(where: { slug: "home" }) {
          id
          heroLink
          heroText
          heroTitle
          name
          slug
          heroBackground {
            height
            url
            width
          }
        }

        products(first: 4) {
          id
          name
          price
          slug
          image
        }
      }
    `,
  });

  const home = data.data.page;
  const products = data.data.products;

  return {
    props: {
      home,
      products,
    },
  };
}
