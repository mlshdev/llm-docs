> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcompletionhandler](https://developer.apple.com/documentation/iousbhost/iousbhostcompletionhandler)

# IOUSBHostCompletionHandler (Swift)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The completion handler for asynchronous control, bulk, and interrupt transfers.

## Declaration

```swift
typealias IOUSBHostCompletionHandler = (IOReturn, Int) -> Void
```

## Parameters

- `status`: The result for the transfer.
- `bytesTransferred`: The number of bytes the request transferred.

# IOUSBHostCompletionHandler (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The completion handler for asynchronous control, bulk, and interrupt transfers.

## Declaration

```objectivec
typedef void (^)(int, unsigned long) IOUSBHostCompletionHandler;
```

## Parameters

- `status`: The result for the transfer.
- `bytesTransferred`: The number of bytes the request transferred.

## See Also

### Enqueueing Device Requests

- [enqueueDeviceRequest:data:completionTimeout:error:completionHandler:](iousbhostobject/enqueuedevicerequest_data_completiontimeout_error_completionhandler_.md): Enqueues a request on the default control endpoint.
- [enqueueDeviceRequest:data:error:completionHandler:](iousbhostobject/enqueuedevicerequest_data_error_completionhandler_.md): Enqueues a request on the default control endpoint with a default completion timeout.
- [enqueueDeviceRequest:error:completionHandler:](iousbhostobject/enqueuedevicerequest_error_completionhandler_.md): Enqueues a request on the default control endpoint without a data phase and a default timeout.
