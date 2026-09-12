> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvusermanager/useridentifiersforcurrentprofile](https://developer.apple.com/documentation/tvservices/tvusermanager/useridentifiersforcurrentprofile)

# userIdentifiersForCurrentProfile (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

An array of system user identifiers that you associated with the current app-specific profile.

> Manually mapping profiles is deprecated. To opt-in to the system’s automatic user-data management, add the [User Management Entitlement](../../bundleresources/entitlements/com.apple.developer.user-management.md) to your target, with a value of `runs-as-current-user-with-user-independent-keychain`. For more information, see [Mapping Apple TV users to app profiles](../mapping-apple-tv-users-to-app-profiles.md).

## Declaration

```swift
var userIdentifiersForCurrentProfile: [TVUserIdentifier] { get set }
```

<a id="Discussion"></a>

## Discussion

If your app remembers which app-specific profile each Apple TV user prefers, use this property to provide that information to the system. Fill this property with zero or more user identifiers that you previously retrieved from the [currentUserIdentifier](currentuseridentifier.md) property. Doing so creates a mapping between your app profiles and the Apple TV accounts that prefer them. The system uses the information in this property to provide better information in user dialogs and doesn’t change the property’s value.

Update this property whenever the user selects a different app profile. The system doesn’t change the value in this property, so it contains the last value that you assigned to it since app launch. However, the property supports key-value observing if you want to track the changes that you make from other parts of your app.

## See Also

### Deprecated symbols

- [currentUserIdentifier](currentuseridentifier.md): Deprecated. A unique identifier representing the currently active Apple TV user.
- [currentUserIdentifierDidChangeNotification](currentuseridentifierdidchangenotification.md): Deprecated. The notification the system sends when a different user becomes current.
- [presentProfilePreferencePanel(currentSettings:availableProfiles:completion:)](presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [shouldStorePreferenceForCurrentUser(to:completion:)](shouldstorepreferenceforcurrentuser%28to_completion_%29.md): Deprecated. Prompts the user to save the specified profile as the preferred profile for the current user.
- [TVAppProfileDescriptor](../tvappprofiledescriptor.md): Deprecated. A model object that you use to represent an app-specific profile.
- [TVUserIdentifier](../tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.

# userIdentifiersForCurrentProfile (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

An array of system user identifiers that you associated with the current app-specific profile.

> Manually mapping profiles is deprecated. To opt-in to the system’s automatic user-data management, add the [User Management Entitlement](../../bundleresources/entitlements/com.apple.developer.user-management.md) to your target, with a value of `runs-as-current-user-with-user-independent-keychain`. For more information, see [Mapping Apple TV users to app profiles](../mapping-apple-tv-users-to-app-profiles.md).

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * userIdentifiersForCurrentProfile;
```

<a id="Discussion"></a>

## Discussion

If your app remembers which app-specific profile each Apple TV user prefers, use this property to provide that information to the system. Fill this property with zero or more user identifiers that you previously retrieved from the [currentUserIdentifier](currentuseridentifier.md) property. Doing so creates a mapping between your app profiles and the Apple TV accounts that prefer them. The system uses the information in this property to provide better information in user dialogs and doesn’t change the property’s value.

Update this property whenever the user selects a different app profile. The system doesn’t change the value in this property, so it contains the last value that you assigned to it since app launch. However, the property supports key-value observing if you want to track the changes that you make from other parts of your app.

## See Also

### Deprecated symbols

- [currentUserIdentifier](currentuseridentifier.md): Deprecated. A unique identifier representing the currently active Apple TV user.
- [TVUserManagerCurrentUserIdentifierDidChangeNotification](currentuseridentifierdidchangenotification.md): Deprecated. The notification the system sends when a different user becomes current.
- [presentProfilePreferencePanelWithCurrentSettings:availableProfiles:completion:](presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [shouldStorePreferenceForCurrentUserToProfile:completion:](shouldstorepreferenceforcurrentuser%28to_completion_%29.md): Deprecated. Prompts the user to save the specified profile as the preferred profile for the current user.
- [TVAppProfileDescriptor](../tvappprofiledescriptor.md): Deprecated. A model object that you use to represent an app-specific profile.
- [TVUserIdentifier](../tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
