> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/init()](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/init())

# init() (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the peripheral manager without a delegate.

## Declaration

```swift
convenience init()
```

## See Also

### Initializing a Peripheral Manager

- [init(delegate:queue:)](init%28delegate_queue_%29.md): Initializes the peripheral manager with a specified delegate and dispatch queue.
- [init(delegate:queue:options:)](init%28delegate_queue_options_%29.md): Initializes the peripheral manager with a specified delegate, dispatch queue, and initialization options.
- [delegate](delegate.md): The delegate object specified to receive peripheral events.
- [Peripheral Manager Initialization Options](../peripheral-manager-initialization-options.md): Keys used to specify options when creating a peripheral manager.

# init (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the peripheral manager without a delegate.

## Declaration

```objectivec
- (instancetype) init;
```

## See Also

### Initializing a Peripheral Manager

- [initWithDelegate:queue:](init%28delegate_queue_%29.md): Initializes the peripheral manager with a specified delegate and dispatch queue.
- [initWithDelegate:queue:options:](init%28delegate_queue_options_%29.md): Initializes the peripheral manager with a specified delegate, dispatch queue, and initialization options.
- [delegate](delegate.md): The delegate object specified to receive peripheral events.
- [Peripheral Manager Initialization Options](../peripheral-manager-initialization-options.md): Keys used to specify options when creating a peripheral manager.
