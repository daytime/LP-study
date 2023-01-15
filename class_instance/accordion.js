(() => {
  class Accordion {
    constructor(obj) {
      console.log("obj", obj.hookName);

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);
      //   $trigger[0].addEventListener("click", (e) => clickHandler(e));

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    clickHandler(e) {
      e.preventDefault();
      // console.log('Clicked!');
      // const $content = $trigger[0].nextElementSibling;

      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;

      if ($content.style.display === "block") {
        $content.style.display = "none";
      } else {
        $content.style.display = "block";
      }
    }
  }
  const fuckingAccordion = new Accordion({
    hookName: "#js-faq",
    tagName: "p",
  });

  //   const $elm = document.querySelector("#js-accordion");
  //   const $trigger = $elm.getElementsByTagName("a");
  //   //   $trigger[0].addEventListener("click", (e) => clickHandler(e));

  //   const triggerLen = $trigger.length;
  //   let index = 0;
  //   while (index < triggerLen) {
  //     $trigger[index].addEventListener("click", (e) => clickHandler(e));
  //     index++;
  //   }

  //   const clickHandler = (e) => {
  //     e.preventDefault();
  //     // console.log('Clicked!');
  //     // const $content = $trigger[0].nextElementSibling;

  //     const $target = e.currentTarget;
  //     const $content = $target.nextElementSibling;

  //     if ($content.style.display === "block") {
  //       $content.style.display = "none";
  //     } else {
  //       $content.style.display = "block";
  //     }
  //   };
})();
