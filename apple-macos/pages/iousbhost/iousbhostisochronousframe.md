> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostisochronousframe](https://developer.apple.com/documentation/iousbhost/iousbhostisochronousframe)

# IOUSBHostIsochronousFrame (Swift)

**Framework:** IOUSBHost  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+ (deprecated in 27.0)

A structure that represents a single frame in an isochronous transfer.

## Declaration

```swift
struct IOUSBHostIsochronousFrame
```

## Topics

### Frame Structure

- [status](iousbhostisochronousframe/status.md): Deprecated. The completion status for an individual frame.
- [requestCount](iousbhostisochronousframe/requestcount.md): Deprecated. The number of requested bytes to transfer for the frame.
- [completeCount](iousbhostisochronousframe/completecount.md): Deprecated. The number of bytes that the system actually transferred for the frame.
- [timeStamp](iousbhostisochronousframe/timestamp.md): Deprecated. The observed time for the frame’s completion.

### Initializing the Structure

- [init()](iousbhostisochronousframe/init%28%29.md): Deprecated. Creates a new frame structure.

### Initializers

- [init(status:requestCount:completeCount:reserved:timeStamp:)](iousbhostisochronousframe/init%28status_requestcount_completecount_reserved_timestamp_%29.md): Deprecated.

### Instance Properties

- [reserved](iousbhostisochronousframe/reserved.md): Deprecated.
- [completeCount](iousbhostisochronousframe/completecount.md): Deprecated. The number of bytes that the system actually transferred for the frame.
- [requestCount](iousbhostisochronousframe/requestcount.md): Deprecated. The number of requested bytes to transfer for the frame.
- [reserved](iousbhostisochronousframe/reserved.md): Deprecated.
- [status](iousbhostisochronousframe/status.md): Deprecated. The completion status for an individual frame.
- [timeStamp](iousbhostisochronousframe/timestamp.md): Deprecated. The observed time for the frame’s completion.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sending Isochronous I/O

- [IOUSBHostIsochronousCompletionHandler](iousbhostisochronouscompletionhandler.md): A completion handler for asynchronous isochronous transfers.
- [IOUSBHostTime](iousbhosttime.md): The absolute time.
- [enqueueIORequest(with:frameList:frameListCount:firstFrameNumber:completionHandler:)](iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md): Deprecated. Enqueues a request on an isochronous endpoint.
- [sendIORequest(with:frameList:frameListCount:firstFrameNumber:)](iousbhostpipe/sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md): Deprecated. Sends a request on an isochronous endpoint.

# IOUSBHostIsochronousFrame (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

A structure that represents a single frame in an isochronous transfer.

## Declaration

```objectivec
typedef struct IOUSBHostIsochronousFrame { ... } IOUSBHostIsochronousFrame;
```

## Topics

### Frame Structure

- [status](iousbhostisochronousframe/status.md): Deprecated. The completion status for an individual frame.
- [requestCount](iousbhostisochronousframe/requestcount.md): Deprecated. The number of requested bytes to transfer for the frame.
- [completeCount](iousbhostisochronousframe/completecount.md): Deprecated. The number of bytes that the system actually transferred for the frame.
- [timeStamp](iousbhostisochronousframe/timestamp.md): Deprecated. The observed time for the frame’s completion.

### Instance Properties

- [reserved](iousbhostisochronousframe/reserved.md): Deprecated.
- [completeCount](iousbhostisochronousframe/completecount.md): Deprecated. The number of bytes that the system actually transferred for the frame.
- [requestCount](iousbhostisochronousframe/requestcount.md): Deprecated. The number of requested bytes to transfer for the frame.
- [reserved](iousbhostisochronousframe/reserved.md): Deprecated.
- [status](iousbhostisochronousframe/status.md): Deprecated. The completion status for an individual frame.
- [timeStamp](iousbhostisochronousframe/timestamp.md): Deprecated. The observed time for the frame’s completion.

## See Also

### Sending Isochronous I/O

- [IOUSBHostIsochronousCompletionHandler](iousbhostisochronouscompletionhandler.md): A completion handler for asynchronous isochronous transfers.
- [IOUSBHostTime](iousbhosttime.md): The absolute time.
- [enqueueIORequestWithData:frameList:frameListCount:firstFrameNumber:error:completionHandler:](iousbhostpipe/enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md): Deprecated. Enqueues a request on an isochronous endpoint.
- [sendIORequestWithData:frameList:frameListCount:firstFrameNumber:error:](iousbhostpipe/sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md): Deprecated. Sends a request on an isochronous endpoint.
- [abortWithOption:error:](iousbhostpipe/abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](iousbhostpipe/abortwitherror_.md): Aborts pending input/output requests synchronously.
