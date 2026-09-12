> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerauthorizationstatus](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerauthorizationstatus)

# CBPeripheralManagerAuthorizationStatus (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Values representing the current authorization state of the peripheral manager.

> Use CBManagerAuthorization instead

## Declaration

```swift
enum CBPeripheralManagerAuthorizationStatus
```

## Topics

### Constants

- [CBPeripheralManagerAuthorizationStatus.notDetermined](cbperipheralmanagerauthorizationstatus/notdetermined.md): Deprecated. An authorization status that indicates the user hasn’t indicated whether this app can share data using Bluetooth while in the background.
- [CBPeripheralManagerAuthorizationStatus.restricted](cbperipheralmanagerauthorizationstatus/restricted.md): Deprecated. An authorization status that indicates this app isn’t authorized to share data using Bluetooth while in the background.
- [CBPeripheralManagerAuthorizationStatus.denied](cbperipheralmanagerauthorizationstatus/denied.md): Deprecated. An authorization status that indicates the user explicitly denied this app from sharing data using Bluetooth while in the background.
- [CBPeripheralManagerAuthorizationStatus.authorized](cbperipheralmanagerauthorizationstatus/authorized.md): Deprecated. An authorization status that indicates the user authorized this app to share data using Bluetooth while in the background.

### Initializers

- [init(rawValue:)](cbperipheralmanagerauthorizationstatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring the State of a Peripheral Manager

- [authorizationStatus()](cbperipheralmanager/authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for sharing data while in the background.
- [CBPeripheralManagerState](cbperipheralmanagerstate.md): Deprecated. Values that represent the current state of the peripheral manager.

# CBPeripheralManagerAuthorizationStatus (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Values representing the current authorization state of the peripheral manager.

> Use CBManagerAuthorization instead

## Declaration

```objectivec
enum CBPeripheralManagerAuthorizationStatus : NSInteger;
```

## Topics

### Constants

- [CBPeripheralManagerAuthorizationStatusNotDetermined](cbperipheralmanagerauthorizationstatus/notdetermined.md): Deprecated. An authorization status that indicates the user hasn’t indicated whether this app can share data using Bluetooth while in the background.
- [CBPeripheralManagerAuthorizationStatusRestricted](cbperipheralmanagerauthorizationstatus/restricted.md): Deprecated. An authorization status that indicates this app isn’t authorized to share data using Bluetooth while in the background.
- [CBPeripheralManagerAuthorizationStatusDenied](cbperipheralmanagerauthorizationstatus/denied.md): Deprecated. An authorization status that indicates the user explicitly denied this app from sharing data using Bluetooth while in the background.
- [CBPeripheralManagerAuthorizationStatusAuthorized](cbperipheralmanagerauthorizationstatus/authorized.md): Deprecated. An authorization status that indicates the user authorized this app to share data using Bluetooth while in the background.

## See Also

### Monitoring the State of a Peripheral Manager

- [authorizationStatus](cbperipheralmanager/authorizationstatus%28%29.md): Deprecated. Returns the app’s authorization status for sharing data while in the background.
- [CBPeripheralManagerState](cbperipheralmanagerstate.md): Deprecated. Values that represent the current state of the peripheral manager.
