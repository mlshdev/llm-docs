> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/remindersintent/deletereminders](https://developer.apple.com/documentation/appintents/appschema/remindersintent/deletereminders)

# deleteReminders

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An intent schema that deletes reminders.

## Declaration

```swift
var deleteReminders: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `reminders` domain and one of your app’s actions matches the `deleteReminders` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .reminders.deleteReminders)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `deleteReminders` schema:

```swift
@AppIntent(schema: .reminders.deleteReminders)
struct DeleteRemindersIntent: DeleteIntent {
    var entities: [<#ReminderEntity#>]

    func perform() async throws -> some IntentResult {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Actions

- [createList](createlist.md): An intent schema that creates a new reminder list.
- [createReminder](createreminder.md): An intent schema that creates a new reminder.
- [createSection](createsection.md): An intent schema that creates a new reminder list section.
- [updateReminder](updatereminder.md): An intent schema that updates a reminder.
