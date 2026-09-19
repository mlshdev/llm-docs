> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phphotolibrary/requestauthorization(_:)

# requestAuthorization(\_:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.13+ (deprecated in 27.2) · tvOS 10.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Requests the user’s permission, if needed, to access the photo library.

> Use [requestAuthorization(for:handler:)](requestauthorization%28for_handler_%29.md) instead.

## Declaration

```swift
class func requestAuthorization(_ handler: @escaping (PHAuthorizationStatus) -> Void)
```

## Parameters

- `handler`: A block Photos calls upon determining your app’s authorization to access the photo library.

  The block takes a single parameter:

  - **status**: The current authorization status.

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)
- [Fetching Assets](../../photokit/fetching-assets.md)

## See Also

### Verifying Authorization

- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [requestAuthorization(for:handler:)](requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAccessLevel](../phaccesslevel.md): The app’s level of access to the user’s photo library.
- [PHAuthorizationStatus](../phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [authorizationStatus()](authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.

# requestAuthorization: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.13+ (deprecated in 27.2) · tvOS 10.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Requests the user’s permission, if needed, to access the photo library.

> Use [requestAuthorizationForAccessLevel:handler:](requestauthorization%28for_handler_%29.md) instead.

## Declaration

```objectivec
+ (void) requestAuthorization:(void (^)(PHAuthorizationStatus status)) handler;
```

## Parameters

- `handler`: A block Photos calls upon determining your app’s authorization to access the photo library.

  The block takes a single parameter:

  - **status**: The current authorization status.

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)
- [Fetching Assets](../../photokit/fetching-assets.md)

## See Also

### Verifying Authorization

- [authorizationStatusForAccessLevel:](authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [requestAuthorizationForAccessLevel:handler:](requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAccessLevel](../phaccesslevel.md): The app’s level of access to the user’s photo library.
- [PHAuthorizationStatus](../phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [authorizationStatus](authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
