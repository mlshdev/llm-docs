> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicecontroller/requestauthorization(_:)](https://developer.apple.com/documentation/storekit/skcloudservicecontroller/requestauthorization(_:))

# requestAuthorization(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Asks the customer for permission to access the Music library on the device.

> Use MusicAuthorization.request() from MusicKit.

## Declaration

```swift
class func requestAuthorization(_ completionHandler: @escaping @Sendable (SKCloudServiceAuthorizationStatus) -> Void)
```

```swift
class func requestAuthorization() async -> SKCloudServiceAuthorizationStatus
```

## Parameters

- `completionHandler`: A block that is called when authorization is granted or denied by the user.

## Mentioned In

- [Requesting Access to Apple Music Library](../requesting-access-to-apple-music-library.md)
- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md)

<a id="Discussion"></a>

## Discussion

You can use this method to ask the user for permission to play Apple Music tracks or to add tracks to the music library.

## See Also

### Getting authorization to access the Music library

- [Requesting Access to Apple Music Library](../requesting-access-to-apple-music-library.md): Prompt the customer to authorize access to Apple Music library.
- [authorizationStatus()](authorizationstatus%28%29.md): Deprecated. Returns the type of authorization the customer has for accessing the Music library on the device.
- [SKCloudServiceAuthorizationStatus](../skcloudserviceauthorizationstatus.md): Deprecated. Constants that indicate the type of authorization the customer has for accessing the Music library.

# requestAuthorization: (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Asks the customer for permission to access the Music library on the device.

> Use MusicAuthorization.request() from MusicKit.

## Declaration

```objectivec
+ (void) requestAuthorization:(void (^)(SKCloudServiceAuthorizationStatus authorizationStatus)) completionHandler;
```

## Parameters

- `completionHandler`: A block that is called when authorization is granted or denied by the user.

## Mentioned In

- [Requesting Access to Apple Music Library](../requesting-access-to-apple-music-library.md)
- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md)

<a id="Discussion"></a>

## Discussion

You can use this method to ask the user for permission to play Apple Music tracks or to add tracks to the music library.

## See Also

### Getting authorization to access the Music library

- [Requesting Access to Apple Music Library](../requesting-access-to-apple-music-library.md): Prompt the customer to authorize access to Apple Music library.
- [authorizationStatus](authorizationstatus%28%29.md): Deprecated. Returns the type of authorization the customer has for accessing the Music library on the device.
- [SKCloudServiceAuthorizationStatus](../skcloudserviceauthorizationstatus.md): Deprecated. Constants that indicate the type of authorization the customer has for accessing the Music library.
