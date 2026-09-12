> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbserialdriverkit/iouserusbserial/handleinterruptpacket](https://developer.apple.com/documentation/usbserialdriverkit/iouserusbserial/handleinterruptpacket)

# handleInterruptPacket

**Interface language:** Objective-C

**Framework:** USBSerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Processes an interrupt packet that originated from the device.

## Declaration

```objectivec
virtual void handleInterruptPacket(const uint8_t *packet, uint32_t size);
```

## Parameters

- `packet`: A buffer containing the interrupt-related data.
- `size`: The number of bytes in the `packet` buffer.

<a id="Discussion"></a>

## Discussion

Override this method if you want to process interrupt packets sent by the device. The default implementation of this method does nothing.

## See Also

### Transmitting and Receiving Data

- [handleRxPacket](handlerxpacket.md): Processes the data received from the USB device.
- [RxFreeSpaceAvailable](rxfreespaceavailable.md): Notifies your driver that buffer space is available for your device’s data.
- [TxDataAvailable](txdataavailable.md): Notifies your driver that the system has data for you to transmit to the device.
