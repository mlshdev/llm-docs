> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/lists-and-notes](https://developer.apple.com/documentation/sirikit/lists-and-notes)

# Lists and Notes

**Interface languages:** Swift, Objective-C

**Framework:** Intents  
**Kind:** API Collection

Create and manage notes and to-do list items.

<a id="overview"></a>

## Overview

> **Note**

> The SiriKit domain for lists and notes provides legacy support for past operating systems releases, and doesn’t support Siri interactions in Apple Intelligence and Siri AI. To let people manage notes and to-do lists with these features, you must adopt the [App Intents](../appintents.md) framework and its app schema domains for [Notes](../appintents/app-schema-domain-notes.md) and [Reminders](../appintents/app-schema-domain-reminders.md).

With the lists and notes domain, people can create to-do lists, mark to-do list items as complete, or ask Siri to create or modify notes in their favorite note-taking app. When creating items in a to-do list, the person may also ask your app to set up a reminder based on their location or a specific date. Your intents app extension takes the information provided to it and creates the corresponding tasks, notes, and reminders either directly in your app or by communicating that information to your servers.

## Topics

### Note Creation

- [INCreateNoteIntentHandling](../intents/increatenoteintenthandling.md): Deprecated. The handler interface for creating notes.
- [INCreateNoteIntent](../intents/increatenoteintent.md): Deprecated. A request to create a new note.
- [INCreateNoteIntentResponse](../intents/increatenoteintentresponse.md): Deprecated. Your app’s response to a request to create a note.

### Notebook Search

- [INSearchForNotebookItemsIntentHandling](../intents/insearchfornotebookitemsintenthandling.md): Deprecated. The handler interface for searching for notes, tasks, and reminders.
- [INSearchForNotebookItemsIntent](../intents/insearchfornotebookitemsintent.md): Deprecated. A request to search for notes, tasks, and reminders.
- [INSearchForNotebookItemsIntentResponse](../intents/insearchfornotebookitemsintentresponse.md): Deprecated. Your app’s response to a request to search for notes, tasks, or reminders.

### Task Addition

- [INAddTasksIntentHandling](../intents/inaddtasksintenthandling.md): Deprecated. The handler interface for adding tasks to a task list.
- [INAddTasksIntent](../intents/inaddtasksintent.md): Deprecated. A request to add tasks to an existing task list.
- [INAddTasksIntentResponse](../intents/inaddtasksintentresponse.md): Deprecated. Your response to a request to add tasks to a task list.

### Task Attributes

- [INSetTaskAttributeIntentHandling](../intents/insettaskattributeintenthandling.md): Deprecated. The handler interface for updating the attributes of an existing task.
- [INSetTaskAttributeIntent](../intents/insettaskattributeintent.md): Deprecated. A request to modify the attributes of a task.
- [INSetTaskAttributeIntentResponse](../intents/insettaskattributeintentresponse.md): Deprecated. Your response to a request to modify the attributes of an existing task.

### Task Deferral

- [INSnoozeTasksIntentHandling](../intents/insnoozetasksintenthandling.md): Deprecated. The handler interface that snoozes tasks in a task list.
- [INSnoozeTasksIntent](../intents/insnoozetasksintent.md): Deprecated. A request to snooze one or more tasks.
- [INSnoozeTasksIntentResponse](../intents/insnoozetasksintentresponse.md): Deprecated. Your response to a delete tasks request.

### Note Objects

- [INNote](../intents/innote.md): Deprecated. The content and metadata associated with a single note entry in your app.
- [INNoteContent](../intents/innotecontent.md): Deprecated. An abstract class that defines the types of content contained in notes.
- [INTextNoteContent](../intents/intextnotecontent.md): Deprecated. The textual content of a note.
- [INImageNoteContent](../intents/inimagenotecontent.md): Deprecated. An image contained in a note.

### Task Objects

- [INTaskList](../intents/intasklist.md): Deprecated. A collection of individual tasks.
- [INTask](../intents/intask.md): Deprecated. An individual task the user needs to complete.

### Event Triggers

- [INSpatialEventTrigger](../intents/inspatialeventtrigger.md): A trigger condition based on the user’s arrival or departure from a given location.
- [INTemporalEventTrigger](../intents/intemporaleventtrigger.md): A trigger condition based on a date or time.
- [INTemporalEventTriggerTypeOptionsResolutionResult](../intents/intemporaleventtriggertypeoptionsresolutionresult.md): Deprecated. A resolution result that adds a temporal event trigger.
- [INDayOfWeekOptions](../intents/indayofweekoptions.md): Days of the week.

### Resolution Results

- [INAddTasksTargetTaskListResolutionResult](../intents/inaddtaskstargettasklistresolutionresult.md): Deprecated. A resolution result that adds tasks to a target task list.
- [INAddTasksTemporalEventTriggerResolutionResult](../intents/inaddtaskstemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
- [INDateSearchTypeResolutionResult](../intents/indatesearchtyperesolutionresult.md): Deprecated. A resolution result for the types of dates supported by a search.
- [INLocationSearchTypeResolutionResult](../intents/inlocationsearchtyperesolutionresult.md): Deprecated. A resolution result for location-based searches.
- [INNoteResolutionResult](../intents/innoteresolutionresult.md): Deprecated. A resolution result for notes.
- [INNoteContentResolutionResult](../intents/innotecontentresolutionresult.md): Deprecated. A resolution result for the content of notes.
- [INNotebookItemTypeResolutionResult](../intents/innotebookitemtyperesolutionresult.md): Deprecated. A resolution result for the type of items to look for during a search of notes and tasks.
- [INSetTaskAttributeTemporalEventTriggerResolutionResult](../intents/insettaskattributetemporaleventtriggerresolutionresult.md): Deprecated. A resolution result for a temporal event trigger.
- [INSnoozeTasksTaskResolutionResult](../intents/insnoozetaskstaskresolutionresult.md): Deprecated. A resolution result for snoozing a task.
- [INSpatialEventTriggerResolutionResult](../intents/inspatialeventtriggerresolutionresult.md): A resolution result for the location-based trigger associated with a task.
- [INTaskListResolutionResult](../intents/intasklistresolutionresult.md): Deprecated. A resolution result for a list of tasks.
- [INTaskResolutionResult](../intents/intaskresolutionresult.md): Deprecated. A resolution result for a single task within a task list.
- [INTaskStatusResolutionResult](../intents/intaskstatusresolutionresult.md): Deprecated. A resolution result for the status of a task.
- [INTemporalEventTriggerResolutionResult](../intents/intemporaleventtriggerresolutionresult.md): A resolution result for the time-based trigger associated with a task.
- [INTaskPriorityResolutionResult](../intents/intaskpriorityresolutionresult.md): Deprecated. A resolution result for the priority associated with a task.

## See Also

### Standard Intents

- [Car Commands](car-commands.md): Manage vehicle door locks and get the vehicle’s status.
- [Media](media.md): Listen and control audio through Siri Intents, or listen and watch media content from your app with shortcuts.
- [Messaging](messaging.md): Send messages and search the user’s received messages.
- [Payments](payments.md): Send payments between users or pay bills.
- [Restaurant Reservations](restaurant-reservations.md): Create and manage restaurant reservations with help from the Maps app.
- [Ride Booking](ride-booking.md): Book rides and report their status.
- [VoIP Calling](voip-calling.md): Initiate calls and search the user’s call history.
- [Workouts](workouts.md): Start, end, and manage fitness routines.
- [Intent Class Identifiers](intent-class-identifiers.md): Identify intents that user notifications specify.
