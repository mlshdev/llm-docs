> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/documentobservation/confidence](https://developer.apple.com/documentation/vision/documentobservation/confidence)

# confidence

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The level of confidence in the observation’s accuracy.

## Declaration

```swift
let confidence: Float
```

<a id="discussion"></a>

## Discussion

The framework normalizes this value to `[0, 1]`, where `1` represents the most confident in the observation’s accuracy.

## See Also

### Inspecting an observation

- [uuid](uuid.md): A unique alphanumeric value that the framework assigns to the observation.
- [document](document.md): The contents of the document.
- [timeRange](timerange.md): Time in a video frame where the observation was detected.
