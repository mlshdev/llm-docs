> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlsendablefeaturevalue/shapedarrayvalue(of:)](https://developer.apple.com/documentation/coreml/mlsendablefeaturevalue/shapedarrayvalue(of:))

# shapedArrayValue(of:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the shaped array value, if the contained value is a shaped array of the specified type.

## Declaration

```swift
func shapedArrayValue<Scalar>(of type: Scalar.Type) -> MLShapedArray<Scalar>? where Scalar : MLShapedArrayScalar
```
