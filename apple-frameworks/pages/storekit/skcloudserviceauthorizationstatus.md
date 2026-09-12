> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudserviceauthorizationstatus](https://developer.apple.com/documentation/storekit/skcloudserviceauthorizationstatus)

# SKCloudServiceAuthorizationStatus (Swift)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Constants that indicate the type of authorization the customer has for accessing the Music library.

> Use MusicAuthorization.Status from MusicKit.

## Declaration

```swift
enum SKCloudServiceAuthorizationStatus
```

## Topics

### Constants

- [SKCloudServiceAuthorizationStatus.notDetermined](skcloudserviceauthorizationstatus/notdetermined.md): Deprecated. The authorization type cannot be determined.
- [SKCloudServiceAuthorizationStatus.denied](skcloudserviceauthorizationstatus/denied.md): Deprecated. The user does not authorize any access to their music library.
- [SKCloudServiceAuthorizationStatus.restricted](skcloudserviceauthorizationstatus/restricted.md): Deprecated. Access to the music library is restricted in a way that the user cannot change, so your app should not prompt for authorization. An example of this situation is if the device is in an education mode.
- [SKCloudServiceAuthorizationStatus.authorized](skcloudserviceauthorizationstatus/authorized.md): Deprecated. The user authorizes playback of Apple Music tracks and the addition of tracks to their music library.

### Initializers

- [init(rawValue:)](skcloudserviceauthorizationstatus/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting authorization to access the Music library

- [Requesting Access to Apple Music Library](requesting-access-to-apple-music-library.md): Prompt the customer to authorize access to Apple Music library.
- [authorizationStatus()](skcloudservicecontroller/authorizationstatus%28%29.md): Deprecated. Returns the type of authorization the customer has for accessing the Music library on the device.
- [requestAuthorization(\_:)](skcloudservicecontroller/requestauthorization%28__%29.md): Deprecated. Asks the customer for permission to access the Music library on the device.

# SKCloudServiceAuthorizationStatus (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Constants that indicate the type of authorization the customer has for accessing the Music library.

> Use MusicAuthorization.Status from MusicKit.

## Declaration

```objectivec
enum SKCloudServiceAuthorizationStatus : NSInteger;
```

## Topics

### Constants

- [SKCloudServiceAuthorizationStatusNotDetermined](skcloudserviceauthorizationstatus/notdetermined.md): Deprecated. The authorization type cannot be determined.
- [SKCloudServiceAuthorizationStatusDenied](skcloudserviceauthorizationstatus/denied.md): Deprecated. The user does not authorize any access to their music library.
- [SKCloudServiceAuthorizationStatusRestricted](skcloudserviceauthorizationstatus/restricted.md): Deprecated. Access to the music library is restricted in a way that the user cannot change, so your app should not prompt for authorization. An example of this situation is if the device is in an education mode.
- [SKCloudServiceAuthorizationStatusAuthorized](skcloudserviceauthorizationstatus/authorized.md): Deprecated. The user authorizes playback of Apple Music tracks and the addition of tracks to their music library.

## See Also

### Getting authorization to access the Music library

- [Requesting Access to Apple Music Library](requesting-access-to-apple-music-library.md): Prompt the customer to authorize access to Apple Music library.
- [authorizationStatus](skcloudservicecontroller/authorizationstatus%28%29.md): Deprecated. Returns the type of authorization the customer has for accessing the Music library on the device.
- [requestAuthorization:](skcloudservicecontroller/requestauthorization%28__%29.md): Deprecated. Asks the customer for permission to access the Music library on the device.
