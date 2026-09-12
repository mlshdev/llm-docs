> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmauthorizationstatus](https://developer.apple.com/documentation/coremotion/cmauthorizationstatus)

# CMAuthorizationStatus (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 4.0+

The authorization status for motion-related features.

## Declaration

```swift
enum CMAuthorizationStatus
```

## Topics

### Enumeration Cases

- [CMAuthorizationStatus.notDetermined](cmauthorizationstatus/notdetermined.md): The status has not yet been determined.
- [CMAuthorizationStatus.restricted](cmauthorizationstatus/restricted.md): Access is denied due to system-wide restrictions.
- [CMAuthorizationStatus.denied](cmauthorizationstatus/denied.md): Access was denied by the user.
- [CMAuthorizationStatus.authorized](cmauthorizationstatus/authorized.md): Access was granted by the user.

### Initializers

- [init(rawValue:)](cmauthorizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining Altitude Availability

- [isAbsoluteAltitudeAvailable()](cmaltimeter/isabsolutealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device reports changes in the absolute altitude.
- [isRelativeAltitudeAvailable()](cmaltimeter/isrelativealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device supports generating data for relative altitude changes.
- [authorizationStatus()](cmaltimeter/authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve altimeter data.

# CMAuthorizationStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 4.0+

The authorization status for motion-related features.

## Declaration

```objectivec
enum CMAuthorizationStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [CMAuthorizationStatusNotDetermined](cmauthorizationstatus/notdetermined.md): The status has not yet been determined.
- [CMAuthorizationStatusRestricted](cmauthorizationstatus/restricted.md): Access is denied due to system-wide restrictions.
- [CMAuthorizationStatusDenied](cmauthorizationstatus/denied.md): Access was denied by the user.
- [CMAuthorizationStatusAuthorized](cmauthorizationstatus/authorized.md): Access was granted by the user.

## See Also

### Determining Altitude Availability

- [isAbsoluteAltitudeAvailable](cmaltimeter/isabsolutealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device reports changes in the absolute altitude.
- [isRelativeAltitudeAvailable](cmaltimeter/isrelativealtitudeavailable%28%29.md): Returns a Boolean value indicating whether the current device supports generating data for relative altitude changes.
- [authorizationStatus](cmaltimeter/authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to retrieve altimeter data.
