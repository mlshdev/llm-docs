> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/classificationobservation/identifier](https://developer.apple.com/documentation/vision/classificationobservation/identifier)

# identifier

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The classification label that identifies the type of observation.

## Declaration

```swift
let identifier: String
```

<a id="Discussion"></a>

## Discussion

An example classification could be a string like ‘cat’ or ‘hotdog’. The model used for the classification defines the domain of strings that may result. Usually, these strings aren’t localized technical labels not meant for direct presentation to the user.

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [hasPrecisionRecallCurve](hasprecisionrecallcurve.md): A Boolean value that indicates whether the observation contains precision and recall curves.
