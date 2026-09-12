> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudserviceauthorizationstatus/restricted](https://developer.apple.com/documentation/storekit/skcloudserviceauthorizationstatus/restricted)

# SKCloudServiceAuthorizationStatus.restricted (Swift)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Access to the music library is restricted in a way that the user cannot change, so your app should not prompt for authorization. An example of this situation is if the device is in an education mode.

> Use MusicAuthorization.Status from MusicKit.

## Declaration

```swift
case restricted
```

## See Also

### Constants

- [SKCloudServiceAuthorizationStatus.notDetermined](notdetermined.md): Deprecated. The authorization type cannot be determined.
- [SKCloudServiceAuthorizationStatus.denied](denied.md): Deprecated. The user does not authorize any access to their music library.
- [SKCloudServiceAuthorizationStatus.authorized](authorized.md): Deprecated. The user authorizes playback of Apple Music tracks and the addition of tracks to their music library.

# SKCloudServiceAuthorizationStatusRestricted (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Access to the music library is restricted in a way that the user cannot change, so your app should not prompt for authorization. An example of this situation is if the device is in an education mode.

> Use MusicAuthorization.Status from MusicKit.

## Declaration

```objectivec
SKCloudServiceAuthorizationStatusRestricted
```

## See Also

### Constants

- [SKCloudServiceAuthorizationStatusNotDetermined](notdetermined.md): Deprecated. The authorization type cannot be determined.
- [SKCloudServiceAuthorizationStatusDenied](denied.md): Deprecated. The user does not authorize any access to their music library.
- [SKCloudServiceAuthorizationStatusAuthorized](authorized.md): Deprecated. The user authorizes playback of Apple Music tracks and the addition of tracks to their music library.
