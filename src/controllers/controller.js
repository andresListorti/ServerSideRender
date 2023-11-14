module.exports = {
  home: async (req, res) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=1`
    );
    const data = await response.json();
    res.render("home", { datos: data.results });
  },

  detalle: async (req, res) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${req.params.id}`
    );
    const data = await response.json();
    res.render("detalle", { datos: data });
  },
};
