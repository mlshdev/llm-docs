> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbserialdriverkit/iouserusbserial/txdataavailable

# TxDataAvailable

**Interface language:** Objective-C

**Framework:** USBSerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Notifies your driver that the system has data for you to transmit to the device.

## Declaration

```objectivec
virtual void TxDataAvailable();
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method initiates an asynchronous operation to transmit the buffered data to the device.

## See Also

### Transmitting and Receiving Data

- [handleRxPacket](handlerxpacket.md): Processes the data received from the USB device.
- [RxFreeSpaceAvailable](rxfreespaceavailable.md): Notifies your driver that buffer space is available for your device’s data.
- [handleInterruptPacket](handleinterruptpacket.md): Processes an interrupt packet that originated from the device.
