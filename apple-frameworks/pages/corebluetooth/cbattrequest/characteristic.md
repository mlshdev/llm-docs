> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbattrequest/characteristic](https://developer.apple.com/documentation/corebluetooth/cbattrequest/characteristic)

# characteristic (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The characteristic to read or write the value of.

## Declaration

```swift
var characteristic: CBCharacteristic { get }
```

## See Also

### Requesting to Read and Write Characteristic Values

- [central](central.md): The remote central device that originated the request.
- [value](value.md): The data that the central reads from or writes to the peripheral.
- [offset](offset.md): The zero-based index of the first byte for the read or write request.

# characteristic (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The characteristic to read or write the value of.

## Declaration

```objectivec
@property (nonatomic, readonly) CBCharacteristic * characteristic;
```

## See Also

### Requesting to Read and Write Characteristic Values

- [central](central.md): The remote central device that originated the request.
- [value](value.md): The data that the central reads from or writes to the peripheral.
- [offset](offset.md): The zero-based index of the first byte for the read or write request.
