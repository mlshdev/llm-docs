> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/hwprogrammcr](https://developer.apple.com/documentation/serialdriverkit/iouserserial/hwprogrammcr)

# HwProgramMCR

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Configure the setings for the device’s modem control register (MCR).

## Declaration

```objectivec
virtual kern_return_t HwProgramMCR(bool dtr, bool rts);
```

## Parameters

- `dtr`: A Boolean value indicating whether to set or clear the data-terminal-ready bit. If the value is `YES`, set the bit; otherwise, clear it.
- `rts`: A Boolean value indicating whether to set or clear the request-to-send bit. If the value is `YES`, set the bit; otherwise, clear it.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Override this method and use it to program your hardware with the specified information.

## See Also

### Programming the Modem

- [HwGetModemStatus](hwgetmodemstatus.md): Gets the current status of the modem from the hardware.
- [SetModemStatus](setmodemstatus.md): Sets the modem status to the specified values.
- [HwResetFIFO](hwresetfifo.md): Sends a command to reset the specified device queues.
- [HwSendBreak](hwsendbreak.md): Sends a linebreak command to the device.
- [HwProgramBaudRate](hwprogrambaudrate.md): Sets the communication baud rate to the specified value.
- [HwProgramLatencyTimer](hwprogramlatencytimer.md): Sets the amount of time to wait before sending the current buffer to the device.
- [HwProgramUART](hwprogramuart.md): Configure the settings for the device’s universal asynchronous receiver/transmitter (UART).
- [Hardware Constants](../hardware-constants.md): Configure your device with the appropriate parity and flow-control options.
