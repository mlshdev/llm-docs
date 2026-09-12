> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/init(delegate:queue:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/init(delegate:queue:))

# init(delegate:queue:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+

Initializes the peripheral manager with a specified delegate and dispatch queue.

## Declaration

```swift
convenience init(delegate: (any CBPeripheralManagerDelegate)?, queue: dispatch_queue_t?)
```

## Parameters

- `delegate`: The delegate to receive the peripheral role events.
- `queue`: The dispatch queue for dispatching the peripheral role events. If the value is `nil`, the peripheral manager dispatches peripheral role events using the main queue.

<a id="return-value"></a>

## Return Value

Returns a newly initialized peripheral manager.

<a id="discussion"></a>

## Discussion

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Initializing a Peripheral Manager

- [init()](init%28%29.md): Initializes the peripheral manager without a delegate.
- [init(delegate:queue:options:)](init%28delegate_queue_options_%29.md): Initializes the peripheral manager with a specified delegate, dispatch queue, and initialization options.
- [delegate](delegate.md): The delegate object specified to receive peripheral events.
- [Peripheral Manager Initialization Options](../peripheral-manager-initialization-options.md): Keys used to specify options when creating a peripheral manager.

# initWithDelegate:queue: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+

Initializes the peripheral manager with a specified delegate and dispatch queue.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<CBPeripheralManagerDelegate>) delegate queue:(dispatch_queue_t) queue;
```

## Parameters

- `delegate`: The delegate to receive the peripheral role events.
- `queue`: The dispatch queue for dispatching the peripheral role events. If the value is `nil`, the peripheral manager dispatches peripheral role events using the main queue.

<a id="return-value"></a>

## Return Value

Returns a newly initialized peripheral manager.

<a id="discussion"></a>

## Discussion

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Initializing a Peripheral Manager

- [init](init%28%29.md): Initializes the peripheral manager without a delegate.
- [initWithDelegate:queue:options:](init%28delegate_queue_options_%29.md): Initializes the peripheral manager with a specified delegate, dispatch queue, and initialization options.
- [delegate](delegate.md): The delegate object specified to receive peripheral events.
- [Peripheral Manager Initialization Options](../peripheral-manager-initialization-options.md): Keys used to specify options when creating a peripheral manager.
