> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/getidlepolicy](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/getidlepolicy)

# GetIdlePolicy

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Retrieves the pipe’s current idle timeout.

## Declaration

```objectivec
virtual kern_return_t GetIdlePolicy(uint32_t *idleTimeoutMS);
```

## Parameters

- `idleTimeoutMS`: A pointer to store the current idle timeout in milliseconds.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Managing the Pipe’s Idle Policy

- [SetIdlePolicy](setidlepolicy.md): Sets the pipe’s desired idle timeout.
