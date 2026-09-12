> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioextendedlba/1813870-setextendedlba](https://developer.apple.com/documentation/kernel/ioextendedlba/1813870-setextendedlba)

# setExtendedLBA

**Interface language:** Objective-C

**Framework:** Kernel

convenience method that sets the taskfile registers into a 48-bit LBA address, along with sector count, and unit selected and LBA bit set

## Declaration

```objectivec
virtual void setExtendedLBA(
 UInt32 inLBAHi,
 UInt32 inLBALo,
 ataUnitID inUnit,
 UInt16 extendedCount,
 UInt8 extendedCommand); 
```

## See Also

### Miscellaneous

- [getCommand](1813831-getcommand.md): Taskfile access. Registers are named in accordance with ATA Standards conventions
- [getDevice](1813835-getdevice.md): Taskfile access. Registers are named in accordance with ATA Standards conventions
- [getExtendedLBA](1813840-getextendedlba.md): convenience method that gets a 48-bit LBA
- [getFeatures16](1813845-getfeatures16.md): Taskfile access. Registers are named in accordance with ATA Standards conventions
- [getLBAHigh16](1813850-getlbahigh16.md): convenience method that gets the high 16 bits of a 48-bit LBA
- [getLBALow16](1813853-getlbalow16.md): convenience method that gets the lower 16 bits of a 48-bit LBA
- [getLBAMid16](1813856-getlbamid16.md): convenience method that gets the middle 16 bits of a 48-bit LBA
- [getSectorCount16](1813860-getsectorcount16.md): Taskfile access. Registers are named in accordance with ATA Standards conventions
- [setCommand](1813863-setcommand.md): Taskfile access. Registers are named in accordance with ATA Standards conventions
- [setDevice](1813867-setdevice.md): Taskfile access. Registers are named in accordance with ATA Standards conventions
- [setFeatures16](1813873-setfeatures16.md): Taskfile access. Registers are named in accordance with ATA Standards conventions
- [setLBAHigh16](1813876-setlbahigh16.md): convenience method that sets the high 16 bits of a 48-bit LBA
- [setLBALow16](1813879-setlbalow16.md): convenience method that sets the lower 16 bits of a 48-bit LBA
- [setLBAMid16](1813881-setlbamid16.md): convenience method that sets the middle 16 bits of a 48-bit LBA
- [setSectorCount16](1813884-setsectorcount16.md): Taskfile access. Registers are named in accordance with ATA Standards conventions
- [zeroData](1813886-zerodata.md): convenience method that zeros out the lba, sector count, features, device, and command member variables
