> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/txfreespaceavailable](https://developer.apple.com/documentation/serialdriverkit/iouserserial/txfreespaceavailable)

# TxFreeSpaceAvailable

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Notifies the system that the device is ready to accept more data.

## Declaration

```objectivec
virtual void TxFreeSpaceAvailable();
```

<a id="Discussion"></a>

## Discussion

Call this method after freeing up space in the memory buffer you use to transmit data. When more data is available, the system responds by adding that data to the buffer and calling the [TxDataAvailable](txdataavailable.md) method.

## See Also

### Transmitting and Receiving Data

- [RxDataAvailable](rxdataavailable.md): Notifies the system that data from the device is now available.
- [RxFreeSpaceAvailable](rxfreespaceavailable.md): Notifies your driver that buffer space is available for your device’s data.
- [TxDataAvailable](txdataavailable.md): Notifies your driver that the system has data for you to transmit to the device.
- [RxError](rxerror.md): Reports errors that occurred when receiving data from the device.
