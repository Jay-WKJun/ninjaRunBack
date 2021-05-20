const Record = require("../model/Record");

module.exports.getAllRecords = async (req, res, next) => {
  try {
    const allRecords = await Record.find().sort("-score").limit(10);

    res.json({
      records: allRecords,
      result: "success"
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      result: "fail"
    });
  }
}

module.exports.saveRecord = async (req, res, next) => {
  const {
    body: {
      name,
      score
    }
  } = req;

  try {
    const alreadySavedUser = await Record.findOne({ name }).lean();

    if (!alreadySavedUser) {
      const record = new Record({
        name,
        score
      });

      await record.save();

      return;
    }

    await Record.findOneAndUpdate({ name }, { $set: { score }});

    res.json({
      result: "success"
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      result: "fail"
    });
  }
}
