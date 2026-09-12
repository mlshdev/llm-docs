> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvusermanager/currentuseridentifier](https://developer.apple.com/documentation/tvservices/tvusermanager/currentuseridentifier)

# currentUserIdentifier (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

A unique identifier representing the currently active Apple TV user.

> Manually mapping profiles is deprecated. To opt-in to the system’s automatic user-data management, add the [User Management Entitlement](../../bundleresources/entitlements/com.apple.developer.user-management.md) to your target, with a value of `runs-as-current-user-with-user-independent-keychain`. For more information, see [Mapping Apple TV users to app profiles](../mapping-apple-tv-users-to-app-profiles.md).

## Declaration

```swift
var currentUserIdentifier: TVUserIdentifier? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to identify which Apple TV user is currently active. On Apple TV, users may provide credentials for multiple Apple accounts and switch quickly between them. This property uniquely identifies the user for the active account. You might use this information to select an appropriate user profile for your app.

The string in this property is randomly generated, and isn’t the same as the user’s Apple ID. Don’t display the string to your users. All Apple TVs on the user’s HomeKit network return the same string for the same account.

You can track changes to this property using key-value observing. You may access this property from an app extension.

## See Also

### Deprecated symbols

- [currentUserIdentifierDidChangeNotification](currentuseridentifierdidchangenotification.md): Deprecated. The notification the system sends when a different user becomes current.
- [presentProfilePreferencePanel(currentSettings:availableProfiles:completion:)](presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [shouldStorePreferenceForCurrentUser(to:completion:)](shouldstorepreferenceforcurrentuser%28to_completion_%29.md): Deprecated. Prompts the user to save the specified profile as the preferred profile for the current user.
- [TVAppProfileDescriptor](../tvappprofiledescriptor.md): Deprecated. A model object that you use to represent an app-specific profile.
- [TVUserIdentifier](../tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
- [userIdentifiersForCurrentProfile](useridentifiersforcurrentprofile.md): Deprecated. An array of system user identifiers that you associated with the current app-specific profile.

# currentUserIdentifier (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

A unique identifier representing the currently active Apple TV user.

> Manually mapping profiles is deprecated. To opt-in to the system’s automatic user-data management, add the [User Management Entitlement](../../bundleresources/entitlements/com.apple.developer.user-management.md) to your target, with a value of `runs-as-current-user-with-user-independent-keychain`. For more information, see [Mapping Apple TV users to app profiles](../mapping-apple-tv-users-to-app-profiles.md).

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) TVUserIdentifier currentUserIdentifier;
```

<a id="Discussion"></a>

## Discussion

Use this property to identify which Apple TV user is currently active. On Apple TV, users may provide credentials for multiple Apple accounts and switch quickly between them. This property uniquely identifies the user for the active account. You might use this information to select an appropriate user profile for your app.

The string in this property is randomly generated, and isn’t the same as the user’s Apple ID. Don’t display the string to your users. All Apple TVs on the user’s HomeKit network return the same string for the same account.

You can track changes to this property using key-value observing. You may access this property from an app extension.

## See Also

### Deprecated symbols

- [TVUserManagerCurrentUserIdentifierDidChangeNotification](currentuseridentifierdidchangenotification.md): Deprecated. The notification the system sends when a different user becomes current.
- [presentProfilePreferencePanelWithCurrentSettings:availableProfiles:completion:](presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [shouldStorePreferenceForCurrentUserToProfile:completion:](shouldstorepreferenceforcurrentuser%28to_completion_%29.md): Deprecated. Prompts the user to save the specified profile as the preferred profile for the current user.
- [TVAppProfileDescriptor](../tvappprofiledescriptor.md): Deprecated. A model object that you use to represent an app-specific profile.
- [TVUserIdentifier](../tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
- [userIdentifiersForCurrentProfile](useridentifiersforcurrentprofile.md): Deprecated. An array of system user identifiers that you associated with the current app-specific profile.
