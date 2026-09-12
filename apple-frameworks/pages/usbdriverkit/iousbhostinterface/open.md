> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/open](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/open)

# Open

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Opens a session to the host interface.

## Declaration

```objectivec
virtual kern_return_t Open(IOService *forClient, IOOptionBits options, uint8_t *arg);
```

## Parameters

- `forClient`: The service object that is opening the session.
- `options`: The options to use when opening the session. Specify [kUSBHostOpenOptionSelectAlternateSetting](https://developer.apple.com/documentation/kernel/3143215-anonymous/kusbhostopenoptionselectalternatesetting) to select an alternative setting for this interface immediately. Specify the alternative setting in the `arg` parameter.
- `arg`: Additional arguments to the function. If you specify [kUSBHostOpenOptionSelectAlternateSetting](https://developer.apple.com/documentation/kernel/3143215-anonymous/kusbhostopenoptionselectalternatesetting) for the `options` parameter, use this value to specify the value for the alternative setting; otherwise, specify `NULL`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method opens a session to the [IOUSBHostInterface](../iousbhostinterface.md), and acquires the service’s workloop lock. Only one service at a time may open a session to the interface.

## See Also

### Managing the Device Session

- [Close](close.md): Closes the session to the host interface.
