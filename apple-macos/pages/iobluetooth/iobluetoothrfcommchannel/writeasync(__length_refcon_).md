> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/writeasync(_:length:refcon:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/writeasync(_:length:refcon:))

# writeAsync(\_:length:refcon:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sends a block of data in the channel asynchronously.

## Declaration

```swift
func writeAsync(_ data: UnsafeMutableRawPointer!, length: UInt16, refcon: UnsafeMutableRawPointer!) -> IOReturn
```

## Parameters

- `data`: A pointer to the data buffer to be sent.
- `length`: The length of the buffer to be sent (in bytes).
- `refcon`: User supplied value that gets passed to the write callback.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the data was buffered successfully.

<a id="Discussion"></a>

## Discussion

The number of bytes to be sent must not exceed the channel MTU. If the return value is an error condition none of the data was sent. Once the data has been successfully passed to the hardware to be transmitted, the delegate method -rfcommChannelWriteComplete:refcon:status: will be called with the refcon that was passed to this method.

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.

# writeAsync:length:refcon: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sends a block of data in the channel asynchronously.

## Declaration

```objectivec
- (IOReturn) writeAsync:(void *) data length:(UInt16) length refcon:(void *) refcon;
```

## Parameters

- `data`: A pointer to the data buffer to be sent.
- `length`: The length of the buffer to be sent (in bytes).
- `refcon`: User supplied value that gets passed to the write callback.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the data was buffered successfully.

<a id="Discussion"></a>

## Discussion

The number of bytes to be sent must not exceed the channel MTU. If the return value is an error condition none of the data was sent. Once the data has been successfully passed to the hardware to be transmitted, the delegate method -rfcommChannelWriteComplete:refcon:status: will be called with the refcon that was passed to this method.

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.
