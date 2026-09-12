> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/disconnectqueues](https://developer.apple.com/documentation/serialdriverkit/iouserserial/disconnectqueues)

# DisconnectQueues

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Releases the buffers that manage data moving to and from the device.

## Declaration

```objectivec
virtual kern_return_t DisconnectQueues();
```

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

During the cleanup of your driver, call this method to disconnect the data queues you use to buffer data. If you provided the buffer objects at configuration time, the system releases its references to the objects you provided.

## See Also

### Configuring the Serial Data Queues

- [ConnectQueues](connectqueues.md): Creates and configures the buffers that store the data moving to and from the device.
