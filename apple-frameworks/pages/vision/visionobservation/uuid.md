> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionobservation/uuid](https://developer.apple.com/documentation/vision/visionobservation/uuid)

# uuid

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A unique alphanumeric value that the framework assigns the observation.

## Declaration

```swift
var uuid: UUID { get }
```

## See Also

### Inspecting an observation

- [confidence](confidence.md): The level of confidence in the observation’s accuracy.
- [description](description.md): A textual representation of this instance.
- [originatingRequestDescriptor](originatingrequestdescriptor.md): The descriptor of the request that produces the observation.
- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [timeRange](timerange.md): The time range of the reported observation.
