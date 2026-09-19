> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodmacontroller/1485765-validfifodepth

# validFIFODepth

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOByteCount validFIFODepth(UInt32 dmaIndex, IOByteCount depth, IODirection direction);
```
