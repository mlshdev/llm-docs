> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudserviceauthorizationstatus/denied](https://developer.apple.com/documentation/storekit/skcloudserviceauthorizationstatus/denied)

# SKCloudServiceAuthorizationStatus.denied (Swift)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

The user does not authorize any access to their music library.

> Use MusicAuthorization.Status from MusicKit.

## Declaration

```swift
case denied
```

## See Also

### Constants

- [SKCloudServiceAuthorizationStatus.notDetermined](notdetermined.md): Deprecated. The authorization type cannot be determined.
- [SKCloudServiceAuthorizationStatus.restricted](restricted.md): Deprecated. Access to the music library is restricted in a way that the user cannot change, so your app should not prompt for authorization. An example of this situation is if the device is in an education mode.
- [SKCloudServiceAuthorizationStatus.authorized](authorized.md): Deprecated. The user authorizes playback of Apple Music tracks and the addition of tracks to their music library.

# SKCloudServiceAuthorizationStatusDenied (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

The user does not authorize any access to their music library.

> Use MusicAuthorization.Status from MusicKit.

## Declaration

```objectivec
SKCloudServiceAuthorizationStatusDenied
```

## See Also

### Constants

- [SKCloudServiceAuthorizationStatusNotDetermined](notdetermined.md): Deprecated. The authorization type cannot be determined.
- [SKCloudServiceAuthorizationStatusRestricted](restricted.md): Deprecated. Access to the music library is restricted in a way that the user cannot change, so your app should not prompt for authorization. An example of this situation is if the device is in an education mode.
- [SKCloudServiceAuthorizationStatusAuthorized](authorized.md): Deprecated. The user authorizes playback of Apple Music tracks and the addition of tracks to their music library.
