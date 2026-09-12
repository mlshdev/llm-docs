> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/writeasync(_:length:refcon:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/writeasync(_:length:refcon:))

# writeAsync(\_:length:refcon:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Writes the given data over the target L2CAP channel asynchronously to the remote device.

## Declaration

```swift
func writeAsync(_ data: UnsafeMutableRawPointer!, length: UInt16, refcon: UnsafeMutableRawPointer!) -> IOReturn
```

## Parameters

- `data`: Pointer to the buffer containing the data to send.
- `length`: The length of the given data buffer.
- `refcon`: User supplied value that gets passed to the write callback.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the data was buffered successfully.

<a id="Discussion"></a>

## Discussion

The length of the data may not exceed the L2CAP channel’s ougoing MTU. When the data has been successfully passed to the hardware to be transmitted, the delegate method -l2capChannelWriteComplete:refcon:status: will be called with the refcon passed into this method.

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.

# writeAsync:length:refcon: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Writes the given data over the target L2CAP channel asynchronously to the remote device.

## Declaration

```objectivec
- (IOReturn) writeAsync:(void *) data length:(UInt16) length refcon:(void *) refcon;
```

## Parameters

- `data`: Pointer to the buffer containing the data to send.
- `length`: The length of the given data buffer.
- `refcon`: User supplied value that gets passed to the write callback.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the data was buffered successfully.

<a id="Discussion"></a>

## Discussion

The length of the data may not exceed the L2CAP channel’s ougoing MTU. When the data has been successfully passed to the hardware to be transmitted, the delegate method -l2capChannelWriteComplete:refcon:status: will be called with the refcon passed into this method.

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.
