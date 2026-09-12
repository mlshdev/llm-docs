> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerrestoredstateserviceskey](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerrestoredstateserviceskey)

# CBPeripheralManagerRestoredStateServicesKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of restored peripheral services.

## Declaration

```swift
let CBPeripheralManagerRestoredStateServicesKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSArray](../foundation/nsarray.md) of [CBMutableService](cbmutableservice.md) objects. It contains all of the services that previously published to the local peripheral’s database when the system quit the app.

Restoration includes all information about a service, including any included services, characteristics, characteristic descriptors, and subscribed centrals.

## See Also

### State Restoration Dictionary Keys

- [CBPeripheralManagerRestoredStateAdvertisementDataKey](cbperipheralmanagerrestoredstateadvertisementdatakey.md): A dictionary of restored advertising data.

# CBPeripheralManagerRestoredStateServicesKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of restored peripheral services.

## Declaration

```objectivec
extern NSString * const CBPeripheralManagerRestoredStateServicesKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSArray](../foundation/nsarray.md) of [CBMutableService](cbmutableservice.md) objects. It contains all of the services that previously published to the local peripheral’s database when the system quit the app.

Restoration includes all information about a service, including any included services, characteristics, characteristic descriptors, and subscribed centrals.

## See Also

### State Restoration Dictionary Keys

- [CBPeripheralManagerRestoredStateAdvertisementDataKey](cbperipheralmanagerrestoredstateadvertisementdatakey.md): A dictionary of restored advertising data.
