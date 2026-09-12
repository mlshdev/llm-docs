> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamlib_h/1809610-addtorunloop](https://developer.apple.com/documentation/iokit/iostreamlib_h/1809610-addtorunloop)

# AddToRunLoop

**Interface language:** Objective-C

**Framework:** IOKit

Add the CFRunLoopSource for the notification port to a run loop.

## Declaration

```objectivec
IOReturn ( *AddToRunLoop)(
   IOStreamRef stream,
   CFRunLoopRef runLoop );
```

## Parameters

- `stream`: The IOStreamRef of the stream to operate on.
- `runLoop`: The run loop to which to add the notification source.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the source was successfully added to the run loop.

## See Also

### Run loop operations

- [GetRunLoopSource](1809678-getrunloopsource.md): Gets a CFRunLoopSource for the CFMachPort used for notifications from the kernel that data is ready.
- [RemoveFromRunLoop](1809745-removefromrunloop.md): Remove the CFRunLoopSource for the notification port from a run loop.
