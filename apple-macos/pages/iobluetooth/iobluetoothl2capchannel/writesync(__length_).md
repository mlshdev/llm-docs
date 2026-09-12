> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/writesync(_:length:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/writesync(_:length:))

# writeSync(\_:length:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Writes the given data synchronously over the target L2CAP channel to the remote device.

## Declaration

```swift
func writeSync(_ data: UnsafeMutableRawPointer!, length: UInt16) -> IOReturn
```

## Parameters

- `data`: Pointer to the buffer containing the data to send.
- `length`: The length of the given data buffer.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the data was written successfully.

<a id="Discussion"></a>

## Discussion

The length of the data may not exceed the L2CAP channel’s ougoing MTU. This method will block until the data has been successfully sent to the hardware for transmission (or an error occurs).

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.

# writeSync:length: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Writes the given data synchronously over the target L2CAP channel to the remote device.

## Declaration

```objectivec
- (IOReturn) writeSync:(void *) data length:(UInt16) length;
```

## Parameters

- `data`: Pointer to the buffer containing the data to send.
- `length`: The length of the given data buffer.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the data was written successfully.

<a id="Discussion"></a>

## Discussion

The length of the data may not exceed the L2CAP channel’s ougoing MTU. This method will block until the data has been successfully sent to the hardware for transmission (or an error occurs).

NOTE: This method is only available in macOS 10.2.5 (Bluetooth v1.2) or later.
