> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlmodelstructureprogramoperation/operatorname

# operatorName

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The name of the operator, e.g., “conv”, “pool”, “softmax”, etc.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * operatorName;
```

## See Also

### Accessing the program operation properties

- [blocks](blocks.md): Nested blocks for loops and conditionals, e.g., a conditional block will have two entries here.
- [inputs](inputs.md): The arguments to the Operation.
- [outputs](outputs.md): The outputs of the Operation.
