> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionobservation/confidence](https://developer.apple.com/documentation/vision/visionobservation/confidence)

# confidence

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The level of confidence in the observation’s accuracy.

## Declaration

```swift
var confidence: Float { get }
```

<a id="Discussion"></a>

## Discussion

The Vision framework normalizes this value to `[0.0, 1.0]` under most circumstances. A value of `0.0` indicates no confidence. A value of `1.0` indicates highest confidence, or the observation doesn’t support or assign meaning to confidence.

## See Also

### Inspecting an observation

- [uuid](uuid.md): A unique alphanumeric value that the framework assigns the observation.
- [description](description.md): A textual representation of this instance.
- [originatingRequestDescriptor](originatingrequestdescriptor.md): The descriptor of the request that produces the observation.
- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [timeRange](timerange.md): The time range of the reported observation.
