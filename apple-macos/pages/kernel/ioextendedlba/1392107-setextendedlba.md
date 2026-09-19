> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioextendedlba/1392107-setextendedlba

# setExtendedLBA

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
virtual void setExtendedLBA(UInt32 inLBAHi, UInt32 inLBALo, ataUnitID inUnit, UInt16 extendedCount, UInt8 extendedCommand);
```
