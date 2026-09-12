> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/abortdevicerequestswitherror:](https://developer.apple.com/documentation/iousbhost/iousbhostobject/abortdevicerequestswitherror:)

# abortDeviceRequestsWithError:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Aborts device requests synchronously.

## Declaration

```objectivec
- (BOOL) abortDeviceRequestsWithError:(NSError **) error;
```

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This method aborts any requests made with the [sendDeviceRequest:data:bytesTransferred:completionTimeout:error:](senddevicerequest_data_bytestransferred_completiontimeout_error_.md) or [enqueueDeviceRequest:data:completionTimeout:error:completionHandler:](enqueuedevicerequest_data_completiontimeout_error_completionhandler_.md) methods.

## See Also

### Aborting Device Requests

- [IOUSBHostAbortOption](../iousbhostabortoption.md): Options for aborting pending input/output requests.
- [abortDeviceRequestsWithOption:error:](abortdevicerequestswithoption_error_.md): Aborts device requests.
