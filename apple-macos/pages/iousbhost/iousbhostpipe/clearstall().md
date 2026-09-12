> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/clearstall()](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/clearstall())

# clearStall() (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Clears the halt condition of the pipe.

## Declaration

```swift
func clearStall() throws
```

<a id="Discussion"></a>

## Discussion

When a bulk or interrupt USB endpoint encounters any input/output error other than a timeout, it transitions to a halted state. It must also clear to perform additional input/output requests on the endpoint.

This method clears the halted condition for the endpoint. It also sends a `CLEAR_TT_BUFFER` control request (See USB 2.0, 11.24.2.3.) to an intermediate hub, if necessary. All pending input/output requests on the endpoint abort, and the data toggle for the endpoint resets.

## See Also

### Sending Bulk and Interrupt I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [enqueueIORequest(with:completionTimeout:completionHandler:)](enqueueiorequest%28with_completiontimeout_completionhandler_%29.md): Enqueues an input/output request on the pipe.

# clearStallWithError: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Clears the halt condition of the pipe.

## Declaration

```objectivec
- (BOOL) clearStallWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the clear completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

When a bulk or interrupt USB endpoint encounters any input/output error other than a timeout, it transitions to a halted state. It must also clear to perform additional input/output requests on the endpoint.

This method clears the halted condition for the endpoint. It also sends a `CLEAR_TT_BUFFER` control request (See USB 2.0, 11.24.2.3.) to an intermediate hub, if necessary. All pending input/output requests on the endpoint abort, and the data toggle for the endpoint resets.

## See Also

### Sending Bulk and Interrupt I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [enqueueIORequestWithData:completionTimeout:error:completionHandler:](enqueueiorequest%28with_completiontimeout_completionhandler_%29.md): Enqueues an input/output request on the pipe.
- [sendIORequestWithData:bytesTransferred:completionTimeout:error:](sendiorequestwithdata_bytestransferred_completiontimeout_error_.md): Sends an input/output request on the pipe.
- [abortWithOption:error:](abortwithoption_error_.md): Aborts pending input/output requests.
- [abortWithError:](abortwitherror_.md): Aborts pending input/output requests synchronously.
