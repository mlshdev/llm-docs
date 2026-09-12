> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsetaccess(_:_:)](https://developer.apple.com/documentation/security/seckeychainsetaccess(_:_:))

# SecKeychainSetAccess(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Sets the application access for a keychain.

> In addition to the ACLs for individual keychain items, the keychain itself has ACLs. However, they are currently unused and this function isn’t implemented.

## Declaration

```swift
func SecKeychainSetAccess(_ keychain: SecKeychain?, _ access: SecAccess) -> OSStatus
```

## Parameters

- `keychain`: A reference to the keychain for which to set the access. Pass `NULL` to specify the default keychain.
- `access`: An access object of type [SecAccess](secaccess.md) containing access control lists for the keychain. See [Access Control Lists](access-control-lists.md) for more information about creating an access object.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainSetAccess (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Sets the application access for a keychain.

> In addition to the ACLs for individual keychain items, the keychain itself has ACLs. However, they are currently unused and this function isn’t implemented.

## Declaration

```objectivec
OSStatus SecKeychainSetAccess(SecKeychainRef keychain, SecAccessRef access);
```

## Parameters

- `keychain`: A reference to the keychain for which to set the access. Pass `NULL` to specify the default keychain.
- `access`: An access object of type [SecAccessRef](secaccess.md) containing access control lists for the keychain. See [Access Control Lists](access-control-lists.md) for more information about creating an access object.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
