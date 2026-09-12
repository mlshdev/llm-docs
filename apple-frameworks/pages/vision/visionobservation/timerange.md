> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionobservation/timerange](https://developer.apple.com/documentation/vision/visionobservation/timerange)

# timeRange

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The time range of the reported observation.

## Declaration

```swift
var timeRange: CMTimeRange? { get }
```

<a id="Discussion"></a>

## Discussion

When evaluating a sequence of image buffers, use this property to determine each observation’s start time and duration. If a request doesn’t support time ranges, or the time range is unknown, the value of this property is `nil`.

## See Also

### Inspecting an observation

- [uuid](uuid.md): A unique alphanumeric value that the framework assigns the observation.
- [confidence](confidence.md): The level of confidence in the observation’s accuracy.
- [description](description.md): A textual representation of this instance.
- [originatingRequestDescriptor](originatingrequestdescriptor.md): The descriptor of the request that produces the observation.
- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
