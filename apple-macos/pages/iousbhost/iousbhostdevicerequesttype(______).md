> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostdevicerequesttype(_:_:_:)](https://developer.apple.com/documentation/iousbhost/iousbhostdevicerequesttype(_:_:_:))

# IOUSBHostDeviceRequestType(\_:\_:\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Creates the request type field of a device request.

## Declaration

```swift
func IOUSBHostDeviceRequestType(_ direction: tIOUSBDeviceRequestDirectionValue, _ type: tIOUSBDeviceRequestTypeValue, _ recipient: tIOUSBDeviceRequestRecipientValue) -> UInt8
```

## Parameters

- `direction`: The direction of the request.
- `type`: The type of the request.
- `recipient`: The recipient of the request.

<a id="return-value"></a>

## Return Value

The request type.

## See Also

### Sending Device Requests

- [IOUSBHostDefaultControlCompletionTimeout](iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.

# IOUSBHostDeviceRequestType (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Creates the request type field of a device request.

## Declaration

```objectivec
static uint8_t IOUSBHostDeviceRequestType(tIOUSBDeviceRequestDirectionValue direction, tIOUSBDeviceRequestTypeValue type, tIOUSBDeviceRequestRecipientValue recipient);
```

## Parameters

- `direction`: The direction of the request.
- `type`: The type of the request.
- `recipient`: The recipient of the request.

<a id="return-value"></a>

## Return Value

The request type.

## See Also

### Related Documentation

- [tIOUSBDeviceRequestDirectionValue](https://developer.apple.com/documentation/iokit/tiousbdevicerequestdirectionvalue)
- [tIOUSBDeviceRequestRecipientValue](https://developer.apple.com/documentation/iokit/tiousbdevicerequestrecipientvalue)
- [tIOUSBDeviceRequestTypeValue](https://developer.apple.com/documentation/iokit/tiousbdevicerequesttypevalue)

### Sending Device Requests

- [IOUSBHostDefaultControlCompletionTimeout](iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [sendDeviceRequest:data:bytesTransferred:completionTimeout:error:](iousbhostobject/senddevicerequest_data_bytestransferred_completiontimeout_error_.md): Sends a request on the default control endpoint.
- [sendDeviceRequest:data:bytesTransferred:error:](iousbhostobject/senddevicerequest_data_bytestransferred_error_.md): Sends a request on the default control endpoint with a default completion timeout.
- [sendDeviceRequest:error:](iousbhostobject/senddevicerequest_error_.md): Sends a request on the default control endpoint without a data phase and default completion timeout.
