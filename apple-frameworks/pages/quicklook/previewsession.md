> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/previewsession](https://developer.apple.com/documentation/quicklook/previewsession)

# PreviewSession

**Framework:** Quick Look  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A structure with which you can control an existing session and receive events for the current preview application.

## Declaration

```swift
struct PreviewSession
```

## Topics

### Instance Properties

- [events](previewsession/events.md): An async sequence of preview session events.

### Instance Methods

- [close()](previewsession/close%28%29.md): Closes the preview session.

### Enumerations

- [PreviewSession.Event](previewsession/event.md): An event from the preview session’s events stream.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
