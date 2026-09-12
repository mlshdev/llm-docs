> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/abort](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/abort)

# Abort

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Aborts all of the pipe’s pending I/O requests.

## Declaration

```objectivec
virtual kern_return_t Abort(IOOptionBits options, kern_return_t withError, IOService *forClient);
```

## Parameters

- `options`: Options for how to abort the requests. For a list of possible values, see [IOUSBAbortOptions](../iousbabortoptions.md).
- `withError`: The error value to report for each request. Specify `kIOReturnAborted` for this parameter.
- `forClient`: The service that initiated the requests. Specify a non `NULL` value for this parameter only for pipes associated with a control endpoint; specify `NULL` for other endpoint types. For a control endpoint, you can also specify `NULL` to abort all requests.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If the `options` argument includes `kAbortSynchronous`, this method blocks all new I/O requests except those submitted by an aborted completion routine.

## See Also

### Aborting I/O Requests

- [IOUSBAbortOptions](../iousbabortoptions.md): Options to use when aborting an I/O request.
