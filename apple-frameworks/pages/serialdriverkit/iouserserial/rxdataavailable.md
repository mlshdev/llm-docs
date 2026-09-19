> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/serialdriverkit/iouserserial/rxdataavailable

# RxDataAvailable

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Notifies the system that data from the device is now available.

## Declaration

```objectivec
virtual void RxDataAvailable();
```

<a id="Discussion"></a>

## Discussion

After receiving data from the device and placing it in your data buffer, call this method to let the system know that the data is available.

## See Also

### Transmitting and Receiving Data

- [RxFreeSpaceAvailable](rxfreespaceavailable.md): Notifies your driver that buffer space is available for your device’s data.
- [TxDataAvailable](txdataavailable.md): Notifies your driver that the system has data for you to transmit to the device.
- [TxFreeSpaceAvailable](txfreespaceavailable.md): Notifies the system that the device is ready to accept more data.
- [RxError](rxerror.md): Reports errors that occurred when receiving data from the device.
