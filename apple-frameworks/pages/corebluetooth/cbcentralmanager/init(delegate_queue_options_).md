> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/init(delegate:queue:options:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/init(delegate:queue:options:))

# init(delegate:queue:options:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the central manager with specified delegate, dispatch queue, and initialization options.

## Declaration

```swift
init(delegate: (any CBCentralManagerDelegate)?, queue: dispatch_queue_t?, options: [String : Any]? = nil)
```

## Parameters

- `delegate`: The delegate that receives the central events.
- `queue`: The dispatch queue used to dispatch the central role events. If the value is `nil`, the central manager dispatches central role events using the main queue.
- `options`: An optional dictionary that contains initialization options for a central manager. For available options, see [Central Manager Initialization Options](../central-manager-initialization-options.md).

<a id="return-value"></a>

## Return Value

Returns a newly initialized central manager.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the [CBCentralManager](../cbcentralmanager.md) class.

## See Also

### Initializing a Central Manager

- [init()](init%28%29.md): Initializes the central manager without a delegate.
- [init(delegate:queue:)](init%28delegate_queue_%29.md): Initializes the central manager with a specified delegate and dispatch queue.
- [Central Manager Initialization Options](../central-manager-initialization-options.md): Keys used to pass options when initializing a central manager.
- [Central Manager State Restoration Options](../central-manager-state-restoration-options.md): Restore central manager state in scene-based apps.

# initWithDelegate:queue:options: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the central manager with specified delegate, dispatch queue, and initialization options.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<CBCentralManagerDelegate>) delegate queue:(dispatch_queue_t) queue options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `delegate`: The delegate that receives the central events.
- `queue`: The dispatch queue used to dispatch the central role events. If the value is `nil`, the central manager dispatches central role events using the main queue.
- `options`: An optional dictionary that contains initialization options for a central manager. For available options, see [Central Manager Initialization Options](../central-manager-initialization-options.md).

<a id="return-value"></a>

## Return Value

Returns a newly initialized central manager.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the [CBCentralManager](../cbcentralmanager.md) class.

## See Also

### Initializing a Central Manager

- [init](init%28%29.md): Initializes the central manager without a delegate.
- [initWithDelegate:queue:](init%28delegate_queue_%29.md): Initializes the central manager with a specified delegate and dispatch queue.
- [Central Manager Initialization Options](../central-manager-initialization-options.md): Keys used to pass options when initializing a central manager.
- [Central Manager State Restoration Options](../central-manager-state-restoration-options.md): Restore central manager state in scene-based apps.
