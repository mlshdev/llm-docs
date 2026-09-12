> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/isochio](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/isochio)

# IsochIO

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Performs a synchronous or asynchronous request on an isochronous endpoint.

## Declaration

```objectivec
virtual kern_return_t IsochIO(IOMemoryDescriptor *dataBuffer, IOMemoryDescriptor *frameList, uint64_t firstFrameNumber, OSAction *completion);
```

## Parameters

- `dataBuffer`: The buffer to store the data. When transferring data to the device, this buffer contains the data to send. When receiving data from the device, this buffer is empty initially.
- `frameList`: A valid memory descriptor containing the frame list, which is an array of [IOUSBIsochronousFrame](../iousbisochronousframe.md) structures. For example, a frame list with 8 frames should be of size `(sizeof(IOUSBIsochronousFrame) * 8)`.
- `firstFrameNumber`: The starting frame number for the request. You can get the current frame number from the [GetFrameNumber](../iousbhostdevice/getframenumber.md) method of [IOUSBHostDevice](../iousbhostdevice.md) or [IOUSBHostInterface](../iousbhostinterface.md). Specify `0` to begin the transfer on the next available frame (XHCI only).
- `completion`: An optional completion handler. To create a synchronous I/O request, specify `NULL`. To create an asynchronous request, provide an appropriate action method with your callback routine. This method copies your action object, so you can allocate that object on the stack if you prefer.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to issue isochronous requests. Allocate and initialize an array of [IOUSBIsochronousFrame](../iousbisochronousframe.md) structures, which describe the frames to transfer. See [IOUSBIsochronousFrame](../iousbisochronousframe.md) for information regarding structure initialization requirements and usage.

## See Also

### Interacting with Isochronous Endpoints

- [CompleteAsyncIsochIO](completeasyncisochio.md): Handles the completion of an asynchronous request.
- [IOUSBIsochronousFrame](../iousbisochronousframe.md): A structure representing a single frame in an isochronous transfer.
