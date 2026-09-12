> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/doasyncsynchronize](https://developer.apple.com/documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/doasyncsynchronize)

# DoAsyncSynchronize

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Forces the hardware buffer to flush data blocks to the media.

## Declaration

```objectivec
virtual kern_return_t DoAsyncSynchronize(uint32_t requestID, uint64_t lba, uint64_t numOfBlocks);
```

## Parameters

- `requestID`: An opaque identifier. After the dext completes the request, it calls [Complete](complete.md) and sends this value as a parameter.
- `lba`: The logical block number of the first block to synchronize.
- `numOfBlocks`: The number of blocks to synchronize.

<a id="return-value"></a>

## Return Value

A value that indicates the synchronize result. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

When the synchronize operation completes, the dext calls your [Complete](complete.md) method with the results of the operation.

## See Also

### Accessing the Device

- [DoAsyncUnmap](doasyncunmap.md): Sends an asynchronous request to the dext to reclaim storage by unmapping.
- [BlockRange](../blockrange.md): A structure that represents a range of blocks.
- [DoAsyncEjectMedia](doasyncejectmedia.md): Ejects the media.
- [Complete](complete.md): Indicates that the dext completed an asynchronous call.
- [DoAsyncReadWrite](doasyncreadwrite.md): Starts an asynchronous read or write operation.
- [IOUserStorageOptions](../iouserstorageoptions.md): Options that affect the performance of read-write operations.
- [CompleteIO](completeio.md): Indicates that the dext completed an asynchronous read-write call.
