> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanagerdidupdatestate(_:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerdelegate/peripheralmanagerdidupdatestate(_:))

# peripheralManagerDidUpdateState(\_:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate the peripheral manager’s state updated.

## Declaration

```swift
func peripheralManagerDidUpdateState(_ peripheral: CBPeripheralManager)
```

## Parameters

- `peripheral`: The peripheral manager whose state has changed.

<a id="Discussion"></a>

## Discussion

You implement this required method to ensure that Bluetooth low energy is available to use on the local peripheral device.

Issue commands to the peripheral manager only when the peripheral manager is in the powered-on state, as indicated by the [CBPeripheralManagerState.poweredOn](../cbperipheralmanagerstate/poweredon.md) constant. A state with a value lower than [CBPeripheralManagerState.poweredOn](../cbperipheralmanagerstate/poweredon.md) implies that advertising has stopped and that any connected centrals have been disconnected. If the state moves below [CBPeripheralManagerState.poweredOff](../cbperipheralmanagerstate/poweredoff.md), advertising has stopped you must explicitly restart it. In addition, the powered off state clears the local database; in this case you must explicitly re-add all services. For a complete list and discussion of the possible values representing the state of the peripheral manager, see the [CBPeripheralManagerState](../cbperipheralmanagerstate.md) enumeration in [CBPeripheralManager](../cbperipheralmanager.md).

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Monitoring Changes to the Peripheral Manager’s State

- [peripheralManager(\_:willRestoreState:)](peripheralmanager%28__willrestorestate_%29.md): Tells the delegate the system is about to restore the peripheral manager.
- [Peripheral Manager State Restoration Options](../peripheral-manager-state-restoration-options.md): Keys used to specify options when restoring the state of a peripheral manager.

# peripheralManagerDidUpdateState: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate the peripheral manager’s state updated.

## Declaration

```objectivec
- (void) peripheralManagerDidUpdateState:(CBPeripheralManager *) peripheral;
```

## Parameters

- `peripheral`: The peripheral manager whose state has changed.

<a id="Discussion"></a>

## Discussion

You implement this required method to ensure that Bluetooth low energy is available to use on the local peripheral device.

Issue commands to the peripheral manager only when the peripheral manager is in the powered-on state, as indicated by the [CBPeripheralManagerStatePoweredOn](../cbperipheralmanagerstate/poweredon.md) constant. A state with a value lower than [CBPeripheralManagerStatePoweredOn](../cbperipheralmanagerstate/poweredon.md) implies that advertising has stopped and that any connected centrals have been disconnected. If the state moves below [CBPeripheralManagerStatePoweredOff](../cbperipheralmanagerstate/poweredoff.md), advertising has stopped you must explicitly restart it. In addition, the powered off state clears the local database; in this case you must explicitly re-add all services. For a complete list and discussion of the possible values representing the state of the peripheral manager, see the [CBPeripheralManagerState](../cbperipheralmanagerstate.md) enumeration in [CBPeripheralManager](../cbperipheralmanager.md).

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Monitoring Changes to the Peripheral Manager’s State

- [peripheralManager:willRestoreState:](peripheralmanager%28__willrestorestate_%29.md): Tells the delegate the system is about to restore the peripheral manager.
- [Peripheral Manager State Restoration Options](../peripheral-manager-state-restoration-options.md): Keys used to specify options when restoring the state of a peripheral manager.
