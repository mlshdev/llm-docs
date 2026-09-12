> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/mmcdeviceinterface/1575350-gettraystate](https://developer.apple.com/documentation/iokit/mmcdeviceinterface/1575350-gettraystate)

# GetTrayState

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Issues a GET_EVENT_STATUS_NOTIFICATION command to the device as defined in MMC-2.

## Declaration

```objectivec
IOReturn (*GetTrayState)(void *self, UInt8 *trayState);
```

## Parameters

- `self`: Pointer to an MMCDeviceInterface for one IOService.
- `trayState`: Pointer to a UInt8 which will hold the tray state on completion of the routine. The tray state can be one of two values, kMMCDeviceTrayClosed or kMMCDeviceTrayOpen.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, or kIOReturnExclusiveAccess if the device is already opened for exclusive access by another client.

<a id="discussion"></a>

## Discussion

Once an MMCDeviceInterface is opened, the client may send this command to find out if the device's medium tray is open.
