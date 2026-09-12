> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/authorizationstatus(for:)](https://developer.apple.com/documentation/photos/phphotolibrary/authorizationstatus(for:))

# authorizationStatus(for:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the app’s authorization to access the user’s photo library for the specified access level.

## Declaration

```swift
class func authorizationStatus(for accessLevel: PHAccessLevel) -> PHAuthorizationStatus
```

## Parameters

- `accessLevel`: The access level for which to determine the app’s authorization status.

<a id="return-value"></a>

## Return Value

The app’s authorization status.

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

<a id="Discussion"></a>

## Discussion

For more information about accessing the user’s Photos library, see [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md).

## See Also

### Verifying Authorization

- [requestAuthorization(for:handler:)](requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAccessLevel](../phaccesslevel.md): The app’s level of access to the user’s photo library.
- [PHAuthorizationStatus](../phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [authorizationStatus()](authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
- [requestAuthorization(\_:)](requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.

# authorizationStatusForAccessLevel: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the app’s authorization to access the user’s photo library for the specified access level.

## Declaration

```objectivec
+ (PHAuthorizationStatus) authorizationStatusForAccessLevel:(PHAccessLevel) accessLevel;
```

## Parameters

- `accessLevel`: The access level for which to determine the app’s authorization status.

<a id="return-value"></a>

## Return Value

The app’s authorization status.

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

<a id="Discussion"></a>

## Discussion

For more information about accessing the user’s Photos library, see [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md).

## See Also

### Verifying Authorization

- [requestAuthorizationForAccessLevel:handler:](requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAccessLevel](../phaccesslevel.md): The app’s level of access to the user’s photo library.
- [PHAuthorizationStatus](../phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [authorizationStatus](authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
- [requestAuthorization:](requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.
