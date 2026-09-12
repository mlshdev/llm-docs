> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodmacommand/private_accessors](https://developer.apple.com/documentation/kernel/iodmacommand/private_accessors)

# Private Accessors

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** API Collection

## Topics

### Fields

- [fMemory](private_accessors/fmemory.md)
- [reserved](private_accessors/reserved.md)
- [fRefCon](private_accessors/frefcon.md)
- [fOutSeg](private_accessors/foutseg.md)
- [fNumSegments](private_accessors/fnumsegments.md)
- [fNumAddressBits](private_accessors/fnumaddressbits.md)
- [fMaxTransferSize](private_accessors/fmaxtransfersize.md)
- [fMaxSegmentSize](private_accessors/fmaxsegmentsize.md)
- [fMappingOptions](private_accessors/fmappingoptions.md)
- [fBypassMask](private_accessors/fbypassmask.md)
- [fAlignMask](private_accessors/falignmask.md)
- [fActive](private_accessors/factive.md)
- [fMapper](private_accessors/fmapper.md)

### Functions

- [genIOVMSegments](3516448-geniovmsegments.md)
- [genIOVMSegments](3516449-geniovmsegments.md)
- [transfer](1547712-transfer.md)
- [transferSegment](1547763-transfersegment.md)
- [clientOutputSegment](1547718-clientoutputsegment.md)
- [segmentOp](1547716-segmentop.md)
- [Dispatch](3645751-dispatch.md)
- [walkAll](1547752-walkall.md)

### Callbacks

- [CompleteDMA_Invoke](3645747-completedma_invoke.md)
- [Create](3645748-create.md)
- [Create_Impl](3645749-create_impl.md)
- [Create_Invoke](3645750-create_invoke.md)
- [GetPreparation_Invoke](3645754-getpreparation_invoke.md)
- [PerformOperation_Invoke](3645757-performoperation_invoke.md)
- [PrepareForDMA_Invoke](3645760-preparefordma_invoke.md)
- [CompleteDMA](3645745-completedma.md)
- [CompleteDMA](https://developer.apple.com/documentation/driverkit/iodmacommand/completedma)
- [CompleteDMA_Impl](3645746-completedma_impl.md)
- [GetPreparation](3645752-getpreparation.md)
- [GetPreparation](https://developer.apple.com/documentation/driverkit/iodmacommand/getpreparation)
- [GetPreparation_Impl](3645753-getpreparation_impl.md)
- [PerformOperation](3645755-performoperation.md)
- [PerformOperation](https://developer.apple.com/documentation/driverkit/iodmacommand/performoperation)
- [PerformOperation_Impl](3645756-performoperation_impl.md)
- [PrepareForDMA](3645758-preparefordma.md)
- [PrepareForDMA](https://developer.apple.com/documentation/driverkit/iodmacommand/preparefordma)
- [PrepareForDMA_Impl](3645759-preparefordma_impl.md)
