> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanageroptionshowpoweralertkey](https://developer.apple.com/documentation/corebluetooth/cbcentralmanageroptionshowpoweralertkey)

# CBCentralManagerOptionShowPowerAlertKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that specifies whether the system warns the user if the app instantiates the central manager when Bluetooth service isn’t available.

## Declaration

```swift
let CBCentralManagerOptionShowPowerAlertKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object. If the key isn’t specified, the default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constants

- [CBCentralManagerOptionRestoreIdentifierKey](cbcentralmanageroptionrestoreidentifierkey.md): A string containing a unique identifier (UID) for the central manager to instantiate.

# CBCentralManagerOptionShowPowerAlertKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that specifies whether the system warns the user if the app instantiates the central manager when Bluetooth service isn’t available.

## Declaration

```objectivec
extern NSString * const CBCentralManagerOptionShowPowerAlertKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md) object. If the key isn’t specified, the default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Constants

- [CBCentralManagerOptionRestoreIdentifierKey](cbcentralmanageroptionrestoreidentifierkey.md): A string containing a unique identifier (UID) for the central manager to instantiate.
