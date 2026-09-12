> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbattrequest/value](https://developer.apple.com/documentation/corebluetooth/cbattrequest/value)

# value (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data that the central reads from or writes to the peripheral.

## Declaration

```swift
var value: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property depends on whether the request type is read or write. For read requests, the property is `nil,` and you should set it before responding to the remote central through the [respond(to:withResult:)](../cbperipheralmanager/respond%28to_withresult_%29.md) method. For write requests, the value is the data to write to the characteristic’s value.

## See Also

### Requesting to Read and Write Characteristic Values

- [central](central.md): The remote central device that originated the request.
- [characteristic](characteristic.md): The characteristic to read or write the value of.
- [offset](offset.md): The zero-based index of the first byte for the read or write request.

# value (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The data that the central reads from or writes to the peripheral.

## Declaration

```objectivec
@property (copy, readwrite, nullable) NSData * value;
```

<a id="Discussion"></a>

## Discussion

The value of this property depends on whether the request type is read or write. For read requests, the property is `nil,` and you should set it before responding to the remote central through the [respondToRequest:withResult:](../cbperipheralmanager/respond%28to_withresult_%29.md) method. For write requests, the value is the data to write to the characteristic’s value.

## See Also

### Requesting to Read and Write Characteristic Values

- [central](central.md): The remote central device that originated the request.
- [characteristic](characteristic.md): The characteristic to read or write the value of.
- [offset](offset.md): The zero-based index of the first byte for the read or write request.
