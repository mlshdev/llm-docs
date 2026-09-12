> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/notesintent](https://developer.apple.com/documentation/appintents/appschema/notesintent)

# AppSchema.NotesIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Identifies intent schemas in the notes domain.

## Declaration

```swift
protocol NotesIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [appendText](notesintent/appendtext.md): An intent schema that adds text to the end of an existing note.
- [createNote](notesintent/createnote.md): An intent schema that creates a new note.
- [updateNote](notesintent/updatenote.md): An intent schema that updates a note.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [createNote](notesintent/createnote.md): An intent schema that creates a new note.
- [updateNote](notesintent/updatenote.md): An intent schema that updates a note.
