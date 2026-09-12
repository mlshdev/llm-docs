> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface197/1559654-getbusmicroframenumber](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface197/1559654-getbusmicroframenumber)

# GetBusMicroFrameNumber

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Gets the current micro frame number of the bus to which the interface and its device are attached.

## Declaration

```objectivec
IOReturn (*GetBusMicroFrameNumber)(void *self, UInt64 *microFrame, AbsoluteTime *atTime);
```

## Parameters

- `self`: Pointer to the IOUSBInterfaceInterface.
- `microFrame`: Pointer to UInt64 to hold the microrame number.
- `atTime`: Pointer to an AbsoluteTime, which should be within 1ms of the time when the bus frame number was attained.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService.

<a id="discussion"></a>

## Discussion

The interface does not have to be open to use this function.
