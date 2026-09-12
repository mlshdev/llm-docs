> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/delegate](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/delegate)

# delegate (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate object specified to receive peripheral events.

## Declaration

```swift
weak var delegate: (any CBPeripheralManagerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

For information about how to implement your peripheral manager delegate, see [CBPeripheralManagerDelegate](../cbperipheralmanagerdelegate.md).

## See Also

### Initializing a Peripheral Manager

- [init()](init%28%29.md): Initializes the peripheral manager without a delegate.
- [init(delegate:queue:)](init%28delegate_queue_%29.md): Initializes the peripheral manager with a specified delegate and dispatch queue.
- [init(delegate:queue:options:)](init%28delegate_queue_options_%29.md): Initializes the peripheral manager with a specified delegate, dispatch queue, and initialization options.
- [Peripheral Manager Initialization Options](../peripheral-manager-initialization-options.md): Keys used to specify options when creating a peripheral manager.

# delegate (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate object specified to receive peripheral events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CBPeripheralManagerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

For information about how to implement your peripheral manager delegate, see [CBPeripheralManagerDelegate](../cbperipheralmanagerdelegate.md).

## See Also

### Initializing a Peripheral Manager

- [init](init%28%29.md): Initializes the peripheral manager without a delegate.
- [initWithDelegate:queue:](init%28delegate_queue_%29.md): Initializes the peripheral manager with a specified delegate and dispatch queue.
- [initWithDelegate:queue:options:](init%28delegate_queue_options_%29.md): Initializes the peripheral manager with a specified delegate, dispatch queue, and initialization options.
- [Peripheral Manager Initialization Options](../peripheral-manager-initialization-options.md): Keys used to specify options when creating a peripheral manager.
