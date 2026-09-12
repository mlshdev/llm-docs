> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedevice/1811665-doasyncreadwrite](https://developer.apple.com/documentation/kernel/ioblockstoragedevice/1811665-doasyncreadwrite)

# doAsyncReadWrite

**Interface language:** Objective-C

**Framework:** Kernel

Start an asynchronous read or write operation.

## Declaration

```objectivec
#ifdef __LP64__
 virtual IOReturn doAsyncReadWrite(
 IOMemoryDescriptor *buffer, 
 UInt64 block,
 UInt64 nblks, 
 IOStorageAttributes *attributes, 
 IOStorageCompletion *completion) = 0; 
#else /* !__LP64__ */
virtual IOReturn doAsyncReadWrite(
 IOMemoryDescriptor *buffer, 
 UInt64 block,
 UInt64 nblks, 
 IOStorageAttributes *attributes, 
 IOStorageCompletion *completion); 
#endif 
/* !__LP64__ */
```

## Parameters

- `buffer`: An IOMemoryDescriptor describing the data-transfer buffer. The data direction is contained in the IOMemoryDescriptor. Responsibility for releasing the descriptor rests with the caller.
- `block`: The starting block number of the data transfer.
- `nblks`: The integral number of blocks to be transferred.
- `attributes`: Attributes of the data transfer. See IOStorageAttributes.
- `completion`: The completion routine to call once the data transfer is complete.

## See Also

### Miscellaneous

- [doEjectMedia](1811672-doejectmedia.md): Eject the media.
- [doFormatMedia](1811680-doformatmedia.md): Format the media to the specified byte capacity.
- [doGetFormatCapacities](1811684-dogetformatcapacities.md): Return the allowable formatting byte capacities.
- [doSynchronizeCache](1811691-dosynchronizecache.md): Force data blocks in the hardware's buffer to be flushed to the media.
- [doUnmap](1811698-dounmap.md): Delete unused data blocks from the media.
- [getAdditionalDeviceInfoString](1811705-getadditionaldeviceinfostring.md): Return additional informational string for the device.
- [getProductString](1811712-getproductstring.md): Return Product Name string for the device.
- [getRevisionString](1811717-getrevisionstring.md): Return Product Revision string for the device.
- [getVendorString](1811724-getvendorstring.md): Return Vendor Name string for the device.
- [getWriteCacheState](1811731-getwritecachestate.md): Reports the current write cache state of the device.
- [init](1811746-init.md)
- [reportBlockSize](1811753-reportblocksize.md): Report the block size for the device, in bytes.
- [reportEjectability](1811761-reportejectability.md): Report if the media is ejectable under software control.
- [reportMaxValidBlock](1811771-reportmaxvalidblock.md): Report the highest valid block for the device.
- [reportMediaState](1811780-reportmediastate.md): Report the device's media state.
- [reportRemovability](1811787-reportremovability.md): Report whether the media is removable or not.
- [reportWriteProtection](1811796-reportwriteprotection.md): Report whether the media is write-protected or not.
- [requestIdle](1811804-requestidle.md): Request that the device enter an idle state.
- [setWriteCacheState](1811812-setwritecachestate.md): Sets the write cache state of the device.
