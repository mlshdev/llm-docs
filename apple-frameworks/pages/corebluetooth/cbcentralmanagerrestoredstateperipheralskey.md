> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerrestoredstateperipheralskey](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerrestoredstateperipheralskey)

# CBCentralManagerRestoredStatePeripheralsKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of peripherals for use when restoring the state of a central manager.

## Declaration

```swift
let CBCentralManagerRestoredStatePeripheralsKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSArray](../foundation/nsarray.md) of [CBPeripheral](cbperipheral.md) objects. The array contains all of the peripherals connected to the central manager (or had a pending connection) at the time the system stopped the app.

When possible, the system restores all information about a peripheral, including any discovered services, characteristics, characteristic descriptors, and characteristic notification states.

## See Also

### State Restoration Options

- [CBCentralManagerRestoredStateScanServicesKey](cbcentralmanagerrestoredstatescanserviceskey.md): An array of service IDs for use when restoring state.
- [CBCentralManagerRestoredStateScanOptionsKey](cbcentralmanagerrestoredstatescanoptionskey.md): A dictionary of peripheral scan options for use when restoring state.

# CBCentralManagerRestoredStatePeripheralsKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of peripherals for use when restoring the state of a central manager.

## Declaration

```objectivec
extern NSString * const CBCentralManagerRestoredStatePeripheralsKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSArray](../foundation/nsarray.md) of [CBPeripheral](cbperipheral.md) objects. The array contains all of the peripherals connected to the central manager (or had a pending connection) at the time the system stopped the app.

When possible, the system restores all information about a peripheral, including any discovered services, characteristics, characteristic descriptors, and characteristic notification states.

## See Also

### State Restoration Options

- [CBCentralManagerRestoredStateScanServicesKey](cbcentralmanagerrestoredstatescanserviceskey.md): An array of service IDs for use when restoring state.
- [CBCentralManagerRestoredStateScanOptionsKey](cbcentralmanagerrestoredstatescanoptionskey.md): A dictionary of peripheral scan options for use when restoring state.
