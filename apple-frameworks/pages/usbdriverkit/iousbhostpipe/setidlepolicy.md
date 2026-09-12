> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/setidlepolicy](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/setidlepolicy)

# SetIdlePolicy

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Sets the pipe’s desired idle timeout.

## Declaration

```objectivec
virtual kern_return_t SetIdlePolicy(uint32_t idleTimeoutMs);
```

## Parameters

- `idleTimeoutMs`: The amount of time, in milliseconds, before an active transfer is considered idle. If 0, the pipe isn’t considered idle if there’s an I/O request enqueued.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

When a bulk or interrupt pipe is actively servicing an I/O request, it’s considered “busy” for the idle timeout value. For a more complete discussion of idle policies, refer to “Pausing IO” in `IOUSBHostFamily.h`.

## See Also

### Managing the Pipe’s Idle Policy

- [GetIdlePolicy](getidlepolicy.md): Retrieves the pipe’s current idle timeout.
