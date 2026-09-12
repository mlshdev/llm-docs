> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/hwprogramlatencytimer](https://developer.apple.com/documentation/serialdriverkit/iouserserial/hwprogramlatencytimer)

# HwProgramLatencyTimer

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Sets the amount of time to wait before sending the current buffer to the device.

## Declaration

```objectivec
virtual kern_return_t HwProgramLatencyTimer(uint32_t latency);
```

## Parameters

- `latency`: The number of milliseconds for the device to wait before sending a partial buffer to the host.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Override this method and use it to configure a latency timer for the device. Rather than sending buffers only when they’re full, the latency timer ensures that the hardware sends any accumulated data at the specified interval.

## See Also

### Programming the Modem

- [HwGetModemStatus](hwgetmodemstatus.md): Gets the current status of the modem from the hardware.
- [SetModemStatus](setmodemstatus.md): Sets the modem status to the specified values.
- [HwResetFIFO](hwresetfifo.md): Sends a command to reset the specified device queues.
- [HwSendBreak](hwsendbreak.md): Sends a linebreak command to the device.
- [HwProgramBaudRate](hwprogrambaudrate.md): Sets the communication baud rate to the specified value.
- [HwProgramMCR](hwprogrammcr.md): Configure the setings for the device’s modem control register (MCR).
- [HwProgramUART](hwprogramuart.md): Configure the settings for the device’s universal asynchronous receiver/transmitter (UART).
- [Hardware Constants](../hardware-constants.md): Configure your device with the appropriate parity and flow-control options.
