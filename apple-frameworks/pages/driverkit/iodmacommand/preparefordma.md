> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodmacommand/preparefordma

# PrepareForDMA

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t PrepareForDMA(uint64_t options, IOMemoryDescriptor *memory, uint64_t offset, uint64_t length, uint64_t *flags, uint32_t *segmentsCount, IOAddressSegment segments[32]);
```

## See Also

### Performing Internal Operations

- [CompleteDMA](completedma.md)
- [GetPreparation](getpreparation.md)
- [PerformOperation](performoperation.md)
