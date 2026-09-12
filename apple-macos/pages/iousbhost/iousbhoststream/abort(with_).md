> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhoststream/abort(with:)](https://developer.apple.com/documentation/iousbhost/iousbhoststream/abort(with:))

# abort(with:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Aborts pending input/output requests.

## Declaration

```swift
func abort(with option: IOUSBHostAbortOption) throws
```

## Parameters

- `option`: A set of options. [IOUSBHostAbortOption.synchronous](../iousbhostabortoption/synchronous.md) is the default.

<a id="Discussion"></a>

## Discussion

Set the stream context as nonactive on the device with an out-of-band (class-defined) mechanism before calling this method, in accordance with USB 3.2, 8.12.1.4. The device won’t select a nonactive stream to become the current stream on the endpoint.

## Topics

### Options

- [IOUSBHostAbortOption](../iousbhostabortoption.md): Options for aborting pending input/output requests.

## See Also

### Sending I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueIORequest(with:completionHandler:)](enqueueiorequest%28with_completionhandler_%29.md): Enqueues an input/output request on the stream.
- [abort()](abort%28%29.md): Aborts pending input/output requests synchronously.

# abortWithOption:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Aborts pending input/output requests.

## Declaration

```objectivec
- (BOOL) abortWithOption:(IOUSBHostAbortOption) option error:(NSError **) error;
```

## Parameters

- `option`: A set of options. [IOUSBHostAbortOptionSynchronous](../iousbhostabortoption/synchronous.md) is the default.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

Set the stream context as nonactive on the device with an out-of-band (class-defined) mechanism before calling this method, in accordance with USB 3.2, 8.12.1.4. The device won’t select a nonactive stream to become the current stream on the endpoint.

## Topics

### Options

- [IOUSBHostAbortOption](../iousbhostabortoption.md): Options for aborting pending input/output requests.

## See Also

### Sending I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueIORequestWithData:error:completionHandler:](enqueueiorequest%28with_completionhandler_%29.md): Enqueues an input/output request on the stream.
- [sendIORequestWithData:bytesTransferred:error:](sendiorequestwithdata_bytestransferred_error_.md): Sends an input/output request on the stream.
- [abortWithError:](abort%28%29.md): Aborts pending input/output requests synchronously.
