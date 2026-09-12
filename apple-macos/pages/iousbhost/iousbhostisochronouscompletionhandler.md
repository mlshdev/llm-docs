> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostisochronouscompletionhandler](https://developer.apple.com/documentation/iousbhost/iousbhostisochronouscompletionhandler)

# IOUSBHostIsochronousCompletionHandler (Swift)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

A completion handler for asynchronous isochronous transfers.

## Declaration

```swift
typealias IOUSBHostIsochronousCompletionHandler = (IOReturn, UnsafeMutablePointer<IOUSBHostIsochronousFrame>) -> Void
```

## Parameters

- `status`: The result code for isochronous transfer.
- `frameList`: The frame list of [IOUSBHostIsochronousFrame](iousbhostisochronousframe.md) that [enqueueIORequest(with:frameList:frameListCount:firstFrameNumber:completionHandler:)](iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md) passes.

## See Also

### Sending Isochronous I/O

- [IOUSBHostTime](iousbhosttime.md): The absolute time.
- [IOUSBHostIsochronousFrame](iousbhostisochronousframe.md): Deprecated. A structure that represents a single frame in an isochronous transfer.
- [enqueueIORequest(with:frameList:frameListCount:firstFrameNumber:completionHandler:)](iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md): Deprecated. Enqueues a request on an isochronous endpoint.
- [sendIORequest(with:frameList:frameListCount:firstFrameNumber:)](iousbhostpipe/sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md): Deprecated. Sends a request on an isochronous endpoint.

# IOUSBHostIsochronousCompletionHandler (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

A completion handler for asynchronous isochronous transfers.

## Declaration

```objectivec
typedef void (^)(int, struct IOUSBHostIsochronousFrame *) IOUSBHostIsochronousCompletionHandler;
```

## Parameters

- `status`: The result code for isochronous transfer.
- `frameList`: The frame list of [IOUSBHostIsochronousFrame](iousbhostisochronousframe.md) that [enqueueIORequestWithData:frameList:frameListCount:firstFrameNumber:error:completionHandler:](iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md) passes.

## See Also

### Sending Isochronous I/O

- [IOUSBHostTime](iousbhosttime.md): The absolute time.
- [IOUSBHostIsochronousFrame](iousbhostisochronousframe.md): Deprecated. A structure that represents a single frame in an isochronous transfer.
- [enqueueIORequestWithData:frameList:frameListCount:firstFrameNumber:error:completionHandler:](iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md): Deprecated. Enqueues a request on an isochronous endpoint.
- [sendIORequestWithData:frameList:frameListCount:firstFrameNumber:error:](iousbhostpipe/sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md): Deprecated. Sends a request on an isochronous endpoint.
- [abortWithOption:error:](iousbhostpipe/abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](iousbhostpipe/abortwitherror_.md): Aborts pending input/output requests synchronously.
