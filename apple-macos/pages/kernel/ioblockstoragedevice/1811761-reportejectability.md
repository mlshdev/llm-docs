> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioblockstoragedevice/1811761-reportejectability](https://developer.apple.com/documentation/kernel/ioblockstoragedevice/1811761-reportejectability)

# reportEjectability

**Interface language:** Objective-C

**Framework:** Kernel

Report if the media is ejectable under software control.

## Declaration

```objectivec
virtual IOReturn reportEjectability(
 bool *isEjectable) = 0; 
```

## Parameters

- `isEjectable`: Pointer to returned result. True indicates the media is ejectable, False indicates the media cannot be ejected under software control.

<a id="overview"></a>

## Overview

This method should only be called if the media is known to be removable.

## See Also

### Miscellaneous

- [doAsyncReadWrite](1811665-doasyncreadwrite.md): Start an asynchronous read or write operation.
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
- [reportMaxValidBlock](1811771-reportmaxvalidblock.md): Report the highest valid block for the device.
- [reportMediaState](1811780-reportmediastate.md): Report the device's media state.
- [reportRemovability](1811787-reportremovability.md): Report whether the media is removable or not.
- [reportWriteProtection](1811796-reportwriteprotection.md): Report whether the media is write-protected or not.
- [requestIdle](1811804-requestidle.md): Request that the device enter an idle state.
- [setWriteCacheState](1811812-setwritecachestate.md): Sets the write cache state of the device.
