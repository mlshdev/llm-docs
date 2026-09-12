> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/init(delegate:queue:options:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/init(delegate:queue:options:))

# init(delegate:queue:options:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+

Initializes the peripheral manager with a specified delegate, dispatch queue, and initialization options.

## Declaration

```swift
init(delegate: (any CBPeripheralManagerDelegate)?, queue: dispatch_queue_t?, options: [String : Any]? = nil)
```

## Parameters

- `delegate`: The delegate to receive the peripheral role events.
- `queue`: The dispatch queue for dispatching the peripheral role events. If the value is `nil`, the peripheral manager dispatches peripheral role events using the main queue.
- `options`: An optional dictionary containing initialization options for a peripheral manager. For available options, see [Peripheral Manager Initialization Options](../peripheral-manager-initialization-options.md).

<a id="return-value"></a>

## Return Value

Returns a newly initialized peripheral manager.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the [CBPeripheralManager](../cbperipheralmanager.md) class.

## See Also

### Initializing a Peripheral Manager

- [init()](init%28%29.md): Initializes the peripheral manager without a delegate.
- [init(delegate:queue:)](init%28delegate_queue_%29.md): Initializes the peripheral manager with a specified delegate and dispatch queue.
- [delegate](delegate.md): The delegate object specified to receive peripheral events.
- [Peripheral Manager Initialization Options](../peripheral-manager-initialization-options.md): Keys used to specify options when creating a peripheral manager.

# initWithDelegate:queue:options: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+

Initializes the peripheral manager with a specified delegate, dispatch queue, and initialization options.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<CBPeripheralManagerDelegate>) delegate queue:(dispatch_queue_t) queue options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `delegate`: The delegate to receive the peripheral role events.
- `queue`: The dispatch queue for dispatching the peripheral role events. If the value is `nil`, the peripheral manager dispatches peripheral role events using the main queue.
- `options`: An optional dictionary containing initialization options for a peripheral manager. For available options, see [Peripheral Manager Initialization Options](../peripheral-manager-initialization-options.md).

<a id="return-value"></a>

## Return Value

Returns a newly initialized peripheral manager.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the [CBPeripheralManager](../cbperipheralmanager.md) class.

## See Also

### Initializing a Peripheral Manager

- [init](init%28%29.md): Initializes the peripheral manager without a delegate.
- [initWithDelegate:queue:](init%28delegate_queue_%29.md): Initializes the peripheral manager with a specified delegate and dispatch queue.
- [delegate](delegate.md): The delegate object specified to receive peripheral events.
- [Peripheral Manager Initialization Options](../peripheral-manager-initialization-options.md): Keys used to specify options when creating a peripheral manager.
