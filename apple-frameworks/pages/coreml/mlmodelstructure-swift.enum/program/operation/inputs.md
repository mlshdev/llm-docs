> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelstructure-swift.enum/program/operation/inputs](https://developer.apple.com/documentation/coreml/mlmodelstructure-swift.enum/program/operation/inputs)

# inputs

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

The arguments to the Operation.

## Declaration

```swift
let inputs: [String : MLModelStructure.Program.Argument]
```

## See Also

### Accessing the properties

- [blocks](blocks.md): Nested blocks for loops and conditionals, e.g., a conditional block will have two entries here.
- [operatorName](operatorname.md): The name of the operator, e.g., “conv”, “pool”, “softmax”, etc.
- [outputs](outputs.md): The outputs of the Operation.
