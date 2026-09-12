> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelstructureprogramblock/operations](https://developer.apple.com/documentation/coreml/mlmodelstructureprogramblock/operations)

# operations

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The list of topologically sorted operations in the block.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<MLModelStructureProgramOperation *> * operations;
```

## See Also

### Accessing the program block properties

- [inputs](inputs.md): The named inputs to the block.
- [outputNames](outputnames.md): The output names.
