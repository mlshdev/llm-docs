> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1547721-weakwithspecification](https://developer.apple.com/documentation/kernel/1547721-weakwithspecification)

# weakWithSpecification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.6+

## Declaration

```objectivec
static IOReturn weakWithSpecification(IODMACommand **newCommand, SegmentFunction outSegFunc, UInt8 numAddressBits, UInt64 maxSegmentSize, MappingOptions mapType, UInt64 maxTransferSize, UInt32 alignment, IOMapper *mapper, void *refCon);
```

```objectivec
IOReturn weakWithSpecification(IODMACommand **newCommand, SegmentFunction outSegFunc, UInt8 numAddressBits, UInt64 maxSegmentSize, MappingOptions mapType, UInt64 maxTransferSize, UInt32 alignment, IOMapper *mapper, void *refCon);
```
