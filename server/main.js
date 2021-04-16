import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollection";

const insertTask = (taskText) => TaskCollection.insert({ text: taskText });

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
    ].forEach(insertTask);
  }
});
