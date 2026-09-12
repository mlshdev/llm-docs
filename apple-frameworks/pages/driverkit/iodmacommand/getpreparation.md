> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodmacommand/getpreparation](https://developer.apple.com/documentation/driverkit/iodmacommand/getpreparation)

# GetPreparation

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t GetPreparation(uint64_t *offset, uint64_t *length, IOMemoryDescriptor **memory);
```

## See Also

### Performing Internal Operations

- [CompleteDMA](completedma.md)
- [PerformOperation](performoperation.md)
- [PrepareForDMA](preparefordma.md)
