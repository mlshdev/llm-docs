> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phauthorizationstatus/notdetermined](https://developer.apple.com/documentation/photos/phauthorizationstatus/notdetermined)

# PHAuthorizationStatus.notDetermined (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The user hasn’t set the app’s authorization status.

## Declaration

```swift
case notDetermined
```

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

<a id="Discussion"></a>

## Discussion

The framework automatically prompts for user authorization when you attempt to fetch assets, asset collections, or collection lists. Alternatively, you may call the [requestAuthorization(for:handler:)](../phphotolibrary/requestauthorization%28for_handler_%29.md) method to prompt the user for authorization at a time of your choosing.

## See Also

### Status Types

- [PHAuthorizationStatus.restricted](restricted.md): The app isn’t authorized to access the photo library, and the user can’t grant such permission.
- [PHAuthorizationStatus.denied](denied.md): The user explicitly denied this app access to the photo library.
- [PHAuthorizationStatus.authorized](authorized.md): The user explicitly granted this app access to the photo library.
- [PHAuthorizationStatus.limited](limited.md): The user authorized this app for limited photo library access.

# PHAuthorizationStatusNotDetermined (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The user hasn’t set the app’s authorization status.

## Declaration

```objectivec
PHAuthorizationStatusNotDetermined
```

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

<a id="Discussion"></a>

## Discussion

The framework automatically prompts for user authorization when you attempt to fetch assets, asset collections, or collection lists. Alternatively, you may call the [requestAuthorizationForAccessLevel:handler:](../phphotolibrary/requestauthorization%28for_handler_%29.md) method to prompt the user for authorization at a time of your choosing.

## See Also

### Status Types

- [PHAuthorizationStatusRestricted](restricted.md): The app isn’t authorized to access the photo library, and the user can’t grant such permission.
- [PHAuthorizationStatusDenied](denied.md): The user explicitly denied this app access to the photo library.
- [PHAuthorizationStatusAuthorized](authorized.md): The user explicitly granted this app access to the photo library.
- [PHAuthorizationStatusLimited](limited.md): The user authorized this app for limited photo library access.
