> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbattrequest/offset](https://developer.apple.com/documentation/corebluetooth/cbattrequest/offset)

# offset (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The zero-based index of the first byte for the read or write request.

## Declaration

```swift
var offset: Int { get }
```

<a id="Discussion"></a>

## Discussion

You can use the value of this property to ensure that the ATT request is attempting to read or write within the proper bounds of the characteristic’s value. For an example of how to take a request’s offset property into account when responding to a read or write request, see [Responding to Read and Write Requests from a Central](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/PerformingCommonPeripheralRoleTasks/PerformingCommonPeripheralRoleTasks.html#//apple_ref/doc/uid/TP40013257-CH4-SW6).

## See Also

### Requesting to Read and Write Characteristic Values

- [central](central.md): The remote central device that originated the request.
- [characteristic](characteristic.md): The characteristic to read or write the value of.
- [value](value.md): The data that the central reads from or writes to the peripheral.

# offset (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The zero-based index of the first byte for the read or write request.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger offset;
```

<a id="Discussion"></a>

## Discussion

You can use the value of this property to ensure that the ATT request is attempting to read or write within the proper bounds of the characteristic’s value. For an example of how to take a request’s offset property into account when responding to a read or write request, see [Responding to Read and Write Requests from a Central](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/PerformingCommonPeripheralRoleTasks/PerformingCommonPeripheralRoleTasks.html#//apple_ref/doc/uid/TP40013257-CH4-SW6).

## See Also

### Requesting to Read and Write Characteristic Values

- [central](central.md): The remote central device that originated the request.
- [characteristic](characteristic.md): The characteristic to read or write the value of.
- [value](value.md): The data that the central reads from or writes to the peripheral.
