var mongoose = require('mongoose');
var widgetSchema = mongoose.Schema({
  pageId: {type: mongoose.Schema.Types.ObjectId,
    ref: 'PageModel'},
  widgetType: String,
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  // class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: Date
});

module.exports = widgetSchema;
