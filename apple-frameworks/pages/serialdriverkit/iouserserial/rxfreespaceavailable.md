> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/rxfreespaceavailable](https://developer.apple.com/documentation/serialdriverkit/iouserserial/rxfreespaceavailable)

# RxFreeSpaceAvailable

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Notifies your driver that buffer space is available for your device’s data.

## Declaration

```objectivec
virtual void RxFreeSpaceAvailable();
```

<a id="Discussion"></a>

## Discussion

Override this method and use it to read data asynchronously from the device’s serial port. When you finish reading the data, call the [RxDataAvailable](rxdataavailable.md) method to let the system know the data is ready.

## See Also

### Transmitting and Receiving Data

- [RxDataAvailable](rxdataavailable.md): Notifies the system that data from the device is now available.
- [TxDataAvailable](txdataavailable.md): Notifies your driver that the system has data for you to transmit to the device.
- [TxFreeSpaceAvailable](txfreespaceavailable.md): Notifies the system that the device is ready to accept more data.
- [RxError](rxerror.md): Reports errors that occurred when receiving data from the device.
