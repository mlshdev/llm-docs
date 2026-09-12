> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/journalintent](https://developer.apple.com/documentation/appintents/appschema/journalintent)

# AppSchema.JournalIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Identifies intent schemas in the journal domain.

## Declaration

```swift
protocol JournalIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [createAudioEntry](journalintent/createaudioentry.md): An intent schema that creates a new audio journal entry.
- [createEntry](journalintent/createentry.md): An intent schema that creates a new journal entry.
- [deleteEntry](journalintent/deleteentry.md): An intent schema that deletes the specified journal entries.
- [search](journalintent/search.md): Deprecated. An intent schema that searches journal entries.
- [updateEntry](journalintent/updateentry.md): An intent schema that updates journal entry.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [createAudioEntry](journalintent/createaudioentry.md): An intent schema that creates a new audio journal entry.
- [createEntry](journalintent/createentry.md): An intent schema that creates a new journal entry.
- [deleteEntry](journalintent/deleteentry.md): An intent schema that deletes the specified journal entries.
- [updateEntry](journalintent/updateentry.md): An intent schema that updates journal entry.
