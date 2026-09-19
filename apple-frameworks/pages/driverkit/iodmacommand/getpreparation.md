> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodmacommand/getpreparation

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
