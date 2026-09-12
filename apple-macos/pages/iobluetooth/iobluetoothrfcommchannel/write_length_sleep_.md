> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/write:length:sleep:](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/write:length:sleep:)

# write:length:sleep:

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Sends a block of data in the channel syncronously.

## Declaration

```objectivec
- (IOReturn) write:(void *) data length:(UInt16) length sleep:(BOOL) sleep;
```

## Parameters

- `data`: Is a pointer to the data buffer to be sent.
- `length`: The length of the buffer to be sent (in bytes).
- `sleep`: Is a boolean if set to TRUE the call will wait until it is possible to send data. If set to FALSE and it is not possible to send data the method will return immediately with an error.

<a id="return-value"></a>

## Return Value

An error code value. 0 if successful.

<a id="Discussion"></a>

## Discussion

***WARNING*** This method is being deprecated in favor of -writeSync:… and -writeAsync:… Sends data through the channel. The number of bytes to be sent must not exceed the channel MTU. If the return value is an error condition none of the data was sent.
