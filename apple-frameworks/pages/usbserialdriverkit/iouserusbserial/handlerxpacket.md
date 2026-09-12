> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbserialdriverkit/iouserusbserial/handlerxpacket](https://developer.apple.com/documentation/usbserialdriverkit/iouserusbserial/handlerxpacket)

# handleRxPacket

**Interface language:** Objective-C

**Framework:** USBSerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Processes the data received from the USB device.

## Declaration

```objectivec
virtual void handleRxPacket(uint8_t * & packet, uint32_t & size);
```

## Parameters

- `packet`: A pointer to a buffer that contains the raw packets received from the device.
- `size`: A pointer to the number of bytes in the `packet` buffer.

<a id="Discussion"></a>

## Discussion

The system calls this method after it receives raw data from the USB device, and before it moves that data to the read buffer. The default implementation of this method does nothing. You can override it, as needed, to modify the packet data or report any errors.

## See Also

### Transmitting and Receiving Data

- [RxFreeSpaceAvailable](rxfreespaceavailable.md): Notifies your driver that buffer space is available for your device’s data.
- [TxDataAvailable](txdataavailable.md): Notifies your driver that the system has data for you to transmit to the device.
- [handleInterruptPacket](handleinterruptpacket.md): Processes an interrupt packet that originated from the device.
