> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/dmaoutputsegmenttype](https://developer.apple.com/documentation/scsicontrollerdriverkit/dmaoutputsegmenttype)

# DMAOutputSegmentType

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit

The size and endianness that the system uses for direct memory access (DMA).

## Declaration

```objectivec
typedef enum DMAOutputSegmentType : uint16_t { ... } DMAOutputSegmentType;
```

## Topics

### Segment Types

- [kDMAOutputSegmentBig32](dmaoutputsegmenttype/kdmaoutputsegmentbig32.md): A constant representing big-endian 32-bit DMA segments.
- [kDMAOutputSegmentBig64](dmaoutputsegmenttype/kdmaoutputsegmentbig64.md): A constant representing big-endian 64-bit DMA segments.
- [kDMAOutputSegmentHost32](dmaoutputsegmenttype/kdmaoutputsegmenthost32.md): A constant representing 32-bit DMA segments with host-native endianness.
- [kDMAOutputSegmentHost64](dmaoutputsegmenttype/kdmaoutputsegmenthost64.md): A constant representing 64-bit DMA segments with host-native endianness.
- [kDMAOutputSegmentLittle32](dmaoutputsegmenttype/kdmaoutputsegmentlittle32.md): A constant representing little-endian 32-bit DMA segments.
- [kDMAOutputSegmentLittle64](dmaoutputsegmenttype/kdmaoutputsegmentlittle64.md): A constant representing little-endian 64-bit DMA segments.

## See Also

### Managing Direct Memory Access

- [UserGetDMASpecification](iouserscsiparallelinterfacecontroller/usergetdmaspecification.md): Gets the controller-specific direct memory access (DMA) specification in response to a call from the framework.
