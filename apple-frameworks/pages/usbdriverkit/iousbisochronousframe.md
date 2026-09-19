> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbisochronousframe

# IOUSBIsochronousFrame

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 19.0+

A structure representing a single frame in an isochronous transfer.

## Declaration

```objectivec
struct IOUSBIsochronousFrame;
```

## Topics

### Getting the Frame Properties

- [status](iousbisochronousframe/status.md): The completion status for this individual frame.
- [requestCount](iousbisochronousframe/requestcount.md): The number of bytes to transfer for this frame.
- [completeCount](iousbisochronousframe/completecount.md): The number of bytes actually transferred for this frame.
- [reserved](iousbisochronousframe/reserved.md): Reserved for future use.
- [timeStamp](iousbisochronousframe/timestamp.md): The frame’s observed completion time.

## See Also

### Interacting with Isochronous Endpoints

- [IsochIO](iousbhostpipe/isochio.md): Performs a synchronous or asynchronous request on an isochronous endpoint.
- [CompleteAsyncIsochIO](iousbhostpipe/completeasyncisochio.md): Handles the completion of an asynchronous request.
