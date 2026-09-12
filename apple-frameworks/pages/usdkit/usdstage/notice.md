> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/notice](https://developer.apple.com/documentation/usdkit/usdstage/notice)

# USDStage.Notice

**Framework:** USDKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A change notification that can be observed on a stage.

## Declaration

```swift
protocol Notice
```

## Topics

### Instance Properties

- [stage](notice/stage.md): The stage associated with this notice.

## Relationships

### Conforming Types

- [USDStage.ObjectsDidChange](objectsdidchange.md)

## See Also

### Observing changes

- [addObserver(for:using:)](addobserver%28for_using_%29.md): Registers an observer that runs when a notice of the given type is sent for this stage.
- [USDStage.ObjectsDidChange](objectsdidchange.md): A notice sent when the objects on a stage change.
- [USDStage.ObservationToken](observationtoken.md): A token that keeps an observer registered for as long as it is retained.
