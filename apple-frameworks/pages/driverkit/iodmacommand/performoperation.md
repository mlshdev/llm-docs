> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodmacommand/performoperation](https://developer.apple.com/documentation/driverkit/iodmacommand/performoperation)

# PerformOperation

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t PerformOperation(uint64_t options, uint64_t dmaOffset, uint64_t length, uint64_t dataOffset, IOMemoryDescriptor *data);
```

## See Also

### Performing Internal Operations

- [CompleteDMA](completedma.md)
- [GetPreparation](getpreparation.md)
- [PrepareForDMA](preparefordma.md)
