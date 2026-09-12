> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iovideodevicelib_h_user-space/1809719-releasestreaminterface](https://developer.apple.com/documentation/iokit/iovideodevicelib_h_user-space/1809719-releasestreaminterface)

# ReleaseStreamInterface

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
IOReturn ( *ReleaseStreamInterface)(
   IOVideoDeviceRef device,
   bool isInput,
   IOStreamRef *streamRef);
```

## Parameters

- `device`: The IOVideoDeviceRef of the device to operate on.
- `isInput`:
- `streamRef`:

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the stream was successfully stopped from the run loop.

## See Also

### Opening and closing VideoDevices

- [AddToRunLoop](../iostreamlib_h/1809610-addtorunloop.md): Add the CFRunLoopSource for the notification port to a run loop.
- [Close](../iostreamlib_h/1809625-close.md): Closes an IOStream.
- [CreateStreamInterface](1809640-createstreaminterface.md)
- [GetNotificationPort](1809655-getnotificationport.md): Get the notification port for device state changes sent to user space.
- [GetRunLoopSource](../iostreamlib_h/1809678-getrunloopsource.md): Gets a CFRunLoopSource for the CFMachPort used for notifications from the kernel that data is ready.
- [Open](../iostreamlib_h/1809697-open.md): Open an IOStream from user space.
- [RemoveFromRunLoop](../iostreamlib_h/1809745-removefromrunloop.md): Remove the CFRunLoopSource for the notification port from a run loop.
- [SetNotificationCallback](1809779-setnotificationcallback.md): Set the callback function to be called when certain device state changes happen.
- [SetStreamFormat](1809797-setstreamformat.md)
