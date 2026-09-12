> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbserialdriverkit/iouserusbserial/rxfreespaceavailable](https://developer.apple.com/documentation/usbserialdriverkit/iouserusbserial/rxfreespaceavailable)

# RxFreeSpaceAvailable

**Interface language:** Objective-C

**Framework:** USBSerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Notifies your driver that buffer space is available for your device’s data.

## Declaration

```objectivec
virtual void RxFreeSpaceAvailable();
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method initiates an asynchronous operation to read data from the USB device.

## See Also

### Transmitting and Receiving Data

- [handleRxPacket](handlerxpacket.md): Processes the data received from the USB device.
- [TxDataAvailable](txdataavailable.md): Notifies your driver that the system has data for you to transmit to the device.
- [handleInterruptPacket](handleinterruptpacket.md): Processes an interrupt packet that originated from the device.
