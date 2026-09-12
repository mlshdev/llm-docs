> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/close](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/close)

# Close

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Closes the session to the host interface.

## Declaration

```objectivec
virtual kern_return_t Close(IOService *forClient, IOOptionBits options);
```

## Parameters

- `forClient`: The service object that is closing the session.
- `options`: Options to use when closing the service. Specify `0` for this parameter.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method closes a session to an interface that you previously opened using the [Open](open.md) method. The method acquires the service’s workloop lock, and aborts any I/O for the interface and its endpoints. This method may also call [commandSleep](https://developer.apple.com/documentation/kernel/iocommandgate/1573818-commandsleep) to allow for the processing of aborted I/O before returning.

## See Also

### Managing the Device Session

- [Open](open.md): Opens a session to the host interface.
