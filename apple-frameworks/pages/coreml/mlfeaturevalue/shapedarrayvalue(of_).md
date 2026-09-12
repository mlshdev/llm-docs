> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/shapedarrayvalue(of:)](https://developer.apple.com/documentation/coreml/mlfeaturevalue/shapedarrayvalue(of:))

# shapedArrayValue(of:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the underlying shaped array of the feature value.

## Declaration

```swift
func shapedArrayValue<Scalar>(of type: Scalar.Type) -> MLShapedArray<Scalar>? where Scalar : MLShapedArrayScalar
```

## Parameters

- `type`: The scalar type of the underlying shaped array.

## See Also

### Accessing the feature’s value

- [isUndefined](isundefined.md): A Boolean value that indicates whether the feature value is undefined or missing.
- [int64Value](int64value.md): The underlying integer of the feature value.
- [doubleValue](doublevalue.md): The underlying double of the feature value.
- [stringValue](stringvalue.md): The underlying string of the feature value.
- [imageBufferValue](imagebuffervalue.md): The underlying image of the feature value as a pixel buffer.
- [multiArrayValue](multiarrayvalue.md): The underlying multiarray of the feature value.
- [sequenceValue](sequencevalue.md): The underlying sequence of the feature value.
- [dictionaryValue](dictionaryvalue.md): The underlying dictionary of the feature value.
