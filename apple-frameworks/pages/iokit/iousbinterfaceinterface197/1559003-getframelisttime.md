> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface197/1559003-getframelisttime](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface197/1559003-getframelisttime)

# GetFrameListTime

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Returns the number of microseconds in each USB Frame.

## Declaration

```objectivec
IOReturn (*GetFrameListTime)(void *self, UInt32 *microsecondsInFrame);
```

## Parameters

- `self`: Pointer to the IOUSBInterfaceInterface.
- `microsecondsInFrame`: Pointer to UInt32 to hold the number of microseconds in each USB frame.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService.

<a id="discussion"></a>

## Discussion

This function can be used to determine whether the device is functioning in full speed or a high speed. In the case of a full speed device, the returned value will be kUSBFullSpeedMicrosecondsInFrame. In the case of a high speed device, the return value will be kUSBHighSpeedMicrosecondsInFrame. (This API should really be called GetUSBFrameTime).

The interface does not have to be open to use this function.
