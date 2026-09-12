> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostdefaultcontrolcompletiontimeout](https://developer.apple.com/documentation/iousbhost/iousbhostdefaultcontrolcompletiontimeout)

# IOUSBHostDefaultControlCompletionTimeout (Swift)

**Framework:** IOUSBHost  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The default completion timeout for input/output requests.

## Declaration

```swift
let IOUSBHostDefaultControlCompletionTimeout: TimeInterval
```

## See Also

### Sending Device Requests

- [IOUSBHostDeviceRequestType(\_:\_:\_:)](iousbhostdevicerequesttype%28______%29.md): Creates the request type field of a device request.

# IOUSBHostDefaultControlCompletionTimeout (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The default completion timeout for input/output requests.

## Declaration

```objectivec
extern const NSTimeInterval IOUSBHostDefaultControlCompletionTimeout;
```

## See Also

### Sending Device Requests

- [IOUSBHostDeviceRequestType](iousbhostdevicerequesttype%28______%29.md): Creates the request type field of a device request.
- [sendDeviceRequest:data:bytesTransferred:completionTimeout:error:](iousbhostobject/senddevicerequest_data_bytestransferred_completiontimeout_error_.md): Sends a request on the default control endpoint.
- [sendDeviceRequest:data:bytesTransferred:error:](iousbhostobject/senddevicerequest_data_bytestransferred_error_.md): Sends a request on the default control endpoint with a default completion timeout.
- [sendDeviceRequest:error:](iousbhostobject/senddevicerequest_error_.md): Sends a request on the default control endpoint without a data phase and default completion timeout.
