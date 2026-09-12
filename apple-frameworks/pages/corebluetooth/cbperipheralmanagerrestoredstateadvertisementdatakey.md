> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerrestoredstateadvertisementdatakey](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerrestoredstateadvertisementdatakey)

# CBPeripheralManagerRestoredStateAdvertisementDataKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary of restored advertising data.

## Declaration

```swift
let CBPeripheralManagerRestoredStateAdvertisementDataKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSDictionary](../foundation/nsdictionary.md) that contains the data advertised by the peripheral manager at the time the system quit the app.

## See Also

### State Restoration Dictionary Keys

- [CBPeripheralManagerRestoredStateServicesKey](cbperipheralmanagerrestoredstateserviceskey.md): An array of restored peripheral services.

# CBPeripheralManagerRestoredStateAdvertisementDataKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary of restored advertising data.

## Declaration

```objectivec
extern NSString * const CBPeripheralManagerRestoredStateAdvertisementDataKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSDictionary](../foundation/nsdictionary.md) that contains the data advertised by the peripheral manager at the time the system quit the app.

## See Also

### State Restoration Dictionary Keys

- [CBPeripheralManagerRestoredStateServicesKey](cbperipheralmanagerrestoredstateserviceskey.md): An array of restored peripheral services.
