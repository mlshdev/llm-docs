> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdtransformoperation](https://developer.apple.com/documentation/usdkit/usdtransformoperation)

# USDTransformOperation

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A single transform applied to a prim, such as a translation, rotation, scale, or matrix.

## Declaration

```swift
struct USDTransformOperation
```

## Topics

### Initializers

- [init(attribute:inverted:)](usdtransformoperation/init%28attribute_inverted_%29.md): Creates a transform operation from an attribute.

### Instance Properties

- [attribute](usdtransformoperation/attribute.md): The attribute backing this operation.
- [baseName](usdtransformoperation/basename.md): The base name of this operation without namespace.
- [hasTimeSamples](usdtransformoperation/hastimesamples.md): A Boolean value indicating whether the operation has authored time samples.
- [isDefined](usdtransformoperation/isdefined.md): A Boolean value indicating whether this operation is defined.
- [isInverse](usdtransformoperation/isinverse.md): A Boolean value indicating whether this is an inverse operation.
- [kind](usdtransformoperation/kind-swift.property.md): The kind of this transform operation, or `nil` if the operation is not defined.
- [name](usdtransformoperation/name.md): The full name of this operation.
- [precision](usdtransformoperation/precision-swift.property.md): The numeric precision of this operation’s value.
- [timeSamples](usdtransformoperation/timesamples.md): All time samples authored for this operation.

### Instance Methods

- [timeSamples(in:)](usdtransformoperation/timesamples%28in_%29.md): Returns time samples authored within the specified interval.
- [transform(at:)](usdtransformoperation/transform%28at_%29.md): Computes the transformation matrix at the specified time.

### Enumerations

- [USDTransformOperation.Kind](usdtransformoperation/kind-swift.enum.md): The kind of transform operation.
- [USDTransformOperation.Precision](usdtransformoperation/precision-swift.enum.md): The numeric precision of the operation’s value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
