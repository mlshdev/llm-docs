> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionobservation/originatingrequestdescriptor](https://developer.apple.com/documentation/vision/visionobservation/originatingrequestdescriptor)

# originatingRequestDescriptor

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The descriptor of the request that produces the observation.

## Declaration

```swift
var originatingRequestDescriptor: RequestDescriptor? { get }
```

## See Also

### Inspecting an observation

- [uuid](uuid.md): A unique alphanumeric value that the framework assigns the observation.
- [confidence](confidence.md): The level of confidence in the observation’s accuracy.
- [description](description.md): A textual representation of this instance.
- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [timeRange](timerange.md): The time range of the reported observation.
