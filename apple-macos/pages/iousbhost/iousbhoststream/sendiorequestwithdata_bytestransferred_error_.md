> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhoststream/sendiorequestwithdata:bytestransferred:error:](https://developer.apple.com/documentation/iousbhost/iousbhoststream/sendiorequestwithdata:bytestransferred:error:)

# sendIORequestWithData:bytesTransferred:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Sends an input/output request on the stream.

## Declaration

```objectivec
- (BOOL) sendIORequestWithData:(NSMutableData *) data bytesTransferred:(NSUInteger *) bytesTransferred error:(NSError **) error;
```

## Parameters

- `data`: An [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata) object defining the memory to use for the transfer.
- `bytesTransferred`: An [NSUInteger](https://developer.apple.com/documentation/objectivec/nsuinteger) reference that updates with the byte count of the completed data phase.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](https://developer.apple.com/documentation/iokit/ioreturn) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This method sends a synchronous request on the stream, and won’t return until the request completes

> **Note**

>  Completion timeouts aren’t applicable to streams.

## See Also

### Sending I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueIORequestWithData:error:completionHandler:](enqueueiorequest%28with_completionhandler_%29.md): Enqueues an input/output request on the stream.
- [abortWithOption:error:](abort%28with_%29.md): Aborts pending input/output requests.
- [abortWithError:](abort%28%29.md): Aborts pending input/output requests synchronously.
