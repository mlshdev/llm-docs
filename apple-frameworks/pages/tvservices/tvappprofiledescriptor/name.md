> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvappprofiledescriptor/name](https://developer.apple.com/documentation/tvservices/tvappprofiledescriptor/name)

# name (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

The user-visible label associated with the app profile.

> User Management capability get-current-user is no longer supported. Please use runs-as-current-user-with-user-independent-keychain and kSecUseUserIndependentKeychain for sharing keychain items across users.

## Declaration

```swift
var name: String { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to store the user-readable name for the user profile. When prompting the user to select a preferred profile, the [TVUserManager](../tvusermanager.md) displays the names from your [TVAppProfileDescriptor](../tvappprofiledescriptor.md) objects in the selection dialog.

You must specify a nonempty string in this property.

# name (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

The user-visible label associated with the app profile.

> User Management capability get-current-user is no longer supported. Please use runs-as-current-user-with-user-independent-keychain and kSecUseUserIndependentKeychain for sharing keychain items across users.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Use this property to store the user-readable name for the user profile. When prompting the user to select a preferred profile, the [TVUserManager](../tvusermanager.md) displays the names from your [TVAppProfileDescriptor](../tvappprofiledescriptor.md) objects in the selection dialog.

You must specify a nonempty string in this property.
