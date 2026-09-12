> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/framenumberwithtime:](https://developer.apple.com/documentation/iousbhost/iousbhostobject/framenumberwithtime:)

# frameNumberWithTime:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Returns the current frame number of the USB controller.

## Declaration

```objectivec
- (uint64_t) frameNumberWithTime:(IOUSBHostTime *) time;
```

## Parameters

- `time`: An [IOUSBHostTime](../iousbhosttime.md) reference. If not `nil`, this updates with the current system time.

<a id="return-value"></a>

## Return Value

The current frame number.

<a id="Discussion"></a>

## Discussion

This method returns the current frame number of the USB controller, omitting the microframe. This is useful for scheduling future isochronous requests with [enqueueIORequestWithData:frameList:frameListCount:firstFrameNumber:error:completionHandler:](../iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md) and [sendIORequestWithData:frameList:frameListCount:firstFrameNumber:error:](../iousbhostpipe/sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md).

## See Also

### Getting Host Information

- [deviceAddress](deviceaddress.md): The device’s bus address.
