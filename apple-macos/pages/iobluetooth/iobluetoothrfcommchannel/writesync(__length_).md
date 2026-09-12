> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/writesync(_:length:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/writesync(_:length:))

# writeSync(\_:length:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sends a block of data in the channel synchronously.

## Declaration

```swift
func writeSync(_ data: UnsafeMutableRawPointer!, length: UInt16) -> IOReturn
```

## Parameters

- `data`: A pointer to the data buffer to be sent.
- `length`: The length of the buffer to be sent (in bytes).

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the data was written successfully.

<a id="Discussion"></a>

## Discussion

Sends data through the channel. The number of bytes to be sent must not exceed the channel MTU. If the return value is an error condition none of the data was sent. This method will block until the data has been successfully sent to the hardware for transmission (or until an error occurs).

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.

# writeSync:length: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sends a block of data in the channel synchronously.

## Declaration

```objectivec
- (IOReturn) writeSync:(void *) data length:(UInt16) length;
```

## Parameters

- `data`: A pointer to the data buffer to be sent.
- `length`: The length of the buffer to be sent (in bytes).

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the data was written successfully.

<a id="Discussion"></a>

## Discussion

Sends data through the channel. The number of bytes to be sent must not exceed the channel MTU. If the return value is an error condition none of the data was sent. This method will block until the data has been successfully sent to the hardware for transmission (or until an error occurs).

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.
