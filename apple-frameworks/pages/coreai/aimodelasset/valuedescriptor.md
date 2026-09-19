> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/aimodelasset/valuedescriptor

# AIModelAsset.ValueDescriptor

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A description of a function’s input or output value.

## Declaration

```swift
struct ValueDescriptor
```

## Topics

### Inspecting value details

- [name](valuedescriptor/name.md): The value’s name.
- [typeName](valuedescriptor/typename.md): The value’s type name.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AIModelAsset.FunctionDescriptor](functiondescriptor.md): A description of a function in the model’s program.
- [AIModelAsset.Metadata](metadata-swift.struct.md): The metadata for a model asset, including author, license, and custom key-value pairs.
- [AIModelAsset.Summary](summary.md): A summary of a model’s structure and statistics.
