> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodmacommand/create

# Create

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t Create(IOService *device, uint64_t options, const IODMACommandSpecification *specification, IODMACommand **command);
```

## See Also

### Creating a DMA Command

- [init](init.md)
- [free](free.md)
