> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srauthorizationstatus](https://developer.apple.com/documentation/sensorkit/srauthorizationstatus)

# SRAuthorizationStatus (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The states that model whether the user approves the app to read a particular sensor.

## Declaration

```swift
enum SRAuthorizationStatus
```

## Topics

### Enumeration Cases

- [SRAuthorizationStatus.authorized](srauthorizationstatus/authorized.md): User has granted authorization to this application
- [SRAuthorizationStatus.denied](srauthorizationstatus/denied.md): User has denied authorization to this application or data collection is disabled in Settings.
- [SRAuthorizationStatus.notDetermined](srauthorizationstatus/notdetermined.md): User has not yet made a choice regarding this application

### Initializers

- [init(rawValue:)](srauthorizationstatus/init%28rawvalue_%29.md)

### Type Methods

- [requestAuthorization(for:)](srauthorizationstatus/requestauthorization%28for_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking user authorization

- [authorizationStatus](srsensorreader/authorizationstatus.md): Deprecated. The status of the user’s agreement to let the app access this reader’s sensor.
- [requestAuthorization(sensors:completion:)](srsensorreader/requestauthorization%28sensors_completion_%29.md): Deprecated. Requests user permission to read one or more sensors.

# SRAuthorizationStatus (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The states that model whether the user approves the app to read a particular sensor.

## Declaration

```objectivec
enum SRAuthorizationStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [SRAuthorizationStatusAuthorized](srauthorizationstatus/authorized.md): User has granted authorization to this application
- [SRAuthorizationStatusDenied](srauthorizationstatus/denied.md): User has denied authorization to this application or data collection is disabled in Settings.
- [SRAuthorizationStatusNotDetermined](srauthorizationstatus/notdetermined.md): User has not yet made a choice regarding this application

## See Also

### Checking user authorization

- [authorizationStatus](srsensorreader/authorizationstatus.md): Deprecated. The status of the user’s agreement to let the app access this reader’s sensor.
- [requestAuthorizationForSensors:completion:](srsensorreader/requestauthorization%28sensors_completion_%29.md): Deprecated. Requests user permission to read one or more sensors.
