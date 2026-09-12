> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvusermanager](https://developer.apple.com/documentation/tvservices/tvusermanager)

# TVUserManager (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

An object that indicates how to store preferences for multiple people on a shared device.

## Declaration

```swift
class TVUserManager
```

<a id="overview"></a>

## Overview

Some apps rely on profiles to maintain separate information for each person who uses a shared device, such as a video content app that retains which shows they watch. To avoid interrupting people with a profile picker each time they launch your app, you can save and retrieve the current user’s selection on a shared device.

> **Important**

>  To create a [TVUserManager](tvusermanager.md) object, add the [User Management Entitlement](../bundleresources/entitlements/com.apple.developer.user-management.md) capability to your app or app extension in Xcode, and select the Runs as Current User, Only When User-Independent Keychain is Available option. This enables the system to take care of separating each user’s data for your app.

To determine the current user’s profile, first check [shouldStorePreferencesForCurrentUser](tvusermanager/shouldstorepreferencesforcurrentuser.md). If that value is [false](https://developer.apple.com/documentation/swift/false), display the profile picker to determine which profile to use for the current session, but don’t save the selected profile. If the value is [true](https://developer.apple.com/documentation/swift/true), and there isn’t a saved profile in [UserDefaults](../foundation/userdefaults.md), display the profile picker and save the selected profile for future use. If the value is [true](https://developer.apple.com/documentation/swift/true) and there’s already a saved profile, skip the prompt and use the saved profile.

## Topics

### Retaining profile selection for the current Apple TV account

- [shouldStorePreferencesForCurrentUser](tvusermanager/shouldstorepreferencesforcurrentuser.md): A Boolean value that indicates whether your app needs to retain a selected profile.

### Deprecated symbols

- [currentUserIdentifier](tvusermanager/currentuseridentifier.md): Deprecated. A unique identifier representing the currently active Apple TV user.
- [currentUserIdentifierDidChangeNotification](tvusermanager/currentuseridentifierdidchangenotification.md): Deprecated. The notification the system sends when a different user becomes current.
- [presentProfilePreferencePanel(currentSettings:availableProfiles:completion:)](tvusermanager/presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [shouldStorePreferenceForCurrentUser(to:completion:)](tvusermanager/shouldstorepreferenceforcurrentuser%28to_completion_%29.md): Deprecated. Prompts the user to save the specified profile as the preferred profile for the current user.
- [TVAppProfileDescriptor](tvappprofiledescriptor.md): Deprecated. A model object that you use to represent an app-specific profile.
- [TVUserIdentifier](tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
- [userIdentifiersForCurrentProfile](tvusermanager/useridentifiersforcurrentprofile.md): Deprecated. An array of system user identifiers that you associated with the current app-specific profile.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Multiple users

- [Personalizing Your App for Each User on Apple TV](personalizing-your-app-for-each-user-on-apple-tv.md): Use account-specific storage to segregate data on a multiuser system.
- [Supporting Multiple Users in Your tvOS App](supporting-multiple-users-in-your-tvos-app.md): Store separate data for each user with the new Runs as Current User capability.
- [Mapping Apple TV users to app profiles](mapping-apple-tv-users-to-app-profiles.md): Adapt the content of your app for the current viewer by using an entitlement and simplifying sign-in flows.

# TVUserManager (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+

An object that indicates how to store preferences for multiple people on a shared device.

## Declaration

```objectivec
@interface TVUserManager : NSObject
```

<a id="overview"></a>

## Overview

Some apps rely on profiles to maintain separate information for each person who uses a shared device, such as a video content app that retains which shows they watch. To avoid interrupting people with a profile picker each time they launch your app, you can save and retrieve the current user’s selection on a shared device.

> **Important**

>  To create a [TVUserManager](tvusermanager.md) object, add the [User Management Entitlement](../bundleresources/entitlements/com.apple.developer.user-management.md) capability to your app or app extension in Xcode, and select the Runs as Current User, Only When User-Independent Keychain is Available option. This enables the system to take care of separating each user’s data for your app.

To determine the current user’s profile, first check [shouldStorePreferencesForCurrentUser](tvusermanager/shouldstorepreferencesforcurrentuser.md). If that value is [false](https://developer.apple.com/documentation/swift/false), display the profile picker to determine which profile to use for the current session, but don’t save the selected profile. If the value is [true](https://developer.apple.com/documentation/swift/true), and there isn’t a saved profile in [NSUserDefaults](../foundation/userdefaults.md), display the profile picker and save the selected profile for future use. If the value is [true](https://developer.apple.com/documentation/swift/true) and there’s already a saved profile, skip the prompt and use the saved profile.

## Topics

### Retaining profile selection for the current Apple TV account

- [shouldStorePreferencesForCurrentUser](tvusermanager/shouldstorepreferencesforcurrentuser.md): A Boolean value that indicates whether your app needs to retain a selected profile.

### Deprecated symbols

- [currentUserIdentifier](tvusermanager/currentuseridentifier.md): Deprecated. A unique identifier representing the currently active Apple TV user.
- [TVUserManagerCurrentUserIdentifierDidChangeNotification](tvusermanager/currentuseridentifierdidchangenotification.md): Deprecated. The notification the system sends when a different user becomes current.
- [presentProfilePreferencePanelWithCurrentSettings:availableProfiles:completion:](tvusermanager/presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [shouldStorePreferenceForCurrentUserToProfile:completion:](tvusermanager/shouldstorepreferenceforcurrentuser%28to_completion_%29.md): Deprecated. Prompts the user to save the specified profile as the preferred profile for the current user.
- [TVAppProfileDescriptor](tvappprofiledescriptor.md): Deprecated. A model object that you use to represent an app-specific profile.
- [TVUserIdentifier](tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
- [userIdentifiersForCurrentProfile](tvusermanager/useridentifiersforcurrentprofile.md): Deprecated. An array of system user identifiers that you associated with the current app-specific profile.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Multiple users

- [Personalizing Your App for Each User on Apple TV](personalizing-your-app-for-each-user-on-apple-tv.md): Use account-specific storage to segregate data on a multiuser system.
- [Supporting Multiple Users in Your tvOS App](supporting-multiple-users-in-your-tvos-app.md): Store separate data for each user with the new Runs as Current User capability.
- [Mapping Apple TV users to app profiles](mapping-apple-tv-users-to-app-profiles.md): Adapt the content of your app for the current viewer by using an entitlement and simplifying sign-in flows.
