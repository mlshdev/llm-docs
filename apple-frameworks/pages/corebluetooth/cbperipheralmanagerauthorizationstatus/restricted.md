> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerauthorizationstatus/restricted](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerauthorizationstatus/restricted)

# CBPeripheralManagerAuthorizationStatus.restricted (Swift)

**Framework:** Core Bluetooth  
**Kind:** Case  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

An authorization status that indicates this app isn’t authorized to share data using Bluetooth while in the background.

> Use CBManagerAuthorization instead

## Declaration

```swift
case restricted
```

<a id="Discussion"></a>

## Discussion

The user can’t change this app’s status, possibly due to active restrictions such as parental controls being in place.

## See Also

### Constants

- [CBPeripheralManagerAuthorizationStatus.notDetermined](notdetermined.md): Deprecated. An authorization status that indicates the user hasn’t indicated whether this app can share data using Bluetooth while in the background.
- [CBPeripheralManagerAuthorizationStatus.denied](denied.md): Deprecated. An authorization status that indicates the user explicitly denied this app from sharing data using Bluetooth while in the background.
- [CBPeripheralManagerAuthorizationStatus.authorized](authorized.md): Deprecated. An authorization status that indicates the user authorized this app to share data using Bluetooth while in the background.

# CBPeripheralManagerAuthorizationStatusRestricted (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

An authorization status that indicates this app isn’t authorized to share data using Bluetooth while in the background.

> Use CBManagerAuthorization instead

## Declaration

```objectivec
CBPeripheralManagerAuthorizationStatusRestricted
```

<a id="Discussion"></a>

## Discussion

The user can’t change this app’s status, possibly due to active restrictions such as parental controls being in place.

## See Also

### Constants

- [CBPeripheralManagerAuthorizationStatusNotDetermined](notdetermined.md): Deprecated. An authorization status that indicates the user hasn’t indicated whether this app can share data using Bluetooth while in the background.
- [CBPeripheralManagerAuthorizationStatusDenied](denied.md): Deprecated. An authorization status that indicates the user explicitly denied this app from sharing data using Bluetooth while in the background.
- [CBPeripheralManagerAuthorizationStatusAuthorized](authorized.md): Deprecated. An authorization status that indicates the user authorized this app to share data using Bluetooth while in the background.
