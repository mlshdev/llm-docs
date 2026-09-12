> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/doasyncreadwrite](https://developer.apple.com/documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/doasyncreadwrite)

# DoAsyncReadWrite

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Starts an asynchronous read or write operation.

## Declaration

```objectivec
virtual kern_return_t DoAsyncReadWrite(bool isRead, uint32_t requestID, uint64_t dmaAddr, uint64_t size, uint64_t lba, uint64_t numOfBlocks, IOUserStorageOptions options);
```

## Parameters

- `requestID`: An opaque identifier. After the dext completes the request, it calls [CompleteIO](completeio.md) and sends this value as a parameter.
- `dmaAddr`: The DMA address of the data buffer.
- `size`: The size of the data buffer.
- `lba`: The start logical block number.
- `numOfBlocks`: The number of blocks to read or write.
- `options`: Data transfer options. These can be any combination of `kIOUserStorage…` values (defined in [IOUserStorageOptions](../iouserstorageoptions.md)) combined together with the logical `OR` operator.

<a id="return-value"></a>

## Return Value

A value that indicates the result of the read/write operation. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

When the read or write operation completes, the dext calls your [CompleteIO](completeio.md) method with the results of the operation.

## See Also

### Accessing the Device

- [DoAsyncUnmap](doasyncunmap.md): Sends an asynchronous request to the dext to reclaim storage by unmapping.
- [BlockRange](../blockrange.md): A structure that represents a range of blocks.
- [DoAsyncSynchronize](doasyncsynchronize.md): Forces the hardware buffer to flush data blocks to the media.
- [DoAsyncEjectMedia](doasyncejectmedia.md): Ejects the media.
- [Complete](complete.md): Indicates that the dext completed an asynchronous call.
- [IOUserStorageOptions](../iouserstorageoptions.md): Options that affect the performance of read-write operations.
- [CompleteIO](completeio.md): Indicates that the dext completed an asynchronous read-write call.
