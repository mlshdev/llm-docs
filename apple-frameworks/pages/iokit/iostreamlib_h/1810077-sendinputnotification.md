> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamlib_h/1810077-sendinputnotification](https://developer.apple.com/documentation/iokit/iostreamlib_h/1810077-sendinputnotification)

# SendInputNotification

**Interface language:** Objective-C

**Framework:** IOKit

Send a notification to the kernel side of the IOStream that data is available in the input queue.

## Declaration

```objectivec
IOReturn ( *SendInputNotification)(
   IOStreamRef stream,
   UInt32 token );
```

## Parameters

- `stream`: The IOStreamRef of the stream to operate on.
- `token`: A value to pass to the stream's notification function. This is unused by IOStream but may be used by subclasses.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the notification was successfully sent.

## See Also

### Notifications

- [SendInputSyncNotification](1810090-sendinputsyncnotification.md): Notify the kernel side of the stream that input is ready by using a fast trap to call directly into the stream user client driver. This will transfer control to the kernel and continue executing on your same thread, rather than sending the notification to a separate thread.
