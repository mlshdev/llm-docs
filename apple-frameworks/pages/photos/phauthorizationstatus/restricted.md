> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phauthorizationstatus/restricted](https://developer.apple.com/documentation/photos/phauthorizationstatus/restricted)

# PHAuthorizationStatus.restricted (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The app isn’t authorized to access the photo library, and the user can’t grant such permission.

## Declaration

```swift
case restricted
```

<a id="Discussion"></a>

## Discussion

Parental controls or institutional configuration profiles can restrict the user’s ability to grant photo library access to an app.

## See Also

### Status Types

- [PHAuthorizationStatus.notDetermined](notdetermined.md): The user hasn’t set the app’s authorization status.
- [PHAuthorizationStatus.denied](denied.md): The user explicitly denied this app access to the photo library.
- [PHAuthorizationStatus.authorized](authorized.md): The user explicitly granted this app access to the photo library.
- [PHAuthorizationStatus.limited](limited.md): The user authorized this app for limited photo library access.

# PHAuthorizationStatusRestricted (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The app isn’t authorized to access the photo library, and the user can’t grant such permission.

## Declaration

```objectivec
PHAuthorizationStatusRestricted
```

<a id="Discussion"></a>

## Discussion

Parental controls or institutional configuration profiles can restrict the user’s ability to grant photo library access to an app.

## See Also

### Status Types

- [PHAuthorizationStatusNotDetermined](notdetermined.md): The user hasn’t set the app’s authorization status.
- [PHAuthorizationStatusDenied](denied.md): The user explicitly denied this app access to the photo library.
- [PHAuthorizationStatusAuthorized](authorized.md): The user explicitly granted this app access to the photo library.
- [PHAuthorizationStatusLimited](limited.md): The user authorized this app for limited photo library access.
