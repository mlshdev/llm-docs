> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/sendiorequestwithdata:bytestransferred:completiontimeout:error:](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/sendiorequestwithdata:bytestransferred:completiontimeout:error:)

# sendIORequestWithData:bytesTransferred:completionTimeout:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Sends an input/output request on the pipe.

## Declaration

```objectivec
- (BOOL) sendIORequestWithData:(NSMutableData *) data bytesTransferred:(NSUInteger *) bytesTransferred completionTimeout:(NSTimeInterval) completionTimeout error:(NSError **) error;
```

## Parameters

- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the transfer. Use `nil` to send a zero-length packet.
- `bytesTransferred`: An [NSUInteger](https://developer.apple.com/documentation/objectivec/nsuinteger) reference that updates with the number of bytes the request transferred.
- `completionTimeout`: A [NSTimeInterval](https://developer.apple.com/documentation/foundation/timeinterval) value representing the timeout of the request. If `0`, the request never times out. Use [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md) unless there’s a need for a specific timeout.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

Use this method to issue a synchronous input/output request on a bulk or interrupt pipe. The method doesn’t return until the request completes or times out.

## See Also

### Sending Bulk and Interrupt I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [enqueueIORequestWithData:completionTimeout:error:completionHandler:](enqueueiorequest%28with_completiontimeout_completionhandler_%29.md): Enqueues an input/output request on the pipe.
- [abortWithOption:error:](abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](abortwitherror_.md): Aborts pending input/output requests synchronously.
- [clearStallWithError:](clearstall%28%29.md): Clears the halt condition of the pipe.
