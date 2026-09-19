> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/getportstatus

# GetPortStatus

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Gets the current port status.

## Declaration

```objectivec
virtual kern_return_t GetPortStatus(uint32_t *portStatus);
```

## Parameters

- `portStatus`: A pointer to a variable. On return, the variable contains the port status. For a list of possible port status values, see [tIOUSBHostPortStatus](../tiousbhostportstatus.md).

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

## See Also

### Configuring the Interface

- [GetFrameNumber](getframenumber.md): Gets the current frame number of the USB controller.
- [SelectAlternateSetting](selectalternatesetting.md): Selects an alternative setting for this interface.
- [GetIdlePolicy](getidlepolicy.md): Gets the current idle suspend timeout for the interface.
- [SetIdlePolicy](setidlepolicy.md): Sets the desired idle suspend timeout for the interface.
- [tIOUSBHostPortStatus](../tiousbhostportstatus.md): Constants indicating the state of a port.
