> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioatadevconfig/1589982-sdriveextendedlbasize

# sDriveExtendedLBASize

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
static UInt32 sDriveExtendedLBASize(UInt32 *lbaHi, UInt32 *lbaLo, const UInt16 *identifyData);
```
