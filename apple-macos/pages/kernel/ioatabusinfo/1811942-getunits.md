> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioatabusinfo/1811942-getunits](https://developer.apple.com/documentation/kernel/ioatabusinfo/1811942-getunits)

# getUnits

**Interface language:** Objective-C

**Framework:** Kernel

How many devices are present on bus. Used by clients of ATAControllers to find out about the bus.

## Declaration

```objectivec
UInt8 getUnits(
 void ); 
```

## See Also

### Miscellaneous

- [atabusinfo](1811871-atabusinfo.md): factory method
- [getDMAModes](1811885-getdmamodes.md): bit-significant map of DMA mode(s) supported on the bus. Used by clients of ATAControllers to find out about the bus.
- [getPIOModes](1811901-getpiomodes.md): returns the bit-significant map of PIO mode(s) supported on the bus. Used by clients of ATAControllers to find out about the bus.
- [getSocketType](1811918-getsockettype.md): returns the socket type, internal fixed, media-bay, PC-Card Used by clients of ATAControllers to find out about the bus
- [getUltraModes](1811926-getultramodes.md): bit-significant map of Ultra mode(s) supported on the bus. Used by clients of ATAControllers to find out about the bus.
- [maxBlocksExtended](1811951-maxblocksextended.md): The maximum number of 512-byte blocks this controller supports in a single Extended LBA transfer. Some controllers may be limited to less than the maximum sector count allowed under extended LBA protocol.
- [setDMAModes](1811960-setdmamodes.md): Bit significant map of supported transfer modes. Set by ATAControllers.
- [setDMAQueued](1811970-setdmaqueued.md): Set true if supports DMA Queued Feature. Set by ATAControllers.
- [setExtendedLBA](1811982-setextendedlba.md): Set true for supports 48-bit LBA. Set by ATAControllers.
- [setMaxBlocksExtended](1811988-setmaxblocksextended.md): value set by controllers to indicate the maximum number of blocks allowed in a single transfer of data. Some dma engines may not be capable of supporting the full 16-bit worth of sector count allowed under 48 bit extended LBA. Default is 256 blocks, same as standard ATA.
- [setOverlapped](1811995-setoverlapped.md): Set true for supports overlapped packet feature set. Set by ATAControllers.
- [setPIOModes](1812001-setpiomodes.md): Bit significant map of supported transfer modes. Set by ATAControllers.
- [setSocketType](1812008-setsockettype.md): internal fixed, media-bay, PC-Card. Set by ATAControllers.
- [setUltraModes](1812012-setultramodes.md): Bit significant map of supported transfer modes. Set by ATAControllers.
- [setUnits](1812016-setunits.md): set to indicate how many devices are on this bus. Set by ATAControllers.
- [supportsDMA](1812021-supportsdma.md): True = DMA supported on bus - inferred by looking at the DMA mode bits. Used by clients of ATAControllers to find out about the bus.
- [supportsDMAQueued](1812025-supportsdmaqueued.md): Supports DMA Queued Feature set if true. Used by clients of ATAControllers to find out about the bus.
- [supportsExtendedLBA](1812028-supportsextendedlba.md): Supports 48-bit LBA if true. Used by clients of ATAControllers to find out about the bus.
- [supportsOverlapped](1812032-supportsoverlapped.md): Supports overlapped packet feature set if true. Used by clients of ATAControllers to find out about the bus.
- [zeroData](1812035-zerodata.md): set this object to a blank state.
