> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/classificationobservation/hasprecisionrecallcurve](https://developer.apple.com/documentation/vision/classificationobservation/hasprecisionrecallcurve)

# hasPrecisionRecallCurve

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A Boolean value that indicates whether the observation contains precision and recall curves.

## Declaration

```swift
var hasPrecisionRecallCurve: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this property is `true`, then you can call precision and recall-related methods in this observation.

If this property is `false`, then the precision and recall-related methods don’t return meaningful data.

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [identifier](identifier.md): The classification label that identifies the type of observation.
