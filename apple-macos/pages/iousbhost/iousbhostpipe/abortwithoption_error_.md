> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/abortwithoption:error:](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/abortwithoption:error:)

# abortWithOption:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Aborts pending input/output requests.

## Declaration

```objectivec
- (BOOL) abortWithOption:(IOUSBHostAbortOption) option error:(NSError **) error;
```

## Parameters

- `option`: An [IOUSBHostAbortOption](../iousbhostabortoption.md). The default is [IOUSBHostAbortOptionSynchronous](../iousbhostabortoption/synchronous.md).
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the abort completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This method aborts all pending input/output requests. If the `option` argument is [IOUSBHostAbortOptionSynchronous](../iousbhostabortoption/synchronous.md), this method blocks any new ones.

## Topics

### Options

- [IOUSBHostAbortOption](../iousbhostabortoption.md): Options for aborting pending input/output requests.

## See Also

### Sending Bulk and Interrupt I/O

- [IOUSBHostCompletionHandler](../iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [IOUSBHostDefaultControlCompletionTimeout](../iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [enqueueIORequestWithData:completionTimeout:error:completionHandler:](enqueueiorequest%28with_completiontimeout_completionhandler_%29.md): Enqueues an input/output request on the pipe.
- [sendIORequestWithData:bytesTransferred:completionTimeout:error:](sendiorequestwithdata_bytestransferred_completiontimeout_error_.md): Sends an input/output request on the pipe.
- [abortWithError:](abortwitherror_.md): Aborts pending input/output requests synchronously.
- [clearStallWithError:](clearstall%28%29.md): Clears the halt condition of the pipe.
