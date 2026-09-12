> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/txdataavailable](https://developer.apple.com/documentation/serialdriverkit/iouserserial/txdataavailable)

# TxDataAvailable

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Notifies your driver that the system has data for you to transmit to the device.

## Declaration

```objectivec
virtual void TxDataAvailable();
```

<a id="Discussion"></a>

## Discussion

The system calls this method to let you know that there is buffered data ready for you to transmit to the device. The default implementation of this method does nothing. Override it and use your implementation to transfer that data to your hardware.

## See Also

### Transmitting and Receiving Data

- [RxDataAvailable](rxdataavailable.md): Notifies the system that data from the device is now available.
- [RxFreeSpaceAvailable](rxfreespaceavailable.md): Notifies your driver that buffer space is available for your device’s data.
- [TxFreeSpaceAvailable](txfreespaceavailable.md): Notifies the system that the device is ready to accept more data.
- [RxError](rxerror.md): Reports errors that occurred when receiving data from the device.
