> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface197/1559054-getiousblibversion](https://developer.apple.com/documentation/iokit/iousbdeviceinterface197/1559054-getiousblibversion)

# GetIOUSBLibVersion

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Returns the version of the IOUSBLib and the version of the IOUSBFamily.

## Declaration

```objectivec
IOReturn (*GetIOUSBLibVersion)(void *self, NumVersion *ioUSBLibVersion, NumVersion *usbFamilyVersion);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.
- `ioUSBLibVersion`: Pointer to a NumVersion structure that on return will contain the version of the IOUSBLib.
- `usbFamilyVersion`: Pointer to a NumVersion structure that on return will contain the version of the IOUSBFamily.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService.

<a id="discussion"></a>

## Discussion

The device does not have to be open to use this function.
