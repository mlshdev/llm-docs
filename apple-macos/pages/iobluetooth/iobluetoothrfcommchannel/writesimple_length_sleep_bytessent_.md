> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/writesimple:length:sleep:bytessent:](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/writesimple:length:sleep:bytessent:)

# writeSimple:length:sleep:bytesSent:

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Sends a block of data in the channel.

## Declaration

```objectivec
- (IOReturn) writeSimple:(void *) data length:(UInt16) length sleep:(BOOL) sleep bytesSent:(UInt32 *) numBytesSent;
```

## Parameters

- `data`: A pointer to the data buffer to be sent.
- `length`: The length of the buffer to be sent (in bytes).
- `sleep`: A boolean if set to TRUE the call will wait until it is possible to send all the data.
- `numBytesSent`: UInt32 pointer in which the caller received the nuber of bytes sent. If set to FALSE and it is not possible to send part of the data the method will return immediately.

<a id="Discussion"></a>

## Discussion

***WARNING*** This method is being deprecated in favor of -writeSync:… and -writeAsync:… Sends data through the channel. The number of bytes to be sent is arbitrary. The caller does not have to worry about the MTU.
