import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <div class={styles.wrapper}>
        <a href="https://bhakta.us" target="_blank" class={styles.anchor}>
          <span>Made with ♡ by Pat Bhakta</span>
        </a>
      </div>
    </footer>
  );
});
