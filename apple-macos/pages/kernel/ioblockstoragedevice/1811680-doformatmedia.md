> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedevice/1811680-doformatmedia](https://developer.apple.com/documentation/kernel/ioblockstoragedevice/1811680-doformatmedia)

# doFormatMedia

**Interface language:** Objective-C

**Framework:** Kernel

Format the media to the specified byte capacity.

## Declaration

```objectivec
virtual IOReturn doFormatMedia(
 UInt64byteCapacity) = 0; 
```

## Parameters

- `byteCapacity`: The byte capacity to which the device is to be formatted, if possible.

<a id="overview"></a>

## Overview

The specified byte capacity must be one supported by the device. Supported capacities can be obtained by calling doGetFormatCapacities.

## See Also

### Miscellaneous

- [doAsyncReadWrite](1811665-doasyncreadwrite.md): Start an asynchronous read or write operation.
- [doEjectMedia](1811672-doejectmedia.md): Eject the media.
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
