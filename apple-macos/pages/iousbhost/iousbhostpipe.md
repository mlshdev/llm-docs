> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe](https://developer.apple.com/documentation/iousbhost/iousbhostpipe)

# IOUSBHostPipe (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The class that sends control, bulk, interrupt, and isochronous input/output requests for function drivers, and manages stream capabilities.

## Declaration

```swift
class IOUSBHostPipe
```

<a id="overview"></a>

## Overview

The client creates pipe objects using [copyPipe(withAddress:)](iousbhostinterface/copypipe%28withaddress_%29.md).

## Topics

### Sending Bulk and Interrupt I/O

- [IOUSBHostCompletionHandler](iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [IOUSBHostDefaultControlCompletionTimeout](iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [enqueueIORequest(with:completionTimeout:completionHandler:)](iousbhostpipe/enqueueiorequest%28with_completiontimeout_completionhandler_%29.md): Enqueues an input/output request on the pipe.
- [clearStall()](iousbhostpipe/clearstall%28%29.md): Clears the halt condition of the pipe.

### Sending Isochronous I/O

- [IOUSBHostIsochronousCompletionHandler](iousbhostisochronouscompletionhandler.md): A completion handler for asynchronous isochronous transfers.
- [IOUSBHostTime](iousbhosttime.md): The absolute time.
- [IOUSBHostIsochronousFrame](iousbhostisochronousframe.md): Deprecated. A structure that represents a single frame in an isochronous transfer.
- [enqueueIORequest(with:frameList:frameListCount:firstFrameNumber:completionHandler:)](iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md): Deprecated. Enqueues a request on an isochronous endpoint.
- [sendIORequest(with:frameList:frameListCount:firstFrameNumber:)](iousbhostpipe/sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md): Deprecated. Sends a request on an isochronous endpoint.

### Sending Control Requests

- [IOUSBHostDeviceRequestType(\_:\_:\_:)](iousbhostdevicerequesttype%28______%29.md): Creates the request type field of a device request.
- [IOUSBHostDefaultControlCompletionTimeout](iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [IOUSBHostCompletionHandler](iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.

### Managing Periodic Bandwidth

- [IOUSBHostIOSourceDescriptors](iousbhostiosourcedescriptors.md): The descriptors for a single endpoint.
- [adjust(with:)](iousbhostpipe/adjust%28with_%29.md): Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.
- [descriptors](iousbhostpipe/descriptors.md): A property that retrieves the current endpoint descriptors controlling the endpoint.
- [originalDescriptors](iousbhostpipe/originaldescriptors.md): A property that retrieves the original endpoint descriptors from the pipe at the point of creation.

### Enabling Power Savings

- [setIdleTimeout(\_:)](iousbhostpipe/setidletimeout%28__%29.md): Sets the desired idle suspend timeout for the interface.
- [idleTimeout](iousbhostpipe/idletimeout.md): A property that retrieves the current idle suspend timeout.

### Managing Streams

- [enableStreams()](iousbhostpipe/enablestreams%28%29.md): Enables streams for the pipe.
- [copyStream(withStreamID:)](iousbhostpipe/copystream%28withstreamid_%29.md): Returns the stream for a stream ID.
- [disableStreams()](iousbhostpipe/disablestreams%28%29.md): Disables streams for the pipe.

### Instance Methods

- [enqueueIORequest(with:transactionList:transactionListCount:firstFrameNumber:options:completionHandler:)](iousbhostpipe/enqueueiorequest%28with_transactionlist_transactionlistcount_firstframenumber_options_completionhandler_%29.md)
- [sendIORequest(with:transactionList:transactionListCount:firstFrameNumber:options:)](iousbhostpipe/sendiorequest%28with_transactionlist_transactionlistcount_firstframenumber_options_%29.md)

## Relationships

### Inherits From

- [IOUSBHostIOSource](iousbhostiosource.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Function Drivers

- [IOUSBHostInterface](iousbhostinterface.md): The class for accessing USB-related services.
- [IOUSBHostStream](iousbhoststream.md): The class responsible for sending stream data for function drivers.

# IOUSBHostPipe (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The class that sends control, bulk, interrupt, and isochronous input/output requests for function drivers, and manages stream capabilities.

## Declaration

```objectivec
@interface IOUSBHostPipe : IOUSBHostIOSource
```

<a id="overview"></a>

## Overview

The client creates pipe objects using [copyPipeWithAddress:error:](iousbhostinterface/copypipe%28withaddress_%29.md).

## Topics

### Sending Bulk and Interrupt I/O

- [IOUSBHostCompletionHandler](iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [IOUSBHostDefaultControlCompletionTimeout](iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [enqueueIORequestWithData:completionTimeout:error:completionHandler:](iousbhostpipe/enqueueiorequest%28with_completiontimeout_completionhandler_%29.md): Enqueues an input/output request on the pipe.
- [sendIORequestWithData:bytesTransferred:completionTimeout:error:](iousbhostpipe/sendiorequestwithdata_bytestransferred_completiontimeout_error_.md): Sends an input/output request on the pipe.
- [abortWithOption:error:](iousbhostpipe/abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](iousbhostpipe/abortwitherror_.md): Aborts pending input/output requests synchronously.
- [clearStallWithError:](iousbhostpipe/clearstall%28%29.md): Clears the halt condition of the pipe.

### Sending Isochronous I/O

- [IOUSBHostIsochronousCompletionHandler](iousbhostisochronouscompletionhandler.md): A completion handler for asynchronous isochronous transfers.
- [IOUSBHostTime](iousbhosttime.md): The absolute time.
- [IOUSBHostIsochronousFrame](iousbhostisochronousframe.md): Deprecated. A structure that represents a single frame in an isochronous transfer.
- [enqueueIORequestWithData:frameList:frameListCount:firstFrameNumber:error:completionHandler:](iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md): Deprecated. Enqueues a request on an isochronous endpoint.
- [sendIORequestWithData:frameList:frameListCount:firstFrameNumber:error:](iousbhostpipe/sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md): Deprecated. Sends a request on an isochronous endpoint.
- [abortWithOption:error:](iousbhostpipe/abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](iousbhostpipe/abortwitherror_.md): Aborts pending input/output requests synchronously.

### Sending Control Requests

- [IOUSBHostDeviceRequestType](iousbhostdevicerequesttype%28______%29.md): Creates the request type field of a device request.
- [IOUSBHostDefaultControlCompletionTimeout](iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [IOUSBHostCompletionHandler](iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueControlRequest:data:completionTimeout:error:completionHandler:](iousbhostpipe/enqueuecontrolrequest_data_completiontimeout_error_completionhandler_.md): Enqueues a request on a control endpoint.
- [enqueueControlRequest:data:error:completionHandler:](iousbhostpipe/enqueuecontrolrequest_data_error_completionhandler_.md): Enqueues a request on a control endpoint with a default completion timeout.
- [enqueueControlRequest:error:completionHandler:](iousbhostpipe/enqueuecontrolrequest_error_completionhandler_.md): Enqueues a request on a control endpoint without a data phase and a default completion timeout.
- [sendControlRequest:data:bytesTransferred:completionTimeout:error:](iousbhostpipe/sendcontrolrequest_data_bytestransferred_completiontimeout_error_.md): Sends a request on a control endpoint.
- [sendControlRequest:data:bytesTransferred:error:](iousbhostpipe/sendcontrolrequest_data_bytestransferred_error_.md): Sends a request on a control endpoint with a default timeout.
- [sendControlRequest:error:](iousbhostpipe/sendcontrolrequest_error_.md): Sends a request on a control endpoint without a data phase and a default completion timeout.
- [abortWithOption:error:](iousbhostpipe/abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](iousbhostpipe/abortwitherror_.md): Aborts pending input/output requests synchronously.

### Managing Periodic Bandwidth

- [IOUSBHostIOSourceDescriptors](iousbhostiosourcedescriptors.md): The descriptors for a single endpoint.
- [adjustPipeWithDescriptors:error:](iousbhostpipe/adjust%28with_%29.md): Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.
- [descriptors](iousbhostpipe/descriptors.md): A property that retrieves the current endpoint descriptors controlling the endpoint.
- [originalDescriptors](iousbhostpipe/originaldescriptors.md): A property that retrieves the original endpoint descriptors from the pipe at the point of creation.

### Enabling Power Savings

- [setIdleTimeout:error:](iousbhostpipe/setidletimeout%28__%29.md): Sets the desired idle suspend timeout for the interface.
- [idleTimeout](iousbhostpipe/idletimeout.md): A property that retrieves the current idle suspend timeout.

### Managing Streams

- [enableStreamsWithError:](iousbhostpipe/enablestreams%28%29.md): Enables streams for the pipe.
- [copyStreamWithStreamID:error:](iousbhostpipe/copystream%28withstreamid_%29.md): Returns the stream for a stream ID.
- [disableStreamsWithError:](iousbhostpipe/disablestreams%28%29.md): Disables streams for the pipe.

### Instance Methods

- [enqueueIORequestWithData:transactionList:transactionListCount:firstFrameNumber:options:error:completionHandler:](iousbhostpipe/enqueueiorequest%28with_transactionlist_transactionlistcount_firstframenumber_options_completionhandler_%29.md)
- [sendIORequestWithData:transactionList:transactionListCount:firstFrameNumber:options:error:](iousbhostpipe/sendiorequest%28with_transactionlist_transactionlistcount_firstframenumber_options_%29.md)

## Relationships

### Inherits From

- [IOUSBHostIOSource](iousbhostiosource.md)

## See Also

### Function Drivers

- [IOUSBHostInterface](iousbhostinterface.md): The class for accessing USB-related services.
- [IOUSBHostStream](iousbhoststream.md): The class responsible for sending stream data for function drivers.
