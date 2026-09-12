> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/journalintent](https://developer.apple.com/documentation/appintents/assistantschemas/journalintent)

# AssistantSchemas.JournalIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Assistant schema conformance for app intents that offer journaling functionality.

## Declaration

```swift
protocol JournalIntent : AssistantSchemas.Model
```

## Topics

### Instance Properties

- [createAudioEntry](journalintent/createaudioentry.md): Deprecated. The app intent conforms to the schema for creating a voice journal entry.
- [createEntry](journalintent/createentry.md): Deprecated. The app intent conforms to the schema for creating a journal entry.
- [deleteEntry](journalintent/deleteentry.md): Deprecated. The app intent conforms to the schema for deleting a journal entry.
- [search](journalintent/search.md): Deprecated. The app intent conforms to the schema for searching in journal entries.
- [updateEntry](journalintent/updateentry.md): Deprecated. The app intent conforms to the schema for updating a journal entry.

## Relationships

### Inherits From

- [AssistantSchemas.Model](model.md)

### Conforming Types

- [AssistantSchema.IntentSchema](../assistantschema/intentschema.md)
- [AssistantSchemas.IntentSchema](intentschema.md)
