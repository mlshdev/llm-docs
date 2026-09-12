> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmanager/state](https://developer.apple.com/documentation/corebluetooth/cbmanager/state)

# state (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The current state of the manager.

## Declaration

```swift
var state: CBManagerState { get }
```

<a id="Discussion"></a>

## Discussion

This state is initially set to [CBManagerState.unknown](../cbmanagerstate/unknown.md). When the state updates, the manager calls its delegate’s [centralManagerDidUpdateState(\_:)](../cbcentralmanagerdelegate/centralmanagerdidupdatestate%28__%29.md) method.

## See Also

### Accessing the Manager’s Properties

- [CBManagerState](../cbmanagerstate.md): The possible states of a Core Bluetooth manager.

# state (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The current state of the manager.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CBManagerState state;
```

<a id="Discussion"></a>

## Discussion

This state is initially set to [CBManagerStateUnknown](../cbmanagerstate/unknown.md). When the state updates, the manager calls its delegate’s [centralManagerDidUpdateState:](../cbcentralmanagerdelegate/centralmanagerdidupdatestate%28__%29.md) method.

## See Also

### Accessing the Manager’s Properties

- [CBManagerState](../cbmanagerstate.md): The possible states of a Core Bluetooth manager.
