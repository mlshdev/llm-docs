> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhoststream/abort()](https://developer.apple.com/documentation/iousbhost/iousbhoststream/abort())

# abort() (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Aborts pending input/output requests synchronously.

## Declaration

```swift
func abort() throws
```

<a id="Discussion"></a>

## Discussion

Set the stream context as nonactive on the device with an out-of-band (class-defined) mechanism before calling this method, in accordance with USB 3.2, 8.12.1.4. The device won’t select a nonactive stream to become the current stream on the endpoint.

## See Also

### Sending I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueIORequest(with:completionHandler:)](enqueueiorequest%28with_completionhandler_%29.md): Enqueues an input/output request on the stream.
- [abort(with:)](abort%28with_%29.md): Aborts pending input/output requests.

# abortWithError: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Aborts pending input/output requests synchronously.

## Declaration

```objectivec
- (BOOL) abortWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Set the stream context as nonactive on the device with an out-of-band (class-defined) mechanism before calling this method, in accordance with USB 3.2, 8.12.1.4. The device won’t select a nonactive stream to become the current stream on the endpoint.

## See Also

### Sending I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueIORequestWithData:error:completionHandler:](enqueueiorequest%28with_completionhandler_%29.md): Enqueues an input/output request on the stream.
- [sendIORequestWithData:bytesTransferred:error:](sendiorequestwithdata_bytestransferred_error_.md): Sends an input/output request on the stream.
- [abortWithOption:error:](abort%28with_%29.md): Aborts pending input/output requests.
