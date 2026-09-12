> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhoststream/enqueueiorequest(with:completionhandler:)](https://developer.apple.com/documentation/iousbhost/iousbhoststream/enqueueiorequest(with:completionhandler:))

# enqueueIORequest(with:completionHandler:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Enqueues an input/output request on the stream.

## Declaration

```swift
func enqueueIORequest(with data: NSMutableData?, completionHandler: (@Sendable (IOReturn, Int) -> Void)? = nil) throws
```

```swift
func enqueueIORequest(with data: NSMutableData?) async throws -> (IOReturn, Int)
```

## Parameters

- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the transfer.
- `completionHandler`: An [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md) that runs when the request completes. The `completionHandler` doesn’t run if the method returns an error.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func enqueueIORequest(with data: NSMutableData?) async throws -> (IOReturn, Int)
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method sends an asynchronous request on the stream.

> **Note**

>  Completion timeouts aren’t applicable to streams.

## See Also

### Sending I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [abort(with:)](abort%28with_%29.md): Aborts pending input/output requests.
- [abort()](abort%28%29.md): Aborts pending input/output requests synchronously.

# enqueueIORequestWithData:error:completionHandler: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Enqueues an input/output request on the stream.

## Declaration

```objectivec
- (BOOL) enqueueIORequestWithData:(NSMutableData *) data error:(NSError **) error completionHandler:(IOUSBHostCompletionHandler) completionHandler;
```

## Parameters

- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the transfer.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) in Objective-C that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.
- `completionHandler`: An [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md) that runs when the request completes. The `completionHandler` doesn’t run if the method returns an error.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func enqueueIORequest(with data: NSMutableData?) async throws -> (IOReturn, Int)
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method sends an asynchronous request on the stream.

> **Note**

>  Completion timeouts aren’t applicable to streams.

## See Also

### Sending I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [sendIORequestWithData:bytesTransferred:error:](sendiorequestwithdata_bytestransferred_error_.md): Sends an input/output request on the stream.
- [abortWithOption:error:](abort%28with_%29.md): Aborts pending input/output requests.
- [abortWithError:](abort%28%29.md): Aborts pending input/output requests synchronously.
