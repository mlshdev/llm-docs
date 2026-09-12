> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/io](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/io)

# IO

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Performs a synchronous request on a bulk or interrupt endpoint.

## Declaration

```objectivec
virtual kern_return_t IO(IOMemoryDescriptor *dataBuffer, uint32_t dataBufferLength, uint32_t *bytesTransferred, uint32_t completionTimeoutMs);
```

## Parameters

- `dataBuffer`: The data buffer to use for the request. When transferring data to the device, this buffer contains the data to send. When receiving data from the device, this buffer is empty initially.
- `dataBufferLength`: The length of the data buffer.
- `bytesTransferred`: A pointer to a variable. On output, this variable contains the number of bytes that were actually transferred.
- `completionTimeoutMs`: The timeout value in milliseconds. Specify `0` if you don’t want the request to time out. You must specify `0` when transferring data on an interrupt endpoint.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method acquires the service’s workloop lock and performs an appropriate USB I/O request on the device. The method waits for the request to complete, and may call [commandSleep](https://developer.apple.com/documentation/kernel/iocommandgate/1573818-commandsleep) during that time.

## See Also

### Interacting with Bulk and Interrupt Endpoints

- [AsyncIO](asyncio.md): Enqueues an asynchronous request on a bulk or interrupt endpoint.
- [CompleteAsyncIO](completeasyncio.md): Handles the completion of an asynchronous I/O request.
