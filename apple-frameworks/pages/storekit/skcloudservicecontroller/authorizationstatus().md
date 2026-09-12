> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicecontroller/authorizationstatus()](https://developer.apple.com/documentation/storekit/skcloudservicecontroller/authorizationstatus())

# authorizationStatus() (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Returns the type of authorization the customer has for accessing the Music library on the device.

> Use MusicAuthorization.currentStatus from MusicKit.

## Declaration

```swift
class func authorizationStatus() -> SKCloudServiceAuthorizationStatus
```

<a id="return-value"></a>

## Return Value

The type of authorization for music library access. See [SKCloudServiceAuthorizationStatus](../skcloudserviceauthorizationstatus.md) for a list of possible values.

## Mentioned In

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md)
- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md)
- [Requesting Access to Apple Music Library](../requesting-access-to-apple-music-library.md)

<a id="Discussion"></a>

## Discussion

Use the authorization status to determine in what ways you can access the user’s music library.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Getting authorization to access the Music library

- [Requesting Access to Apple Music Library](../requesting-access-to-apple-music-library.md): Prompt the customer to authorize access to Apple Music library.
- [requestAuthorization(\_:)](requestauthorization%28__%29.md): Deprecated. Asks the customer for permission to access the Music library on the device.
- [SKCloudServiceAuthorizationStatus](../skcloudserviceauthorizationstatus.md): Deprecated. Constants that indicate the type of authorization the customer has for accessing the Music library.

# authorizationStatus (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Returns the type of authorization the customer has for accessing the Music library on the device.

> Use MusicAuthorization.currentStatus from MusicKit.

## Declaration

```objectivec
+ (SKCloudServiceAuthorizationStatus) authorizationStatus;
```

<a id="return-value"></a>

## Return Value

The type of authorization for music library access. See [SKCloudServiceAuthorizationStatus](../skcloudserviceauthorizationstatus.md) for a list of possible values.

## Mentioned In

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md)
- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md)
- [Requesting Access to Apple Music Library](../requesting-access-to-apple-music-library.md)

<a id="Discussion"></a>

## Discussion

Use the authorization status to determine in what ways you can access the user’s music library.

## See Also

### Related Documentation

- [In-App Purchase Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html#//apple_ref/doc/uid/TP40008267)

### Getting authorization to access the Music library

- [Requesting Access to Apple Music Library](../requesting-access-to-apple-music-library.md): Prompt the customer to authorize access to Apple Music library.
- [requestAuthorization:](requestauthorization%28__%29.md): Deprecated. Asks the customer for permission to access the Music library on the device.
- [SKCloudServiceAuthorizationStatus](../skcloudserviceauthorizationstatus.md): Deprecated. Constants that indicate the type of authorization the customer has for accessing the Music library.
