> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/1547732-clonecommand](https://developer.apple.com/documentation/kernel/iodmacommand/1547732-clonecommand)

# cloneCommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Creates a new command based on the specification of the current one.

## Declaration

```objectivec
virtual OSPtr<IODMACommand> cloneCommand(void *refCon);
```

<a id="return_value"></a>

## Return Value

Returns a new memory cursor if successfully created and initialised, 0 otherwise.

<a id="discussion"></a>

## Discussion

Factory function to create and initialise an IODMACommand in one operation. The current command's specification will be duplicated in the new object, but however none of its state will be duplicated. This means that it is safe to clone a command even if it is currently active and running, however you must be certain that the command to be duplicated does have a valid reference for the duration.

## See Also

### Creating a DMA Command

- [withSpecification](1811330-withspecification.md): Creates and initializes a DMA command in one operation.
- [withSpecification](1547758-withspecification.md): Creates and initializes an DMA command in one operation.
- [withSpecification](3516452-withspecification.md): Creates and initializes an DMA command in one operation.
- [initWithSpecification](1811207-initwithspecification.md): Primary initializer for the DMA command object.
- [initWithSpecification](1547748-initwithspecification.md): Primary initializer for the DMA command object.
- [initWithSpecification](3516450-initwithspecification.md): Primary initializer for the DMA command object.
- [weakWithSpecification](1811323-weakwithspecification.md): Creates and initializes an DMA command object in one operation if this version of the operating system supports it.
- [withRefCon](1547747-withrefcon.md)
- [initWithRefCon](1547754-initwithrefcon.md)
- [cloneCommand](1811059-clonecommand.md): Creates a new command based on the specification of the current one.
- [init](https://developer.apple.com/documentation/driverkit/iodmacommand/init)
- [free](1547725-free.md)
- [MappingOptions](mappingoptions.md): Mapping types to indicate the desired mapper type for translating memory descriptors into I/O DMA Bus addresses.
- [SynchronizeOptions](synchronizeoptions.md): Options for the synchronize method.
