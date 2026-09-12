> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/getframenumber](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/getframenumber)

# GetFrameNumber

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Gets the current frame number of the USB controller.

## Declaration

```objectivec
virtual kern_return_t GetFrameNumber(uint64_t *frameNumber, uint64_t *theTime);
```

## Parameters

- `frameNumber`: A pointer to a variable. On return, this variable contains the current frame number.
- `theTime`: A pointer to a variable. On return, this variable contains the current time.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method returns the current frame number of the USB controller, omitting the microframe. Use this information to schedule future isochronous requests.

## See Also

### Configuring the Interface

- [GetPortStatus](getportstatus.md): Gets the current port status.
- [SelectAlternateSetting](selectalternatesetting.md): Selects an alternative setting for this interface.
- [GetIdlePolicy](getidlepolicy.md): Gets the current idle suspend timeout for the interface.
- [SetIdlePolicy](setidlepolicy.md): Sets the desired idle suspend timeout for the interface.
- [tIOUSBHostPortStatus](../tiousbhostportstatus.md): Constants indicating the state of a port.
