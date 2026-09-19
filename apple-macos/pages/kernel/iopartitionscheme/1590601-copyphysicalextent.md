> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopartitionscheme/1590601-copyphysicalextent

# copyPhysicalExtent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOStorage * copyPhysicalExtent(IOService *client, UInt64 *byteStart, UInt64 *byteCount);
```
