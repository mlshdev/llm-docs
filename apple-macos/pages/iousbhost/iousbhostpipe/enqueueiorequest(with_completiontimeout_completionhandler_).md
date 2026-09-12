> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/enqueueiorequest(with:completiontimeout:completionhandler:)](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/enqueueiorequest(with:completiontimeout:completionhandler:))

# enqueueIORequest(with:completionTimeout:completionHandler:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Enqueues an input/output request on the pipe.

## Declaration

```swift
func enqueueIORequest(with data: NSMutableData?, completionTimeout: TimeInterval, completionHandler: (@Sendable (IOReturn, Int) -> Void)? = nil) throws
```

```swift
func enqueueIORequest(with data: NSMutableData?, completionTimeout: TimeInterval) async throws -> (IOReturn, Int)
```

## Parameters

- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the transfer. Use [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) to send a zero-length packet.
- `completionTimeout`: A [TimeInterval](https://developer.apple.com/documentation/foundation/timeinterval) value representing the timeout of the request. If `0`, the request never times out. Use [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md) unless there’s a need for a specific timeout.
- `completionHandler`: An [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md) that runs when the request completes, or times out after the call returns successfully. If the method returns with an error, the completion handler doesn’t run.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func enqueueIORequest(with data: NSMutableData?, completionTimeout: TimeInterval) async throws -> (IOReturn, Int)
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to issue an asynchronous input/output request on a bulk or interrupt pipe.

## See Also

### Sending Bulk and Interrupt I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [clearStall()](clearstall%28%29.md): Clears the halt condition of the pipe.

# enqueueIORequestWithData:completionTimeout:error:completionHandler: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Enqueues an input/output request on the pipe.

## Declaration

```objectivec
- (BOOL) enqueueIORequestWithData:(NSMutableData *) data completionTimeout:(NSTimeInterval) completionTimeout error:(NSError **) error completionHandler:(IOUSBHostCompletionHandler) completionHandler;
```

## Parameters

- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the transfer. Use [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) to send a zero-length packet.
- `completionTimeout`: A [NSTimeInterval](https://developer.apple.com/documentation/foundation/timeinterval) value representing the timeout of the request. If `0`, the request never times out. Use [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md) unless there’s a need for a specific timeout.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) in Objective-C that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.
- `completionHandler`: An [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md) that runs when the request completes, or times out after the call returns successfully. If the method returns with an error, the completion handler doesn’t run.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func enqueueIORequest(with data: NSMutableData?, completionTimeout: TimeInterval) async throws -> (IOReturn, Int)
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to issue an asynchronous input/output request on a bulk or interrupt pipe.

## See Also

### Sending Bulk and Interrupt I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [sendIORequestWithData:bytesTransferred:completionTimeout:error:](sendiorequestwithdata_bytestransferred_completiontimeout_error_.md): Sends an input/output request on the pipe.
- [abortWithOption:error:](abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](abortwitherror_.md): Aborts pending input/output requests synchronously.
- [clearStallWithError:](clearstall%28%29.md): Clears the halt condition of the pipe.
