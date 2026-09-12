> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phauthorizationstatus/limited](https://developer.apple.com/documentation/photos/phauthorizationstatus/limited)

# PHAuthorizationStatus.limited (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The user authorized this app for limited photo library access.

## Declaration

```swift
case limited
```

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

<a id="Discussion"></a>

## Discussion

Use [presentLimitedLibraryPicker(from:)](../phphotolibrary/presentlimitedlibrarypicker%28from_%29.md) or [presentLimitedLibraryPicker(from:completionHandler:)](../phphotolibrary/presentlimitedlibrarypicker%28from_completionhandler_%29.md) to manually present the limited library picker.

> **Important**

>  Add the `PHPhotoLibraryPreventAutomaticLimitedAccessAlert` key with a Boolean value of `true` to your app’s `Info.plist` file to prevent the system from automatically presenting the limited library selection prompt.

## See Also

### Status Types

- [PHAuthorizationStatus.notDetermined](notdetermined.md): The user hasn’t set the app’s authorization status.
- [PHAuthorizationStatus.restricted](restricted.md): The app isn’t authorized to access the photo library, and the user can’t grant such permission.
- [PHAuthorizationStatus.denied](denied.md): The user explicitly denied this app access to the photo library.
- [PHAuthorizationStatus.authorized](authorized.md): The user explicitly granted this app access to the photo library.

# PHAuthorizationStatusLimited (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The user authorized this app for limited photo library access.

## Declaration

```objectivec
PHAuthorizationStatusLimited
```

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

<a id="Discussion"></a>

## Discussion

Use [presentLimitedLibraryPickerFromViewController:](../phphotolibrary/presentlimitedlibrarypicker%28from_%29.md) or [presentLimitedLibraryPickerFromViewController:completionHandler:](../phphotolibrary/presentlimitedlibrarypicker%28from_completionhandler_%29.md) to manually present the limited library picker.

> **Important**

>  Add the `PHPhotoLibraryPreventAutomaticLimitedAccessAlert` key with a Boolean value of `true` to your app’s `Info.plist` file to prevent the system from automatically presenting the limited library selection prompt.

## See Also

### Status Types

- [PHAuthorizationStatusNotDetermined](notdetermined.md): The user hasn’t set the app’s authorization status.
- [PHAuthorizationStatusRestricted](restricted.md): The app isn’t authorized to access the photo library, and the user can’t grant such permission.
- [PHAuthorizationStatusDenied](denied.md): The user explicitly denied this app access to the photo library.
- [PHAuthorizationStatusAuthorized](authorized.md): The user explicitly granted this app access to the photo library.
