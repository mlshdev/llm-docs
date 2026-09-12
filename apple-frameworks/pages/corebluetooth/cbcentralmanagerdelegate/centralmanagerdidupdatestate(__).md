> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerdelegate/centralmanagerdidupdatestate(_:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate/centralmanagerdidupdatestate(_:))

# centralManagerDidUpdateState(\_:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate the central manager’s state updated.

## Declaration

```swift
func centralManagerDidUpdateState(_ central: CBCentralManager)
```

## Parameters

- `central`: The central manager whose state has changed.

<a id="Discussion"></a>

## Discussion

You implement this required method to ensure that the central device supports Bluetooth low energy and that it’s available to use. You should issue commands to the central manager only when the central manager’s [state](../cbmanager/state.md) indicates it’s powered on. A state with a value lower than [CBManagerState.poweredOn](../cbmanagerstate/poweredon.md) implies that scanning has stopped, which in turn disconnects any previously-connected peripherals. If the state moves below [CBManagerState.poweredOff](../cbmanagerstate/poweredoff.md), all [CBPeripheral](../cbperipheral.md) objects obtained from this central manager become invalid; you must retrieve or discover these peripherals again. For a complete list of possible states, see [CBManagerState](../cbmanagerstate.md).

## See Also

### Monitoring the Central Manager’s State

- [centralManager(\_:willRestoreState:)](centralmanager%28__willrestorestate_%29.md): Tells the delegate the system is about to restore the central manager.

# centralManagerDidUpdateState: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate the central manager’s state updated.

## Declaration

```objectivec
- (void) centralManagerDidUpdateState:(CBCentralManager *) central;
```

## Parameters

- `central`: The central manager whose state has changed.

<a id="Discussion"></a>

## Discussion

You implement this required method to ensure that the central device supports Bluetooth low energy and that it’s available to use. You should issue commands to the central manager only when the central manager’s [state](../cbmanager/state.md) indicates it’s powered on. A state with a value lower than [CBManagerStatePoweredOn](../cbmanagerstate/poweredon.md) implies that scanning has stopped, which in turn disconnects any previously-connected peripherals. If the state moves below [CBManagerStatePoweredOff](../cbmanagerstate/poweredoff.md), all [CBPeripheral](../cbperipheral.md) objects obtained from this central manager become invalid; you must retrieve or discover these peripherals again. For a complete list of possible states, see [CBManagerState](../cbmanagerstate.md).

## See Also

### Monitoring the Central Manager’s State

- [centralManager:willRestoreState:](centralmanager%28__willrestorestate_%29.md): Tells the delegate the system is about to restore the central manager.
