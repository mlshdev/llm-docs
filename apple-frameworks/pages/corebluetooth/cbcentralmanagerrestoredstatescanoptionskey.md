> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerrestoredstatescanoptionskey](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerrestoredstatescanoptionskey)

# CBCentralManagerRestoredStateScanOptionsKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary of peripheral scan options for use when restoring state.

## Declaration

```swift
let CBCentralManagerRestoredStateScanOptionsKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSDictionary](../foundation/nsdictionary.md). The dictionary contains all of the peripheral scan options in use by the central manager when the system stopped the app.

## See Also

### State Restoration Options

- [CBCentralManagerRestoredStatePeripheralsKey](cbcentralmanagerrestoredstateperipheralskey.md): An array of peripherals for use when restoring the state of a central manager.
- [CBCentralManagerRestoredStateScanServicesKey](cbcentralmanagerrestoredstatescanserviceskey.md): An array of service IDs for use when restoring state.

# CBCentralManagerRestoredStateScanOptionsKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary of peripheral scan options for use when restoring state.

## Declaration

```objectivec
extern NSString * const CBCentralManagerRestoredStateScanOptionsKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSDictionary](../foundation/nsdictionary.md). The dictionary contains all of the peripheral scan options in use by the central manager when the system stopped the app.

## See Also

### State Restoration Options

- [CBCentralManagerRestoredStatePeripheralsKey](cbcentralmanagerrestoredstateperipheralskey.md): An array of peripherals for use when restoring the state of a central manager.
- [CBCentralManagerRestoredStateScanServicesKey](cbcentralmanagerrestoredstatescanserviceskey.md): An array of service IDs for use when restoring state.
