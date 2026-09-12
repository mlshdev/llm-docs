> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/abortdevicerequests](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/abortdevicerequests)

# AbortDeviceRequests

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Aborts device requests that you made previously from the current interface client.

## Declaration

```objectivec
virtual kern_return_t AbortDeviceRequests(IOOptionBits options, IOReturn withError);
```

## Parameters

- `options`: Specify `0` for this parameter.
- `withError`: The error value to report for each request. Specify `kIOReturnAborted` for this parameter.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to abort any requests you made previously with the [AsyncDeviceRequest](asyncdevicerequest.md) method. This method aborts only the requests that the current interface object initiated.

## See Also

### Requesting Data from the Default Control Endpoint

- [DeviceRequest](devicerequest.md): Sends a synchronous request to the device on the default control endpoint.
- [AsyncDeviceRequest](asyncdevicerequest.md): Enqueues a request on the default control endpoint of the device.
