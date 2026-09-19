> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phphotolibrary/authorizationstatus()

# authorizationStatus() (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.13+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Returns information about your app’s authorization to access the user’s photo library.

> Use [authorizationStatus(for:)](authorizationstatus%28for_%29.md) instead.

## Declaration

```swift
class func authorizationStatus() -> PHAuthorizationStatus
```

<a id="return-value"></a>

## Return Value

The current authorization status.

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

## See Also

### Verifying Authorization

- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [requestAuthorization(for:handler:)](requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAccessLevel](../phaccesslevel.md): The app’s level of access to the user’s photo library.
- [PHAuthorizationStatus](../phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [requestAuthorization(\_:)](requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.

# authorizationStatus (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.13+ (deprecated in 27.2) · tvOS 10.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Returns information about your app’s authorization to access the user’s photo library.

> Use [authorizationStatusForAccessLevel:](authorizationstatus%28for_%29.md) instead.

## Declaration

```objectivec
+ (PHAuthorizationStatus) authorizationStatus;
```

<a id="return-value"></a>

## Return Value

The current authorization status.

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

## See Also

### Verifying Authorization

- [authorizationStatusForAccessLevel:](authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [requestAuthorizationForAccessLevel:handler:](requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAccessLevel](../phaccesslevel.md): The app’s level of access to the user’s photo library.
- [PHAuthorizationStatus](../phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [requestAuthorization:](requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.
