> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1522010-determinemediumcapacity

# DetermineMediumCapacity

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool DetermineMediumCapacity(UInt64 *blockSize, UInt64 *blockCount);
```
