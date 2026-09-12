> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvappprofiledescriptor/init(name:)](https://developer.apple.com/documentation/tvservices/tvappprofiledescriptor/init(name:))

# init(name:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

Creates a new app profile descriptor object with the specified name.

> User Management capability get-current-user is no longer supported. Please use runs-as-current-user-with-user-independent-keychain and kSecUseUserIndependentKeychain for sharing keychain items across users.

## Declaration

```swift
init(name: String)
```

## Parameters

- `name`: The user-visible string to display for the profile.

<a id="return-value"></a>

## Return Value

An initialized app profile descriptor object.

# initWithName: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+ (deprecated in 16.0)

Creates a new app profile descriptor object with the specified name.

> User Management capability get-current-user is no longer supported. Please use runs-as-current-user-with-user-independent-keychain and kSecUseUserIndependentKeychain for sharing keychain items across users.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name;
```

## Parameters

- `name`: The user-visible string to display for the profile.

<a id="return-value"></a>

## Return Value

An initialized app profile descriptor object.
