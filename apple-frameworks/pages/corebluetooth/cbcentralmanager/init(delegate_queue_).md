> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/init(delegate:queue:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/init(delegate:queue:))

# init(delegate:queue:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the central manager with a specified delegate and dispatch queue.

## Declaration

```swift
convenience init(delegate: (any CBCentralManagerDelegate)?, queue: dispatch_queue_t?)
```

## Parameters

- `delegate`: The delegate that receives central events.
- `queue`: The dispatch queue used to dispatch the central role events. If the value is `nil`, the central manager dispatches central role events using the main queue.

<a id="return-value"></a>

## Return Value

Returns a newly initialized central manager.

<a id="discussion"></a>

## Discussion

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Initializing a Central Manager

- [init()](init%28%29.md): Initializes the central manager without a delegate.
- [init(delegate:queue:options:)](init%28delegate_queue_options_%29.md): Initializes the central manager with specified delegate, dispatch queue, and initialization options.
- [Central Manager Initialization Options](../central-manager-initialization-options.md): Keys used to pass options when initializing a central manager.
- [Central Manager State Restoration Options](../central-manager-state-restoration-options.md): Restore central manager state in scene-based apps.

# initWithDelegate:queue: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the central manager with a specified delegate and dispatch queue.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<CBCentralManagerDelegate>) delegate queue:(dispatch_queue_t) queue;
```

## Parameters

- `delegate`: The delegate that receives central events.
- `queue`: The dispatch queue used to dispatch the central role events. If the value is `nil`, the central manager dispatches central role events using the main queue.

<a id="return-value"></a>

## Return Value

Returns a newly initialized central manager.

<a id="discussion"></a>

## Discussion

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Initializing a Central Manager

- [init](init%28%29.md): Initializes the central manager without a delegate.
- [initWithDelegate:queue:options:](init%28delegate_queue_options_%29.md): Initializes the central manager with specified delegate, dispatch queue, and initialization options.
- [Central Manager Initialization Options](../central-manager-initialization-options.md): Keys used to pass options when initializing a central manager.
- [Central Manager State Restoration Options](../central-manager-state-restoration-options.md): Restore central manager state in scene-based apps.
