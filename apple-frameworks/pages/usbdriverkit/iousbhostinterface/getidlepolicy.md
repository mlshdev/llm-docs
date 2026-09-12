> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/getidlepolicy](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/getidlepolicy)

# GetIdlePolicy

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Gets the current idle suspend timeout for the interface.

## Declaration

```objectivec
virtual kern_return_t GetIdlePolicy(uint32_t *deviceIdleTimeout);
```

## Parameters

- `deviceIdleTimeout`: A pointer to a variable. On return, the variable contains the amount of time, in milliseconds, to wait after all pipes are idle before suspending the device.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Configuring the Interface

- [GetFrameNumber](getframenumber.md): Gets the current frame number of the USB controller.
- [GetPortStatus](getportstatus.md): Gets the current port status.
- [SelectAlternateSetting](selectalternatesetting.md): Selects an alternative setting for this interface.
- [SetIdlePolicy](setidlepolicy.md): Sets the desired idle suspend timeout for the interface.
- [tIOUSBHostPortStatus](../tiousbhostportstatus.md): Constants indicating the state of a port.
