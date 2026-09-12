> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelstructureprogramblock/inputs](https://developer.apple.com/documentation/coreml/mlmodelstructureprogramblock/inputs)

# inputs

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The named inputs to the block.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<MLModelStructureProgramNamedValueType *> * inputs;
```

## See Also

### Accessing the program block properties

- [operations](operations.md): The list of topologically sorted operations in the block.
- [outputNames](outputnames.md): The output names.
