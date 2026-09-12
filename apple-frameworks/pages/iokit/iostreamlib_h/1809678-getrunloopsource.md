> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamlib_h/1809678-getrunloopsource](https://developer.apple.com/documentation/iokit/iostreamlib_h/1809678-getrunloopsource)

# GetRunLoopSource

**Interface language:** Objective-C

**Framework:** IOKit

Gets a CFRunLoopSource for the CFMachPort used for notifications from the kernel that data is ready.

## Declaration

```objectivec
CFRunLoopSourceRef ( *GetRunLoopSource)(
   IOStreamRef stream );
```

## Parameters

- `stream`: The IOStreamRef of the stream to operate on.

<a id="return_value"></a>

## Return Value

The CFRunLoopSourceRef for the run loop source, or NULL if there was an error creating the source.

## See Also

### Run loop operations

- [AddToRunLoop](1809610-addtorunloop.md): Add the CFRunLoopSource for the notification port to a run loop.
- [RemoveFromRunLoop](1809745-removefromrunloop.md): Remove the CFRunLoopSource for the notification port from a run loop.
