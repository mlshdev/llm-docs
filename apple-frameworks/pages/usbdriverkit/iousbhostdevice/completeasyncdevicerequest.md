> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostdevice/completeasyncdevicerequest](https://developer.apple.com/documentation/usbdriverkit/iousbhostdevice/completeasyncdevicerequest)

# CompleteAsyncDeviceRequest

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

The type definition for an asynchronous device request completion routine.

## Declaration

```objectivec
virtual void CompleteAsyncDeviceRequest(OSAction *action, IOReturn status, uint32_t bytesTransferred);
```

## Parameters

- `action`: A pointer to the `OSAction` object of the async request.
- `status`: The result of the operation.
- `bytesTransferred`: The byte count of the completed data phase.

<a id="Discussion"></a>

## Discussion

Implement a custom version of this method and use the [TYPE](../../driverkit/type.md) macro to let the system know that your method conforms to this prototype.

## See Also

### Requesting Information from the Device

- [DeviceRequest](devicerequest.md): Sends a synchronous request to the device on the default control endpoint.
- [AsyncDeviceRequest](asyncdevicerequest.md): Enqueues a request on the default control endpoint of the device.
- [AbortDeviceRequests](abortdevicerequests.md): Aborts device requests that you made previously from the current device client.
