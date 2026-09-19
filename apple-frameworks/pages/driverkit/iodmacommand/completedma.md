> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodmacommand/completedma

# CompleteDMA

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t CompleteDMA(uint64_t options);
```

## See Also

### Performing Internal Operations

- [GetPreparation](getpreparation.md)
- [PerformOperation](performoperation.md)
- [PrepareForDMA](preparefordma.md)
