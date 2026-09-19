> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/incar/headunit-swift.class/init(bluetoothidentifier:iap2identifier:)

# init(bluetoothIdentifier:iAP2Identifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a head unit object with the specified Bluetooth and iAP2 identifiers.

## Declaration

```swift
init(bluetoothIdentifier: String?, iAP2Identifier: String?)
```

## Parameters

- `bluetoothIdentifier`: The Bluetooth identifier of the vehicle’s physical head unit.
- `iAP2Identifier`: The iAP2 identifier of the vehicle’s physical head unit. This is the same value as the external accessory’s [serialNumber](../../../externalaccessory/eaaccessory/serialnumber.md).

<a id="Discussion"></a>

## Discussion

The system uses these identifiers to match a vehicle in the user’s My Vehicles collection with its physical counterpart. You can’t change these values after initialization.

# initWithBluetoothIdentifier:iAP2Identifier: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a head unit object with the specified Bluetooth and iAP2 identifiers.

## Declaration

```objectivec
- (instancetype) initWithBluetoothIdentifier:(NSString *) bluetoothIdentifier iAP2Identifier:(NSString *) iAP2Identifier;
```

## Parameters

- `bluetoothIdentifier`: The Bluetooth identifier of the vehicle’s physical head unit.
- `iAP2Identifier`: The iAP2 identifier of the vehicle’s physical head unit. This is the same value as the external accessory’s [serialNumber](../../../externalaccessory/eaaccessory/serialnumber.md).

<a id="Discussion"></a>

## Discussion

The system uses these identifiers to match a vehicle in the user’s My Vehicles collection with its physical counterpart. You can’t change these values after initialization.
