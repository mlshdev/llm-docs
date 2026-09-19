> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdstage/observationtoken

# USDStage.ObservationToken

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A token that keeps an observer registered for as long as it is retained.

## Declaration

```swift
struct ObservationToken
```

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing changes

- [addObserver(for:using:)](addobserver%28for_using_%29.md): Registers an observer that runs when a notice of the given type is sent for this stage.
- [USDStage.Notice](notice.md): A change notification that can be observed on a stage.
- [USDStage.ObjectsDidChange](objectsdidchange.md): A notice sent when the objects on a stage change.
