> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioextendedlba/1392107-setextendedlba](https://developer.apple.com/documentation/kernel/ioextendedlba/1392107-setextendedlba)

# setExtendedLBA

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
virtual void setExtendedLBA(UInt32 inLBAHi, UInt32 inLBALo, ataUnitID inUnit, UInt16 extendedCount, UInt8 extendedCommand);
```
