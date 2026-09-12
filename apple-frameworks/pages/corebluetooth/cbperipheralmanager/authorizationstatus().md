> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/authorizationstatus()](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/authorizationstatus())

# authorizationStatus() (Swift)

**Framework:** Core Bluetooth  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Returns the app’s authorization status for sharing data while in the background.

> Use CBManagerAuthorization instead

## Declaration

```swift
class func authorizationStatus() -> CBPeripheralManagerAuthorizationStatus
```

<a id="return-value"></a>

## Return Value

A value that indicates whether the app has authorization to share data using Bluetooth services while in the background. For a list of possible values, see [CBPeripheralManagerAuthorizationStatus](../cbperipheralmanagerauthorizationstatus.md).

<a id="Discussion"></a>

## Discussion

The system manages the authorization status of a given app, and considers several factors. The user must explicitly authorize apps to share data using Bluetooth services while in the background state. The system automatically displays a request for user authorization when your app first attempts to use Bluetooth services to share data.

Calling this method doesn’t prompt the user for access. Instead, you use this method to detect restricted access and hide any affected UI features from the user.

## See Also

### Monitoring the State of a Peripheral Manager

- [CBPeripheralManagerAuthorizationStatus](../cbperipheralmanagerauthorizationstatus.md): Deprecated. Values representing the current authorization state of the peripheral manager.
- [CBPeripheralManagerState](../cbperipheralmanagerstate.md): Deprecated. Values that represent the current state of the peripheral manager.

# authorizationStatus (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Returns the app’s authorization status for sharing data while in the background.

> Use CBManagerAuthorization instead

## Declaration

```objectivec
+ (CBPeripheralManagerAuthorizationStatus) authorizationStatus;
```

<a id="return-value"></a>

## Return Value

A value that indicates whether the app has authorization to share data using Bluetooth services while in the background. For a list of possible values, see [CBPeripheralManagerAuthorizationStatus](../cbperipheralmanagerauthorizationstatus.md).

<a id="Discussion"></a>

## Discussion

The system manages the authorization status of a given app, and considers several factors. The user must explicitly authorize apps to share data using Bluetooth services while in the background state. The system automatically displays a request for user authorization when your app first attempts to use Bluetooth services to share data.

Calling this method doesn’t prompt the user for access. Instead, you use this method to detect restricted access and hide any affected UI features from the user.

## See Also

### Monitoring the State of a Peripheral Manager

- [CBPeripheralManagerAuthorizationStatus](../cbperipheralmanagerauthorizationstatus.md): Deprecated. Values representing the current authorization state of the peripheral manager.
- [CBPeripheralManagerState](../cbperipheralmanagerstate.md): Deprecated. Values that represent the current state of the peripheral manager.
