> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerrestoredstatescanserviceskey](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerrestoredstatescanserviceskey)

# CBCentralManagerRestoredStateScanServicesKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of service IDs for use when restoring state.

## Declaration

```swift
let CBCentralManagerRestoredStateScanServicesKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSArray](../foundation/nsarray.md) of service UUIDs (represented by [CBUUID](cbuuid.md) objects) containing all the services the central manager was scanning for at the time the system stopped the app.

## See Also

### State Restoration Options

- [CBCentralManagerRestoredStatePeripheralsKey](cbcentralmanagerrestoredstateperipheralskey.md): An array of peripherals for use when restoring the state of a central manager.
- [CBCentralManagerRestoredStateScanOptionsKey](cbcentralmanagerrestoredstatescanoptionskey.md): A dictionary of peripheral scan options for use when restoring state.

# CBCentralManagerRestoredStateScanServicesKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of service IDs for use when restoring state.

## Declaration

```objectivec
extern NSString * const CBCentralManagerRestoredStateScanServicesKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSArray](../foundation/nsarray.md) of service UUIDs (represented by [CBUUID](cbuuid.md) objects) containing all the services the central manager was scanning for at the time the system stopped the app.

## See Also

### State Restoration Options

- [CBCentralManagerRestoredStatePeripheralsKey](cbcentralmanagerrestoredstateperipheralskey.md): An array of peripherals for use when restoring the state of a central manager.
- [CBCentralManagerRestoredStateScanOptionsKey](cbcentralmanagerrestoredstatescanoptionskey.md): A dictionary of peripheral scan options for use when restoring state.
