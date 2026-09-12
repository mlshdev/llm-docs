> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnobjecttracker-1n598](https://developer.apple.com/documentation/cinematic/cnobjecttracker-1n598)

# CNObjectTracker

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object that converts a normalized point or rectangle into a detection track that tracks an object over time.

## Declaration

```swift
class CNObjectTracker
```

## Topics

### Initializers

- [init(commandQueue:)](cnobjecttracker-1n598/init%28commandqueue_%29.md): Creates a new detection track builder.

### Instance Methods

- [continueTracking(at:sourceImage:sourceDisparity:)](cnobjecttracker-1n598/continuetracking%28at_sourceimage_sourcedisparity_%29.md): An object that continues to track an object that you’ve started tracking, and adds a new detection to the detection track you’re building.
- [findObject(at:sourceImage:)](cnobjecttracker-1n598/findobject%28at_sourceimage_%29.md): An object that finds the bounds of an object at the given point.
- [finishDetectionTrack()](cnobjecttracker-1n598/finishdetectiontrack%28%29.md): Finish constructing the detection track and return it.
- [resetDetectionTrack()](cnobjecttracker-1n598/resetdetectiontrack%28%29.md): Resets the builder to construct a new detection track.
- [startTracking(at:within:sourceImage:sourceDisparity:)](cnobjecttracker-1n598/starttracking%28at_within_sourceimage_sourcedisparity_%29.md): Starts creating a detection track to track an object within the given bounds.

### Type Properties

- [isSupported](cnobjecttracker-1n598/issupported.md): Indicates whether the current device supports object detection and tracking.

## See Also

### Custom Object Tracking

- [CNBoundsPrediction](cnboundsprediction-swift.struct.md): A structure representing the bounds of the predicted subject.
