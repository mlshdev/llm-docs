> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/segments](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/segments)

# segments

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The time mappings from the track’s media samples to its timeline.

## Declaration

```swift
static var segments: AVAsyncProperty<Root, [AVAssetTrackSegment]> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading track segments

- [loadSegment(forTrackTime:completionHandler:)](../avassettrack/loadsegment%28fortracktime_completionhandler_%29.md): Loads a segment with a target time range that contains, or is closest to, the specified track time.
- [loadSamplePresentationTime(forTrackTime:completionHandler:)](../avassettrack/loadsamplepresentationtime%28fortracktime_completionhandler_%29.md): Loads a sample presentation time that maps to the specified track time.
- [AVAssetTrackSegment](../avassettracksegment.md): An object that represents a time range segment of an asset track.
