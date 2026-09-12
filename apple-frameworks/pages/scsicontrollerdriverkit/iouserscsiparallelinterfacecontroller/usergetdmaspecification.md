> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usergetdmaspecification](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usergetdmaspecification)

# UserGetDMASpecification

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Gets the controller-specific direct memory access (DMA) specification in response to a call from the framework.

## Declaration

```objectivec
virtual kern_return_t UserGetDMASpecification(uint64_t *maxTransferSize, uint32_t *alignment, uint8_t *numAddressBits, DMAOutputSegmentType *segmentType);
```

## Parameters

- `maxTransferSize`: The maximum allowable transfer size for the controller.
- `alignment`: The required alignment for the controller.
- `numAddressBits`: The number of bits that the hardware uses on its internal address bus.
- `segmentType`: On return, set this output segment type according to the endianness of the hardware.

<a id="return-value"></a>

## Return Value

A value that indicates the result of getting the DMA specification. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

## See Also

### Managing Direct Memory Access

- [DMAOutputSegmentType](../dmaoutputsegmenttype.md): The size and endianness that the system uses for direct memory access (DMA).
