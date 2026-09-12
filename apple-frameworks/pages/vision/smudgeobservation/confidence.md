> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/smudgeobservation/confidence](https://developer.apple.com/documentation/vision/smudgeobservation/confidence)

# confidence

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The level of confidence in the observation’s accuracy of smudge detection on a lens.

## Declaration

```swift
let confidence: Float
```

<a id="Discussion"></a>

## Discussion

The framework normalizes this value to `[0, 1]`, where `1` represents the most confident. When results come from a [CoreMLRequest](../coremlrequest.md), the relevant [Core ML](../../coreml.md) models forward the confidence values.

## See Also

### Inspecting an observation

- [description](description.md): A textual representation of this instance.
- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
