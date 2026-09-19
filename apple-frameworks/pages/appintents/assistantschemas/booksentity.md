> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/assistantschemas/booksentity

# AssistantSchemas.BooksEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Assistant schema conformance for app entities that describe ebooks or audiobooks.

## Declaration

```swift
protocol BooksEntity : AssistantSchemas.Model
```

## Topics

### Instance Properties

- [audiobook](booksentity/audiobook.md): Deprecated. The app entity describes an audiobook.
- [book](booksentity/book.md): Deprecated. The app entity describes an ebook.
- [settings](booksentity/settings.md): Deprecated. The app entity describes settings for an audiobook or ebook.

## Relationships

### Inherits From

- [AssistantSchemas.Model](model.md)

### Conforming Types

- [AssistantSchema.EntitySchema](../assistantschema/entityschema.md)
- [AssistantSchemas.EntitySchema](entityschema.md)
