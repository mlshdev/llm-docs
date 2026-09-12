> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/enqueueiorequest(with:framelist:framelistcount:firstframenumber:completionhandler:)](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/enqueueiorequest(with:framelist:framelistcount:firstframenumber:completionhandler:))

# enqueueIORequest(with:frameList:frameListCount:firstFrameNumber:completionHandler:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+ (deprecated in 27.0)

Enqueues a request on an isochronous endpoint.

## Declaration

```swift
func enqueueIORequest(with data: NSMutableData, frameList: UnsafeMutablePointer<IOUSBHostIsochronousFrame>, frameListCount: Int, firstFrameNumber: UInt64, completionHandler: (@Sendable (IOReturn, UnsafeMutablePointer<IOUSBHostIsochronousFrame>) -> Void)? = nil) throws
```

```swift
func enqueueIORequest(with data: NSMutableData, frameList: UnsafeMutablePointer<IOUSBHostIsochronousFrame>, frameListCount: Int, firstFrameNumber: UInt64) async throws -> (IOReturn, UnsafeMutablePointer<IOUSBHostIsochronousFrame>)
```

## Parameters

- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the transfer.
- `frameList`: A pointer to the first element in an [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md) array. The array must contain at least `frameListCount` elements.
- `frameListCount`: The number of elements in `frameList`.
- `firstFrameNumber`: The frame number the request should begin on. Query the current frame number with [frameNumberWithTime:](../iousbhostobject/framenumberwithtime_.md). If `0`, the transfer starts on the next available frame (XHCI only).
- `completionHandler`: An [IOUSBHostIsochronousCompletionHandler](../iousbhostisochronouscompletionhandler.md) that runs when the request completes, or times out if the call returns successfully. The `completionHandler` doesn’t run if the method returns with an error.

<a id="return-value"></a>

## Return Value

`YES` if the request queues successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func enqueueIORequest(with data: NSMutableData, frameList: UnsafeMutablePointer<IOUSBHostIsochronousFrame>, frameListCount: Int, firstFrameNumber: UInt64) async throws -> (IOReturn, UnsafeMutablePointer<IOUSBHostIsochronousFrame>)
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method issues asynchronous isochronous requests. The caller allocates and initializes an array of [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md) structures to describe the transferred frames.

## See Also

### Sending Isochronous I/O

- [IOUSBHostIsochronousCompletionHandler](../iousbhostisochronouscompletionhandler.md): A completion handler for asynchronous isochronous transfers.
- [IOUSBHostTime](../iousbhosttime.md): The absolute time.
- [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md): Deprecated. A structure that represents a single frame in an isochronous transfer.
- [sendIORequest(with:frameList:frameListCount:firstFrameNumber:)](sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md): Deprecated. Sends a request on an isochronous endpoint.

# enqueueIORequestWithData:frameList:frameListCount:firstFrameNumber:error:completionHandler: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+ (deprecated in 27.0)

Enqueues a request on an isochronous endpoint.

## Declaration

```objectivec
- (BOOL) enqueueIORequestWithData:(NSMutableData *) data frameList:(IOUSBHostIsochronousFrame *) frameList frameListCount:(NSUInteger) frameListCount firstFrameNumber:(uint64_t) firstFrameNumber error:(NSError **) error completionHandler:(IOUSBHostIsochronousCompletionHandler) completionHandler;
```

## Parameters

- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the transfer.
- `frameList`: A pointer to the first element in an [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md) array. The array must contain at least `frameListCount` elements.
- `frameListCount`: The number of elements in `frameList`.
- `firstFrameNumber`: The frame number the request should begin on. Query the current frame number with [frameNumberWithTime:](../iousbhostobject/framenumberwithtime_.md). If `0`, the transfer starts on the next available frame (XHCI only).
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) in Objective-C that contains an [IOReturn](https://developer.apple.com/documentation/iokit/ioreturn) value on failure.
- `completionHandler`: An [IOUSBHostIsochronousCompletionHandler](../iousbhostisochronouscompletionhandler.md) that runs when the request completes, or times out if the call returns successfully. The `completionHandler` doesn’t run if the method returns with an error.

<a id="return-value"></a>

## Return Value

`YES` if the request queues successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func enqueueIORequest(with data: NSMutableData, frameList: UnsafeMutablePointer<IOUSBHostIsochronousFrame>, frameListCount: Int, firstFrameNumber: UInt64) async throws -> (IOReturn, UnsafeMutablePointer<IOUSBHostIsochronousFrame>)
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method issues asynchronous isochronous requests. The caller allocates and initializes an array of [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md) structures to describe the transferred frames.

## See Also

### Sending Isochronous I/O

- [IOUSBHostIsochronousCompletionHandler](../iousbhostisochronouscompletionhandler.md): A completion handler for asynchronous isochronous transfers.
- [IOUSBHostTime](../iousbhosttime.md): The absolute time.
- [IOUSBHostIsochronousFrame](../iousbhostisochronousframe.md): Deprecated. A structure that represents a single frame in an isochronous transfer.
- [sendIORequestWithData:frameList:frameListCount:firstFrameNumber:error:](sendiorequest%28with_framelist_framelistcount_firstframenumber_%29.md): Deprecated. Sends a request on an isochronous endpoint.
- [abortWithOption:error:](abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](abortwitherror_.md): Aborts pending input/output requests synchronously.
