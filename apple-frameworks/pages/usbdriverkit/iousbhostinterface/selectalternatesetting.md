> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/selectalternatesetting](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/selectalternatesetting)

# SelectAlternateSetting

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Selects an alternative setting for this interface.

## Declaration

```objectivec
virtual kern_return_t SelectAlternateSetting(uint8_t bAlternateSetting);
```

## Parameters

- `bAlternateSetting`: The alternative interface number to activate.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Use this method to select an alternative setting for the interface. The system aborts all pending I/O on the interface’s pipes, and closes any open pipes. The system selects the new alternative setting using the `SET_INTERFACE` control request (USB 2.0, section 9.4.10).

## See Also

### Configuring the Interface

- [GetFrameNumber](getframenumber.md): Gets the current frame number of the USB controller.
- [GetPortStatus](getportstatus.md): Gets the current port status.
- [GetIdlePolicy](getidlepolicy.md): Gets the current idle suspend timeout for the interface.
- [SetIdlePolicy](setidlepolicy.md): Sets the desired idle suspend timeout for the interface.
- [tIOUSBHostPortStatus](../tiousbhostportstatus.md): Constants indicating the state of a port.
