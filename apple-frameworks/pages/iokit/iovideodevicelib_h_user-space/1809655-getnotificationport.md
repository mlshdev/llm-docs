> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iovideodevicelib_h_user-space/1809655-getnotificationport](https://developer.apple.com/documentation/iokit/iovideodevicelib_h_user-space/1809655-getnotificationport)

# GetNotificationPort

**Interface language:** Objective-C

**Framework:** IOKit

Get the notification port for device state changes sent to user space.

## Declaration

```objectivec
CFMachPortRef ( *GetNotificationPort)(
   IOVideoDeviceRef device);
```

## Parameters

- `device`: The IOVideoDeviceRef of the stream to operate on.

<a id="return_value"></a>

## Return Value

A CFMachPortRef of the output notification port.

## See Also

### Opening and closing VideoDevices

- [AddToRunLoop](../iostreamlib_h/1809610-addtorunloop.md): Add the CFRunLoopSource for the notification port to a run loop.
- [Close](../iostreamlib_h/1809625-close.md): Closes an IOStream.
- [CreateStreamInterface](1809640-createstreaminterface.md)
- [GetRunLoopSource](../iostreamlib_h/1809678-getrunloopsource.md): Gets a CFRunLoopSource for the CFMachPort used for notifications from the kernel that data is ready.
- [Open](../iostreamlib_h/1809697-open.md): Open an IOStream from user space.
- [ReleaseStreamInterface](1809719-releasestreaminterface.md)
- [RemoveFromRunLoop](../iostreamlib_h/1809745-removefromrunloop.md): Remove the CFRunLoopSource for the notification port from a run loop.
- [SetNotificationCallback](1809779-setnotificationcallback.md): Set the callback function to be called when certain device state changes happen.
- [SetStreamFormat](1809797-setstreamformat.md)
