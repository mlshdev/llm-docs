> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvappprofiledescriptor](https://developer.apple.com/documentation/tvservices/tvappprofiledescriptor)

# TVAppProfileDescriptor (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

A model object that you use to represent an app-specific profile.

> Manually mapping profiles is deprecated. To opt-in to the system’s automatic user-data management, add the [User Management Entitlement](../bundleresources/entitlements/com.apple.developer.user-management.md) to your target, with a value of `runs-as-current-user-with-user-independent-keychain`. For more information, see [Mapping Apple TV users to app profiles](mapping-apple-tv-users-to-app-profiles.md).

## Declaration

```swift
class TVAppProfileDescriptor
```

<a id="overview"></a>

## Overview

A [TVAppProfileDescriptor](tvappprofiledescriptor.md) object represents a single user profile in your app. You create app profile descriptor objects yourself and manage them in your app’s data structures. The default object contains only the user-visible name for the profile, which must be a nonempty string. You can also subclass to add app-specific properties. For example, you might add an app-specific identifier for the profile. You might also store the identifiers for all Apple TV users that are configured to use this profile.

For more information about mapping your app profiles to Apple TV accounts, see [TVUserManager](tvusermanager.md).

## Topics

### Creating a Profile Descriptor

- [init(name:)](tvappprofiledescriptor/init%28name_%29.md): Deprecated. Creates a new app profile descriptor object with the specified name.

### Getting the Profile Name

- [name](tvappprofiledescriptor/name.md): Deprecated. The user-visible label associated with the app profile.

### Initializers

- [init(coder:)](tvappprofiledescriptor/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Deprecated symbols

- [currentUserIdentifier](tvusermanager/currentuseridentifier.md): Deprecated. A unique identifier representing the currently active Apple TV user.
- [currentUserIdentifierDidChangeNotification](tvusermanager/currentuseridentifierdidchangenotification.md): Deprecated. The notification the system sends when a different user becomes current.
- [presentProfilePreferencePanel(currentSettings:availableProfiles:completion:)](tvusermanager/presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [shouldStorePreferenceForCurrentUser(to:completion:)](tvusermanager/shouldstorepreferenceforcurrentuser%28to_completion_%29.md): Deprecated. Prompts the user to save the specified profile as the preferred profile for the current user.
- [TVUserIdentifier](tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
- [userIdentifiersForCurrentProfile](tvusermanager/useridentifiersforcurrentprofile.md): Deprecated. An array of system user identifiers that you associated with the current app-specific profile.

# TVAppProfileDescriptor (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

A model object that you use to represent an app-specific profile.

> Manually mapping profiles is deprecated. To opt-in to the system’s automatic user-data management, add the [User Management Entitlement](../bundleresources/entitlements/com.apple.developer.user-management.md) to your target, with a value of `runs-as-current-user-with-user-independent-keychain`. For more information, see [Mapping Apple TV users to app profiles](mapping-apple-tv-users-to-app-profiles.md).

## Declaration

```objectivec
@interface TVAppProfileDescriptor : NSObject
```

<a id="overview"></a>

## Overview

A [TVAppProfileDescriptor](tvappprofiledescriptor.md) object represents a single user profile in your app. You create app profile descriptor objects yourself and manage them in your app’s data structures. The default object contains only the user-visible name for the profile, which must be a nonempty string. You can also subclass to add app-specific properties. For example, you might add an app-specific identifier for the profile. You might also store the identifiers for all Apple TV users that are configured to use this profile.

For more information about mapping your app profiles to Apple TV accounts, see [TVUserManager](tvusermanager.md).

## Topics

### Creating a Profile Descriptor

- [initWithName:](tvappprofiledescriptor/init%28name_%29.md): Deprecated. Creates a new app profile descriptor object with the specified name.

### Getting the Profile Name

- [name](tvappprofiledescriptor/name.md): Deprecated. The user-visible label associated with the app profile.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Deprecated symbols

- [currentUserIdentifier](tvusermanager/currentuseridentifier.md): Deprecated. A unique identifier representing the currently active Apple TV user.
- [TVUserManagerCurrentUserIdentifierDidChangeNotification](tvusermanager/currentuseridentifierdidchangenotification.md): Deprecated. The notification the system sends when a different user becomes current.
- [presentProfilePreferencePanelWithCurrentSettings:availableProfiles:completion:](tvusermanager/presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [shouldStorePreferenceForCurrentUserToProfile:completion:](tvusermanager/shouldstorepreferenceforcurrentuser%28to_completion_%29.md): Deprecated. Prompts the user to save the specified profile as the preferred profile for the current user.
- [TVUserIdentifier](tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
- [userIdentifiersForCurrentProfile](tvusermanager/useridentifiersforcurrentprofile.md): Deprecated. An array of system user identifiers that you associated with the current app-specific profile.
