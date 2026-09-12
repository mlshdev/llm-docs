> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/asyncdevicerequest](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/asyncdevicerequest)

# AsyncDeviceRequest

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Enqueues a request on the default control endpoint of the device.

## Declaration

```objectivec
virtual kern_return_t AsyncDeviceRequest(uint8_t bmRequestType, uint8_t bRequest, uint16_t wValue, uint16_t wIndex, uint16_t wLength, IOMemoryDescriptor *dataBuffer, OSAction *completion, uint32_t completionTimeoutMs);
```

## Parameters

- `bmRequestType`: The characteristics of the device request. See the [USBmakebmRequestType](../../iokit/usbmakebmrequesttype.md) macro for information about how to construct this request.
- `bRequest`: The request you want to make.
- `wValue`: Request-specific data.
- `wIndex`: Request-specific data.
- `wLength`: The number of bytes to transfer, if there’s a data stage.
- `dataBuffer`: The memory descriptor to use for the request’s data phase, if any.
- `completion`: An [OSAction](../../driverkit/osaction.md) object that contains the method to call when the request finishes.
- `completionTimeoutMs`: The timeout duration in milliseconds. If you specify `0`, the request never times out.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) if the request was enqueued successfully, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method performs a USB device request (USB 2.0, section 9.3) asynchronously on the default control endpoint. After enqueueing the request, this method returns immediately. If the request was enqueued successfully, the system executes the action in the `completion` parameter after the request finishes.

## See Also

### Requesting Data from the Default Control Endpoint

- [DeviceRequest](devicerequest.md): Sends a synchronous request to the device on the default control endpoint.
- [AbortDeviceRequests](abortdevicerequests.md): Aborts device requests that you made previously from the current interface client.
