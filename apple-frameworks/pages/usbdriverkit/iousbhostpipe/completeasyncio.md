> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/completeasyncio](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/completeasyncio)

# CompleteAsyncIO

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Handles the completion of an asynchronous I/O request.

## Declaration

```objectivec
virtual void CompleteAsyncIO(OSAction *action, IOReturn status, uint32_t actualByteCount, uint64_t completionTimestamp);
```

## Parameters

- `action`: A pointer to the [OSAction](../../driverkit/osaction.md) object of the request.
- `status`: The result of the operation.
- `actualByteCount`: The number of bytes that the operation actually transferred.
- `completionTimestamp`: The absolute time that the transfer completed.

<a id="Discussion"></a>

## Discussion

Implement a custom version of this method and use the [TYPE](../../driverkit/type.md) macro to let the system know that your method conforms to this prototype.

## See Also

### Interacting with Bulk and Interrupt Endpoints

- [IO](io.md): Performs a synchronous request on a bulk or interrupt endpoint.
- [AsyncIO](asyncio.md): Enqueues an asynchronous request on a bulk or interrupt endpoint.
