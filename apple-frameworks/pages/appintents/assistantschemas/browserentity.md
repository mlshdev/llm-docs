> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/assistantschemas/browserentity

# AssistantSchemas.BrowserEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Assistant schema conformance for app entities that describe data for web browsing functionality.

## Declaration

```swift
protocol BrowserEntity : AssistantSchemas.Model
```

## Topics

### Instance Properties

- [bookmark](browserentity/bookmark.md): Deprecated. The app entity describes a bookmark.
- [tab](browserentity/tab.md): Deprecated. The app entity describes a browser tab.
- [window](browserentity/window.md): Deprecated. The app entity describes a browser window.

## Relationships

### Inherits From

- [AssistantSchemas.Model](model.md)

### Conforming Types

- [AssistantSchema.EntitySchema](../assistantschema/entityschema.md)
- [AssistantSchemas.EntitySchema](entityschema.md)
