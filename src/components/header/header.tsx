import { component$ } from "@builder.io/qwik";
import { Logo } from "../icons/logo";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <a href="/" title="BHAKTA.US">
            <Logo/>
          </a>
        </div>
        <ul>
          <li>
            <a
              href="/blog/"
              target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a
              href="/shop/"
              target="_blank"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/quote/"
              target="_blank"
            >
              Tutorials
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
