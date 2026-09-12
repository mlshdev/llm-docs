> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/hwresetfifo](https://developer.apple.com/documentation/serialdriverkit/iouserserial/hwresetfifo)

# HwResetFIFO

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Sends a command to reset the specified device queues.

## Declaration

```objectivec
virtual kern_return_t HwResetFIFO(bool tx, bool rx);
```

## Parameters

- `tx`: If `YES`, reset the queue you use to transmit data; otherwise, don’t reset the queue.
- `rx`: If `YES`, reset the queue you use to receive data; otherwise, don’t reset the queue.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Override this method and use it to reset your device.

## See Also

### Programming the Modem

- [HwGetModemStatus](hwgetmodemstatus.md): Gets the current status of the modem from the hardware.
- [SetModemStatus](setmodemstatus.md): Sets the modem status to the specified values.
- [HwSendBreak](hwsendbreak.md): Sends a linebreak command to the device.
- [HwProgramBaudRate](hwprogrambaudrate.md): Sets the communication baud rate to the specified value.
- [HwProgramLatencyTimer](hwprogramlatencytimer.md): Sets the amount of time to wait before sending the current buffer to the device.
- [HwProgramMCR](hwprogrammcr.md): Configure the setings for the device’s modem control register (MCR).
- [HwProgramUART](hwprogramuart.md): Configure the settings for the device’s universal asynchronous receiver/transmitter (UART).
- [Hardware Constants](../hardware-constants.md): Configure your device with the appropriate parity and flow-control options.
