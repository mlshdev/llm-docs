> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvusermanager/shouldstorepreferenceforcurrentuser(to:completion:)](https://developer.apple.com/documentation/tvservices/tvusermanager/shouldstorepreferenceforcurrentuser(to:completion:))

# shouldStorePreferenceForCurrentUser(to:completion:) (Swift)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

Prompts the user to save the specified profile as the preferred profile for the current user.

> Manually mapping profiles is deprecated. To opt-in to the system’s automatic user-data management, add the [User Management Entitlement](../../bundleresources/entitlements/com.apple.developer.user-management.md) to your target, with a value of `runs-as-current-user-with-user-independent-keychain`. For more information, see [Mapping Apple TV users to app profiles](../mapping-apple-tv-users-to-app-profiles.md).

## Declaration

```swift
func shouldStorePreferenceForCurrentUser(to profile: TVAppProfileDescriptor, completion: @escaping @Sendable (Bool) -> Void)
```

```swift
func shouldStorePreferenceForCurrentUser(to profile: TVAppProfileDescriptor) async -> Bool
```

## Parameters

- `profile`: The profile to associate with the current user.
- `completion`: The completion handler to call with the results. This handler has no return value and takes the following parameter:

  - **shouldCreateMapping**: A Boolean value indicating whether your app should associate the specified profile with the current user. If this parameter is [true](https://developer.apple.com/documentation/swift/true), save the association in your app’s data structures.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func shouldStorePreferenceForCurrentUser(to profile: TVAppProfileDescriptor) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to confirm that the profile chosen by the user should become their new preferred profile. The method prompts the user to confirm the profile change and calls the completion handler with the results. Call this method only once for each user.

## See Also

### Deprecated symbols

- [currentUserIdentifier](currentuseridentifier.md): Deprecated. A unique identifier representing the currently active Apple TV user.
- [currentUserIdentifierDidChangeNotification](currentuseridentifierdidchangenotification.md): Deprecated. The notification the system sends when a different user becomes current.
- [presentProfilePreferencePanel(currentSettings:availableProfiles:completion:)](presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [TVAppProfileDescriptor](../tvappprofiledescriptor.md): Deprecated. A model object that you use to represent an app-specific profile.
- [TVUserIdentifier](../tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
- [userIdentifiersForCurrentProfile](useridentifiersforcurrentprofile.md): Deprecated. An array of system user identifiers that you associated with the current app-specific profile.

# shouldStorePreferenceForCurrentUserToProfile:completion: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

Prompts the user to save the specified profile as the preferred profile for the current user.

> Manually mapping profiles is deprecated. To opt-in to the system’s automatic user-data management, add the [User Management Entitlement](../../bundleresources/entitlements/com.apple.developer.user-management.md) to your target, with a value of `runs-as-current-user-with-user-independent-keychain`. For more information, see [Mapping Apple TV users to app profiles](../mapping-apple-tv-users-to-app-profiles.md).

## Declaration

```objectivec
- (void) shouldStorePreferenceForCurrentUserToProfile:(TVAppProfileDescriptor *) profile completion:(void (^)(BOOL shouldCreateMapping)) completion;
```

## Parameters

- `profile`: The profile to associate with the current user.
- `completion`: The completion handler to call with the results. This handler has no return value and takes the following parameter:

  - **shouldCreateMapping**: A Boolean value indicating whether your app should associate the specified profile with the current user. If this parameter is [true](https://developer.apple.com/documentation/swift/true), save the association in your app’s data structures.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func shouldStorePreferenceForCurrentUser(to profile: TVAppProfileDescriptor) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Use this method to confirm that the profile chosen by the user should become their new preferred profile. The method prompts the user to confirm the profile change and calls the completion handler with the results. Call this method only once for each user.

## See Also

### Deprecated symbols

- [currentUserIdentifier](currentuseridentifier.md): Deprecated. A unique identifier representing the currently active Apple TV user.
- [TVUserManagerCurrentUserIdentifierDidChangeNotification](currentuseridentifierdidchangenotification.md): Deprecated. The notification the system sends when a different user becomes current.
- [presentProfilePreferencePanelWithCurrentSettings:availableProfiles:completion:](presentprofilepreferencepanel%28currentsettings_availableprofiles_completion_%29.md): Deprecated. Presents a user-to-profile configuration panel, which lets the user specify their preferred profile.
- [TVAppProfileDescriptor](../tvappprofiledescriptor.md): Deprecated. A model object that you use to represent an app-specific profile.
- [TVUserIdentifier](../tvuseridentifier.md): Deprecated. A unique string for differentiating between accounts on Apple TV.
- [userIdentifiersForCurrentProfile](useridentifiersforcurrentprofile.md): Deprecated. An array of system user identifiers that you associated with the current app-specific profile.
