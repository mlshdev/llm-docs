> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/asyncio](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/asyncio)

# AsyncIO

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Enqueues an asynchronous request on a bulk or interrupt endpoint.

## Declaration

```objectivec
virtual kern_return_t AsyncIO(IOMemoryDescriptor *dataBuffer, uint32_t dataBufferLength, OSAction *completion, uint32_t completionTimeoutMs);
```

## Parameters

- `dataBuffer`: The data buffer to use for the request. When transferring data to the device, this buffer contains the data to send. When receiving data from the device, this buffer is empty initially.
- `dataBufferLength`: The length of the data buffer.
- `completion`: An action object containing the callback method to execute when the transfer finishes.
- `completionTimeoutMs`: The timeout value in milliseconds. Specify `0` if you don’t want the request to time out. You must specify `0` when transferring data on an interrupt endpoint.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method performs an appropriate USB I/O request on the device and notifies your completion handler asynchronously when that transfer completes.

## See Also

### Interacting with Bulk and Interrupt Endpoints

- [IO](io.md): Performs a synchronous request on a bulk or interrupt endpoint.
- [CompleteAsyncIO](completeasyncio.md): Handles the completion of an asynchronous I/O request.
