> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/sendiorequest(with:framelist:framelistcount:firstframenumber:)](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/sendiorequest(with:framelist:framelistcount:firstframenumber:))

# sendIORequest(with:frameList:frameListCount:firstFrameNumber:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+ (deprecated in 27.0)

Sends a request on an isochronous endpoint.

## Declaration

```swift
func sendIORequest(with data: NSMutableData, frameList: UnsafeMutablePointer<IOUSBHostIsochronousFrame>, frameListCount: Int, firstFrameNumber: UInt64) throws
```

## Parameters

- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the transfer.
- `frameList`: A pointer to the first element in an [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md) array. The array must contain at least `frameListCount` elements.
- `frameListCount`: The number of elements in `frameList`.
- `firstFrameNumber`: The frame number the request begins on. Query the current frame number with [frameNumberWithTime:](../iousbhostobject/framenumberwithtime_.md). If `0`, the transfer starts on the next available frame (XHCI only).

<a id="Discussion"></a>

## Discussion

This method issues synchronous isochronous requests. The caller allocates and initializes an array of [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md) structures to describe the transferred frames.

## See Also

### Sending Isochronous I/O

- [IOUSBHostIsochronousCompletionHandler](../iousbhostisochronouscompletionhandler.md): A completion handler for asynchronous isochronous transfers.
- [IOUSBHostTime](../iousbhosttime.md): The absolute time.
- [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md): Deprecated. A structure that represents a single frame in an isochronous transfer.
- [enqueueIORequest(with:frameList:frameListCount:firstFrameNumber:completionHandler:)](enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md): Deprecated. Enqueues a request on an isochronous endpoint.

# sendIORequestWithData:frameList:frameListCount:firstFrameNumber:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+ (deprecated in 27.0)

Sends a request on an isochronous endpoint.

## Declaration

```objectivec
- (BOOL) sendIORequestWithData:(NSMutableData *) data frameList:(IOUSBHostIsochronousFrame *) frameList frameListCount:(NSUInteger) frameListCount firstFrameNumber:(uint64_t) firstFrameNumber error:(NSError **) error;
```

## Parameters

- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the transfer.
- `frameList`: A pointer to the first element in an [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md) array. The array must contain at least `frameListCount` elements.
- `frameListCount`: The number of elements in `frameList`.
- `firstFrameNumber`: The frame number the request begins on. Query the current frame number with [frameNumberWithTime:](../iousbhostobject/framenumberwithtime_.md). If `0`, the transfer starts on the next available frame (XHCI only).
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) in Objective-C that contains an [IOReturn](https://developer.apple.com/documentation/iokit/ioreturn) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the send succeeds; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This method issues synchronous isochronous requests. The caller allocates and initializes an array of [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md) structures to describe the transferred frames.

## See Also

### Sending Isochronous I/O

- [IOUSBHostIsochronousCompletionHandler](../iousbhostisochronouscompletionhandler.md): A completion handler for asynchronous isochronous transfers.
- [IOUSBHostTime](../iousbhosttime.md): The absolute time.
- [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md): Deprecated. A structure that represents a single frame in an isochronous transfer.
- [enqueueIORequestWithData:frameList:frameListCount:firstFrameNumber:error:completionHandler:](enqueueiorequest%28with_framelist_framelistcount_firstframenumber_completionhandler_%29.md): Deprecated. Enqueues a request on an isochronous endpoint.
- [abortWithOption:error:](abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](abortwitherror_.md): Aborts pending input/output requests synchronously.
