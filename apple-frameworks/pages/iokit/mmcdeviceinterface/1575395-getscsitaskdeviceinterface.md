> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/mmcdeviceinterface/1575395-getscsitaskdeviceinterface](https://developer.apple.com/documentation/iokit/mmcdeviceinterface/1575395-getscsitaskdeviceinterface)

# GetSCSITaskDeviceInterface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Gets a handle to the SCSITaskDeviceInterface without closing the user client connection which was initiated by IOCreateCFPlugInForService.

## Declaration

```objectivec
SCSITaskDeviceInterface **(*GetSCSITaskDeviceInterface)(void *self);
```

## Parameters

- `self`: Pointer to an MMCDeviceInterface for one IOService.

<a id="return_value"></a>

## Return Value

Returns a handle to a SCSITaskDeviceInterface if successful, otherwise NULL.

<a id="discussion"></a>

## Discussion

Once an MMCDeviceInterface is opened the client may use this function to get a handle to the interface used to create and send SCSITasks directly to the device.
