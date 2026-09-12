> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/mmcdeviceinterface/1575380-settraystate](https://developer.apple.com/documentation/iokit/mmcdeviceinterface/1575380-settraystate)

# SetTrayState

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Issues a START_STOP_UNIT command to the device as defined in SBC-3.

## Declaration

```objectivec
IOReturn (*SetTrayState)(void *self, UInt8 trayState);
```

## Parameters

- `self`: Pointer to an MMCDeviceInterface for one IOService.
- `trayState`: A UInt8 describing which tray state is desired. The tray state can be one of two values, kMMCDeviceTrayClosed or kMMCDeviceTrayOpen.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, kIOReturnNotPermitted if media is inserted, or kIOReturnExclusiveAccess if the device is already opened for exclusive access by another client.

<a id="discussion"></a>

## Discussion

Once an MMCDeviceInterface is opened and all volumes associated with that device's media have been unmounted, the client may send this command to eject the tray.
