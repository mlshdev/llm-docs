> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/senddevicerequest:data:bytestransferred:error:](https://developer.apple.com/documentation/iousbhost/iousbhostobject/senddevicerequest:data:bytestransferred:error:)

# sendDeviceRequest:data:bytesTransferred:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Sends a request on the default control endpoint with a default completion timeout.

## Declaration

```objectivec
- (BOOL) sendDeviceRequest:(IOUSBDeviceRequest) request data:(NSMutableData *) data bytesTransferred:(NSUInteger *) bytesTransferred error:(NSError **) error;
```

## Parameters

- `request`: The device request to send.
- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the request’s data phase. The default is `nil`, meaning there’s no data phase for the control transfer.
- `bytesTransferred`: An [NSUInteger](https://developer.apple.com/documentation/objectivec/nsuinteger) reference that updates with the byte count of the completed data phase.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This method sends a synchronous request on the default control endpoint, and doesn’t return until the request completes or times out. It uses [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md) for the completion timeout.

## See Also

### Sending Device Requests

- [IOUSBHostDeviceRequestType](../iousbhostdevicerequesttype%28______%29.md): Creates the request type field of a device request.
- [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [sendDeviceRequest:data:bytesTransferred:completionTimeout:error:](senddevicerequest_data_bytestransferred_completiontimeout_error_.md): Sends a request on the default control endpoint.
- [sendDeviceRequest:error:](senddevicerequest_error_.md): Sends a request on the default control endpoint without a data phase and default completion timeout.
