> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/requestauthorization(for:handler:)](https://developer.apple.com/documentation/photos/phphotolibrary/requestauthorization(for:handler:))

# requestAuthorization(for:handler:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Prompts the user to grant the app permission to access the photo library.

## Declaration

```swift
class func requestAuthorization(for accessLevel: PHAccessLevel, handler: @escaping @Sendable (PHAuthorizationStatus) -> Void)
```

```swift
class func requestAuthorization(for accessLevel: PHAccessLevel) async -> PHAuthorizationStatus
```

## Parameters

- `accessLevel`: The access level to request.
- `handler`: The callback the system invokes when it’s made a determination of the app’s status.

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)
- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="Discussion"></a>

## Discussion

For more information about accessing the user’s Photos library, see [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md).

## See Also

### Verifying Authorization

- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [PHAccessLevel](../phaccesslevel.md): The app’s level of access to the user’s photo library.
- [PHAuthorizationStatus](../phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [authorizationStatus()](authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
- [requestAuthorization(\_:)](requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.

# requestAuthorizationForAccessLevel:handler: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Prompts the user to grant the app permission to access the photo library.

## Declaration

```objectivec
+ (void) requestAuthorizationForAccessLevel:(PHAccessLevel) accessLevel handler:(void (^)(PHAuthorizationStatus status)) handler;
```

## Parameters

- `accessLevel`: The access level to request.
- `handler`: The callback the system invokes when it’s made a determination of the app’s status.

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)
- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="Discussion"></a>

## Discussion

For more information about accessing the user’s Photos library, see [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md).

## See Also

### Verifying Authorization

- [authorizationStatusForAccessLevel:](authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [PHAccessLevel](../phaccesslevel.md): The app’s level of access to the user’s photo library.
- [PHAuthorizationStatus](../phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [authorizationStatus](authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
- [requestAuthorization:](requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.
