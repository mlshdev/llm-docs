> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/blockstoragedevicedriverkit/iouserstorageoptions](https://developer.apple.com/documentation/blockstoragedevicedriverkit/iouserstorageoptions)

# IOUserStorageOptions

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit 21.0+

Options that affect the performance of read-write operations.

## Declaration

```objectivec
typedef uint32_t IOUserStorageOptions;
```

<a id="Discussion"></a>

## Discussion

Use these options with the [DoAsyncReadWrite](iouserblockstoragedevice/doasyncreadwrite.md) function.

## Topics

### Storage Options

- [kIOUserStorageOptionNone](kiouserstorageoptionnone.md): A value that defines no options.
- [kIOUserStorageOptionForceUnitAccess](kiouserstorageoptionforceunitaccess.md): An option to use Force Unit Access (FUA).

## See Also

### Accessing the Device

- [DoAsyncUnmap](iouserblockstoragedevice/doasyncunmap.md): Sends an asynchronous request to the dext to reclaim storage by unmapping.
- [BlockRange](blockrange.md): A structure that represents a range of blocks.
- [DoAsyncSynchronize](iouserblockstoragedevice/doasyncsynchronize.md): Forces the hardware buffer to flush data blocks to the media.
- [DoAsyncEjectMedia](iouserblockstoragedevice/doasyncejectmedia.md): Ejects the media.
- [Complete](iouserblockstoragedevice/complete.md): Indicates that the dext completed an asynchronous call.
- [DoAsyncReadWrite](iouserblockstoragedevice/doasyncreadwrite.md): Starts an asynchronous read or write operation.
- [CompleteIO](iouserblockstoragedevice/completeio.md): Indicates that the dext completed an asynchronous read-write call.
