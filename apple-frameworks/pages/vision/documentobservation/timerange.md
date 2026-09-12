> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/timerange](https://developer.apple.com/documentation/vision/documentobservation/timerange)

# timeRange

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Time in a video frame where the observation was detected.

## Declaration

```swift
let timeRange: CMTimeRange?
```

<a id="discussion"></a>

## Discussion

When evaluating a sequence of image buffers, use this property to determine each observation’s start time and duration.

## See Also

### Inspecting an observation

- [uuid](uuid.md): A unique alphanumeric value that the framework assigns to the observation.
- [confidence](confidence.md): The level of confidence in the observation’s accuracy.
- [document](document.md): The contents of the document.
