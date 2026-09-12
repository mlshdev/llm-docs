> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencevalue/kind-swift.enum](https://developer.apple.com/documentation/coreai/inferencevalue/kind-swift.enum)

# InferenceValue.Kind

**Framework:** Core AI  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The type of data an inference value contains.

## Declaration

```swift
enum Kind
```

## Topics

### Defining value kinds

- [InferenceValue.Kind.image](kind-swift.enum/image.md): A pixel buffer image value.
- [InferenceValue.Kind.ndArray](kind-swift.enum/ndarray.md): A multidimensional array value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing values

- [InferenceValue.Descriptor](descriptor.md): A description of the type and shape of an inference value.
