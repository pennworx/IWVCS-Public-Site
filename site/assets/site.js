(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const siteNav = document.querySelector("[data-site-nav]");

  if (navToggle && siteNav) {
    const navToggleLabel = navToggle.querySelector(".visually-hidden");

    const setNavigationState = (isOpen) => {
      siteNav.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      if (navToggleLabel) {
        navToggleLabel.textContent = isOpen ? "Close navigation" : "Open navigation";
      }
    };

    navToggle.addEventListener("click", () => {
      setNavigationState(!siteNav.classList.contains("open"));
    });

    siteNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        setNavigationState(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && siteNav.classList.contains("open")) {
        setNavigationState(false);
        navToggle.focus();
      }
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const agencySearch = document.querySelector("[data-agency-search]");
  const agencyItems = [...document.querySelectorAll(".state-item")];
  const agencyCount = document.querySelector("[data-agency-count]");
  const agencyNoResults = document.querySelector("[data-agency-no-results]");

  agencyItems.forEach((item) => {
    item.target = "_blank";
    item.rel = "external noopener";
  });

  if (agencySearch && agencyItems.length) {
    const updateAgencyResults = () => {
      const query = agencySearch.value.trim().toLocaleLowerCase();
      const exactAbbreviation = query.length === 2 && agencyItems.some((item) =>
        item.querySelector(".state-abbr")?.textContent.toLocaleLowerCase() === query
      );
      let visible = 0;

      agencyItems.forEach((item) => {
        const abbreviation = item.querySelector(".state-abbr")?.textContent.toLocaleLowerCase() ?? "";
        const matches = !query || (exactAbbreviation
          ? abbreviation === query
          : item.textContent.toLocaleLowerCase().includes(query));
        item.hidden = !matches;
        if (matches) visible += 1;
      });

      if (agencyCount) {
        agencyCount.textContent = `${visible} ${visible === 1 ? "agency link" : "agency links"}`;
      }

      if (agencyNoResults) {
        agencyNoResults.classList.toggle("visible", visible === 0);
      }
    };

    agencySearch.addEventListener("input", updateAgencyResults);
    updateAgencyResults();
  }

})();
