// marker collection
Celebrities = new Meteor.Collection('celebrities');
Meteor.publish("celebrities", function () {
  return Celebrities.find();
});