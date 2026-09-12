> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/delegate](https://developer.apple.com/documentation/corebluetooth/cbperipheral/delegate)

# delegate (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate object specified to receive peripheral events.

## Declaration

```swift
weak var delegate: (any CBPeripheralDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

For information about how to implement your peripheral delegate, see [CBPeripheralDelegate](../cbperipheraldelegate.md).

## See Also

### Identifying a Peripheral

- [name](name.md): The name of the peripheral.

# delegate (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate object specified to receive peripheral events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CBPeripheralDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

For information about how to implement your peripheral delegate, see [CBPeripheralDelegate](../cbperipheraldelegate.md).

## See Also

### Identifying a Peripheral

- [name](name.md): The name of the peripheral.
