// Services
const {
  generateRandomValue,
  generateRandomPersonProfile,
  countStringNumberSymbol,
} = require("../services/services");

exports.handleHealth = (_req, res) => {
  res.status(200).json({
    message: "OK",
  });
};

exports.handleHome = (req, res) => {
  res.status(200).json({
    message: "Welcome to our advance full satck army backend first assignment",
    name: "Md. Masud Khan",
    githubProfile: "https://github.com/masudKhanGit",
    facebookProfile: "https://www.facebook.com/mkhangaz2/",
  });
};

exports.handleRandomValue = (req, res) => {
  try {
    const { start, end } = req.query;

    if (Number.isInteger(parseInt(start)) || Number.isInteger(parseInt(end))) {
      res.status(200).json({
        start,
        end,
        reandomValue: generateRandomValue(start, end),
      });
    } else {
      res.status(422).json({
        message: "Please enter integer value",
        start,
        end,
      });
    }
  } catch (err) {
    res.status(422).json({
      message: "Invalid query",
    });
  }
};

exports.randomProfile = (req, res) => {
  try {
    const { properties } = req.query;

    const parameters = properties.split(",").map((item) => item.toLowerCase());
    if (!parameters.length > 0) throw new Error("Please enter parameters");

    res.status(200).json({
      personProfile: generateRandomPersonProfile(parameters),
    });
  } catch (err) {
    res.status(422).json({
      message: err.message,
    });
  }
};

exports.handleCountStringNumberSymbol = (req, res) => {
  try {
    const { string } = req.query;

    res.status(200).json({
      value: countStringNumberSymbol(string),
    });
  } catch (err) {
    res.status(422).json({
      message: err.message,
    });
  }
};
