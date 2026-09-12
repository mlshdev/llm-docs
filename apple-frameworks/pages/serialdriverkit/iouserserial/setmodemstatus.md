> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/setmodemstatus](https://developer.apple.com/documentation/serialdriverkit/iouserserial/setmodemstatus)

# SetModemStatus

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Sets the modem status to the specified values.

## Declaration

```objectivec
virtual kern_return_t SetModemStatus(bool cts, bool dsr, bool ri, bool dcd);
```

## Parameters

- `cts`: A Boolean value indicating the state of the clear-to-send bit. Specify `YES` to set the bit or `NO` to clear it.
- `dsr`: A Boolean value indicating the state of the data-set-ready bit. Specify `YES` to set the bit or `NO` to clear it.
- `ri`: A Boolean value indicating the state of the ring-indicator bit. Specify `YES` to set the bit or `NO` to clear it.
- `dcd`: A Boolean value indicating the state of the data-carrier-detect bit. Specify `YES` to set the bit or `NO` to clear it.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Call this method to report the state of the device to the system.

## See Also

### Programming the Modem

- [HwGetModemStatus](hwgetmodemstatus.md): Gets the current status of the modem from the hardware.
- [HwResetFIFO](hwresetfifo.md): Sends a command to reset the specified device queues.
- [HwSendBreak](hwsendbreak.md): Sends a linebreak command to the device.
- [HwProgramBaudRate](hwprogrambaudrate.md): Sets the communication baud rate to the specified value.
- [HwProgramLatencyTimer](hwprogramlatencytimer.md): Sets the amount of time to wait before sending the current buffer to the device.
- [HwProgramMCR](hwprogrammcr.md): Configure the setings for the device’s modem control register (MCR).
- [HwProgramUART](hwprogramuart.md): Configure the settings for the device’s universal asynchronous receiver/transmitter (UART).
- [Hardware Constants](../hardware-constants.md): Configure your device with the appropriate parity and flow-control options.
