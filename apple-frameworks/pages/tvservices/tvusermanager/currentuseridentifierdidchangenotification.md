> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvusermanager/currentuseridentifierdidchangenotification](https://developer.apple.com/documentation/tvservices/tvusermanager/currentuseridentifierdidchangenotification)

# currentUserIdentifierDidChangeNotification (Swift)

**Framework:** TV Services  
**Kind:** Type Property  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

The notification the system sends when a different user becomes current.

> Manually mapping profiles is deprecated. To opt-in to the system’s automatic user-data management, add the [User Management Entitlement](../../bundleresources/entitlements/com.apple.developer.user-management.md) to your target, with a value of `runs-as-current-user-with-user-independent-keychain`. For more information, see [Mapping Apple TV users to app profiles](../mapping-apple-tv-users-to-app-profiles.md).

## Declaration

```swift
class let currentUserIdentifierDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The object of the notification is `nil`. The notification doesn’t add any keys to the [userInfo](../../foundation/nsnotification/userinfo.md) dictionary.

## See Also

### Deprecated symbols

- [currentUserIdentifier](currentuseridentifier.md): Deprecated. A unique identifier representing the currently active Apple TV user.
- [presentProfilePreferencePanel(currentSettings:availableProfiles:completion:)](presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [shouldStorePreferenceForCurrentUser(to:completion:)](shouldstorepreferenceforcurrentuser%28to_completion_%29.md): Deprecated. Prompts the user to save the specified profile as the preferred profile for the current user.
- [TVAppProfileDescriptor](../tvappprofiledescriptor.md): Deprecated. A model object that you use to represent an app-specific profile.
- [TVUserIdentifier](../tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
- [userIdentifiersForCurrentProfile](useridentifiersforcurrentprofile.md): Deprecated. An array of system user identifiers that you associated with the current app-specific profile.

# TVUserManagerCurrentUserIdentifierDidChangeNotification (Objective-C)

**Framework:** TV Services  
**Kind:** Global Variable  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

The notification the system sends when a different user becomes current.

> Manually mapping profiles is deprecated. To opt-in to the system’s automatic user-data management, add the [User Management Entitlement](../../bundleresources/entitlements/com.apple.developer.user-management.md) to your target, with a value of `runs-as-current-user-with-user-independent-keychain`. For more information, see [Mapping Apple TV users to app profiles](../mapping-apple-tv-users-to-app-profiles.md).

## Declaration

```objectivec
extern NSNotificationName const TVUserManagerCurrentUserIdentifierDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The object of the notification is `nil`. The notification doesn’t add any keys to the [userInfo](../../foundation/nsnotification/userinfo.md) dictionary.

## See Also

### Deprecated symbols

- [currentUserIdentifier](currentuseridentifier.md): Deprecated. A unique identifier representing the currently active Apple TV user.
- [presentProfilePreferencePanelWithCurrentSettings:availableProfiles:completion:](presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [shouldStorePreferenceForCurrentUserToProfile:completion:](shouldstorepreferenceforcurrentuser%28to_completion_%29.md): Deprecated. Prompts the user to save the specified profile as the preferred profile for the current user.
- [TVAppProfileDescriptor](../tvappprofiledescriptor.md): Deprecated. A model object that you use to represent an app-specific profile.
- [TVUserIdentifier](../tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
- [userIdentifiersForCurrentProfile](useridentifiersforcurrentprofile.md): Deprecated. An array of system user identifiers that you associated with the current app-specific profile.
