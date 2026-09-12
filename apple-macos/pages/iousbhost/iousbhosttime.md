> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhosttime](https://developer.apple.com/documentation/iousbhost/iousbhosttime)

# IOUSBHostTime (Swift)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The absolute time.

## Declaration

```swift
typealias IOUSBHostTime = UInt64
```

## See Also

### Sending Isochronous I/O

- [IOUSBHostIsochronousCompletionHandler](iousbhostisochronouscompletionhandler.md): A completion handler for asynchronous isochronous transfers.
- [IOUSBHostIsochronousFrame](iousbhostisochronousframe.md): Deprecated. A structure that represents a single frame in an isochronous transfer.
- [enqueueIORequest(with:frameList:frameListCount:firstFrameNumber:completionHandler:)](iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md): Deprecated. Enqueues a request on an isochronous endpoint.
- [sendIORequest(with:frameList:frameListCount:firstFrameNumber:)](iousbhostpipe/sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md): Deprecated. Sends a request on an isochronous endpoint.

# IOUSBHostTime (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The absolute time.

## Declaration

```objectivec
typedef uint64_t IOUSBHostTime;
```

## See Also

### Sending Isochronous I/O

- [IOUSBHostIsochronousCompletionHandler](iousbhostisochronouscompletionhandler.md): A completion handler for asynchronous isochronous transfers.
- [IOUSBHostIsochronousFrame](iousbhostisochronousframe.md): Deprecated. A structure that represents a single frame in an isochronous transfer.
- [enqueueIORequestWithData:frameList:frameListCount:firstFrameNumber:error:completionHandler:](iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md): Deprecated. Enqueues a request on an isochronous endpoint.
- [sendIORequestWithData:frameList:frameListCount:firstFrameNumber:error:](iousbhostpipe/sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md): Deprecated. Sends a request on an isochronous endpoint.
- [abortWithOption:error:](iousbhostpipe/abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](iousbhostpipe/abortwitherror_.md): Aborts pending input/output requests synchronously.
