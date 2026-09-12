> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelasset/functiondescriptor](https://developer.apple.com/documentation/coreai/aimodelasset/functiondescriptor)

# AIModelAsset.FunctionDescriptor

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A description of a function in the model’s program.

## Declaration

```swift
struct FunctionDescriptor
```

## Topics

### Inspecting function details

- [name](functiondescriptor/name.md): The function’s symbol name.
- [inputs](functiondescriptor/inputs.md): The descriptions of the function’s inputs.
- [outputs](functiondescriptor/outputs.md): The descriptions of the function’s outputs.

### Instance Properties

- [states](functiondescriptor/states.md): The descriptions of the function’s states.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AIModelAsset.Metadata](metadata-swift.struct.md): The metadata for a model asset, including author, license, and custom key-value pairs.
- [AIModelAsset.Summary](summary.md): A summary of a model’s structure and statistics.
- [AIModelAsset.ValueDescriptor](valuedescriptor.md): A description of a function’s input or output value.
