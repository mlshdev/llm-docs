> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/enqueuecontrolrequest:data:error:completionhandler:](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/enqueuecontrolrequest:data:error:completionhandler:)

# enqueueControlRequest:data:error:completionHandler:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Enqueues a request on a control endpoint with a default completion timeout.

## Declaration

```objectivec
- (BOOL) enqueueControlRequest:(IOUSBDeviceRequest) request data:(NSMutableData *) data error:(NSError **) error completionHandler:(IOUSBHostCompletionHandler) completionHandler;
```

## Parameters

- `request`: The device request to send.
- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) defining the memory to use for the request’s data phase. By default this is `nil` and means there’s no data phase for the control transfer.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.
- `completionHandler`: An [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md) that runs when the request completes or times out. The `completionHandler` doesn’t run if the method returns with an error.

<a id="return-value"></a>

## Return Value

`YES` if the abort completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This method enqueues an asynchronous request on a control endpoint. If successful, the provided completion routine executes to report the status of the completed input/output request. This method uses [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md) as the input/output request’s `completionTimeout`.

## See Also

### Sending Control Requests

- [IOUSBHostDeviceRequestType](../iousbhostdevicerequesttype%28______%29.md): Creates the request type field of a device request.
- [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueControlRequest:data:completionTimeout:error:completionHandler:](enqueuecontrolrequest_data_completiontimeout_error_completionhandler_.md): Enqueues a request on a control endpoint.
- [enqueueControlRequest:error:completionHandler:](enqueuecontrolrequest_error_completionhandler_.md): Enqueues a request on a control endpoint without a data phase and a default completion timeout.
- [sendControlRequest:data:bytesTransferred:completionTimeout:error:](sendcontrolrequest_data_bytestransferred_completiontimeout_error_.md): Sends a request on a control endpoint.
- [sendControlRequest:data:bytesTransferred:error:](sendcontrolrequest_data_bytestransferred_error_.md): Sends a request on a control endpoint with a default timeout.
- [sendControlRequest:error:](sendcontrolrequest_error_.md): Sends a request on a control endpoint without a data phase and a default completion timeout.
- [abortWithOption:error:](abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](abortwitherror_.md): Aborts pending input/output requests synchronously.
