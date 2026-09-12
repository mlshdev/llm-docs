> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/objectsdidchange](https://developer.apple.com/documentation/usdkit/usdstage/objectsdidchange)

# USDStage.ObjectsDidChange

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A notice sent when the objects on a stage change.

## Declaration

```swift
struct ObjectsDidChange
```

## Topics

### Instance Properties

- [changedPaths](objectsdidchange/changedpaths.md): The paths whose fields changed.
- [resyncedPaths](objectsdidchange/resyncedpaths.md): The paths whose composed content was resynchronized.
- [stage](objectsdidchange/stage.md): The stage associated with this notice.

## Relationships

### Conforms To

- [USDStage.Notice](notice.md)

## See Also

### Observing changes

- [addObserver(for:using:)](addobserver%28for_using_%29.md): Registers an observer that runs when a notice of the given type is sent for this stage.
- [USDStage.Notice](notice.md): A change notification that can be observed on a stage.
- [USDStage.ObservationToken](observationtoken.md): A token that keeps an observer registered for as long as it is retained.
