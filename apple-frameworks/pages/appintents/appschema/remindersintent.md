> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/appschema/remindersintent

# AppSchema.RemindersIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Identifies intent schemas in the reminders domain.

## Declaration

```swift
protocol RemindersIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [createList](remindersintent/createlist.md): An intent schema that creates a new reminder list.
- [createReminder](remindersintent/createreminder.md): An intent schema that creates a new reminder.
- [createSection](remindersintent/createsection.md): An intent schema that creates a new reminder list section.
- [deleteReminders](remindersintent/deletereminders.md): An intent schema that deletes reminders.
- [updateReminder](remindersintent/updatereminder.md): An intent schema that updates a reminder.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)
