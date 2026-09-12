> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/blockstoragedevicedriverkit/devicestring](https://developer.apple.com/documentation/blockstoragedevicedriverkit/devicestring)

# DeviceString

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 21.0+

A type that represents a string of character data from the device.

## Declaration

```objectivec
struct DeviceString;
```

## Topics

### Accessing String Data

- [data](devicestring/data.md): The string’s character data.

## See Also

### Reporting Device Metadata

- [GetVendorString](iouserblockstoragedevice/getvendorstring.md): Gets a string that identifies the vendor in response to a call from the framework.
- [GetProductString](iouserblockstoragedevice/getproductstring.md): Gets a string that identifies the product in response to a call from the framework.
- [GetRevisionString](iouserblockstoragedevice/getrevisionstring.md): Gets a string that identifies the current revision in response to a call from the framework.
- [GetAdditionalInfoString](iouserblockstoragedevice/getadditionalinfostring.md): Gets a string that provides additional information in response to a call from the framework.
- [GetDeviceParams](iouserblockstoragedevice/getdeviceparams.md): Gets device parameters in response to a call from the framework.
- [DeviceParams](deviceparams.md): A structure that represents hardware-specific properties of the block storage device.
