> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/getrevisionstring](https://developer.apple.com/documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/getrevisionstring)

# GetRevisionString

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets a string that identifies the current revision in response to a call from the framework.

## Declaration

```objectivec
virtual kern_return_t GetRevisionString(struct DeviceString *revision);
```

## Parameters

- `revision`: An in/out [DeviceString](../devicestring.md) parameter. On output, populate this structure with the revision string.

<a id="return-value"></a>

## Return Value

A value that indicates the get-revision-string result. Return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) to inidicate success. To indicate a failure, see [IOKit Constants](../../iokit/iokit_constants.md) for error definitions.

## See Also

### Reporting Device Metadata

- [GetVendorString](getvendorstring.md): Gets a string that identifies the vendor in response to a call from the framework.
- [GetProductString](getproductstring.md): Gets a string that identifies the product in response to a call from the framework.
- [GetAdditionalInfoString](getadditionalinfostring.md): Gets a string that provides additional information in response to a call from the framework.
- [DeviceString](../devicestring.md): A type that represents a string of character data from the device.
- [GetDeviceParams](getdeviceparams.md): Gets device parameters in response to a call from the framework.
- [DeviceParams](../deviceparams.md): A structure that represents hardware-specific properties of the block storage device.
