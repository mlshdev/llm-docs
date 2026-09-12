> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanageroptionshowpoweralertkey](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanageroptionshowpoweralertkey)

# CBPeripheralManagerOptionShowPowerAlertKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value specifying whether the system should warn if Bluetooth is in the powered-off state when instantiating the peripheral manager.

## Declaration

```swift
let CBPeripheralManagerOptionShowPowerAlertKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md). If the key isn’t specified, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Initialization Options

- [CBPeripheralManagerOptionRestoreIdentifierKey](cbperipheralmanageroptionrestoreidentifierkey.md): A string containing a unique identifier (UID) for the peripheral manager to instantiate.

# CBPeripheralManagerOptionShowPowerAlertKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value specifying whether the system should warn if Bluetooth is in the powered-off state when instantiating the peripheral manager.

## Declaration

```objectivec
extern NSString * const CBPeripheralManagerOptionShowPowerAlertKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md). If the key isn’t specified, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Initialization Options

- [CBPeripheralManagerOptionRestoreIdentifierKey](cbperipheralmanageroptionrestoreidentifierkey.md): A string containing a unique identifier (UID) for the peripheral manager to instantiate.
