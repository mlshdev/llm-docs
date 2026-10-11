> Snapshot-pinned source payload for Apple macOS snapshot-8257b11be327; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodtplatformexpert/1451562-writenvrampartition

# writeNVRAMPartition

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn writeNVRAMPartition(const OSSymbol *partitionID, IOByteCount offset, UInt8 *buffer, IOByteCount length);
```
