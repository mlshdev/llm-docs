> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/sendcontrolrequest:error:](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/sendcontrolrequest:error:)

# sendControlRequest:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Sends a request on a control endpoint without a data phase and a default completion timeout.

## Declaration

```objectivec
- (BOOL) sendControlRequest:(IOUSBDeviceRequest) request error:(NSError **) error;
```

## Parameters

- `request`: The device request to send.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the abort completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This method sends a synchronous request on the default control endpoint, and doesn’t return until the request is complete or times out. This method uses [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md) at the input/output request’s `completionTimeout`.

## See Also

### Sending Control Requests

- [IOUSBHostDeviceRequestType](../iousbhostdevicerequesttype%28______%29.md): Creates the request type field of a device request.
- [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueControlRequest:data:completionTimeout:error:completionHandler:](enqueuecontrolrequest_data_completiontimeout_error_completionhandler_.md): Enqueues a request on a control endpoint.
- [enqueueControlRequest:data:error:completionHandler:](enqueuecontrolrequest_data_error_completionhandler_.md): Enqueues a request on a control endpoint with a default completion timeout.
- [enqueueControlRequest:error:completionHandler:](enqueuecontrolrequest_error_completionhandler_.md): Enqueues a request on a control endpoint without a data phase and a default completion timeout.
- [sendControlRequest:data:bytesTransferred:completionTimeout:error:](sendcontrolrequest_data_bytestransferred_completiontimeout_error_.md): Sends a request on a control endpoint.
- [sendControlRequest:data:bytesTransferred:error:](sendcontrolrequest_data_bytestransferred_error_.md): Sends a request on a control endpoint with a default timeout.
- [abortWithOption:error:](abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](abortwitherror_.md): Aborts pending input/output requests synchronously.
