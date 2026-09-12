> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/enqueuedevicerequest:error:completionhandler:](https://developer.apple.com/documentation/iousbhost/iousbhostobject/enqueuedevicerequest:error:completionhandler:)

# enqueueDeviceRequest:error:completionHandler:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Enqueues a request on the default control endpoint without a data phase and a default timeout.

## Declaration

```objectivec
- (BOOL) enqueueDeviceRequest:(IOUSBDeviceRequest) request error:(NSError **) error completionHandler:(IOUSBHostCompletionHandler) completionHandler;
```

## Parameters

- `request`: The device request to send.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.
- `completionHandler`: An [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md) that runs when the request completes or times out. The `completionHandler` doesn’t run if the method returns with an error.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This method enqueues an asynchronous request on the default control endpoint. If successful, `completionHandler` executes to report the status of the completed input/output request. This method uses `IOUSBHostDefaultControlCompletionTimeout` for the completion timeout.

## See Also

### Enqueueing Device Requests

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueDeviceRequest:data:completionTimeout:error:completionHandler:](enqueuedevicerequest_data_completiontimeout_error_completionhandler_.md): Enqueues a request on the default control endpoint.
- [enqueueDeviceRequest:data:error:completionHandler:](enqueuedevicerequest_data_error_completionhandler_.md): Enqueues a request on the default control endpoint with a default completion timeout.
