> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaingetstatus(_:_:)](https://developer.apple.com/documentation/security/seckeychaingetstatus(_:_:))

# SecKeychainGetStatus(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves status information of a keychain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainGetStatus(_ keychain: SecKeychain?, _ keychainStatus: UnsafeMutablePointer<SecKeychainStatus>) -> OSStatus
```

## Parameters

- `keychain`: A keychain object of the keychain whose status you wish to determine for the user session. Pass `NULL` to obtain the status of the default keychain.
- `keychainStatus`: On return, a pointer to the status of the specified keychain. See [SecKeychainStatus](seckeychainstatus.md) for valid status constants.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). The result code [errSecNoSuchKeychain](errsecnosuchkeychain.md) indicates that the specified keychain could not be found. The result code [errSecInvalidKeychain](errsecinvalidkeychain.md) indicates that the specified keychain is invalid.

<a id="Discussion"></a>

## Discussion

This function retrieves the status of a specified keychain. You can use this function to determine if the keychain is unlocked, readable, or writable. Note that the lock status of a keychain can change at any time due to user or system activity. Because the system automatically prompts the user to unlock a keychain when necessary, you do not usually have to worry about the lock status of a keychain. If you do need to track the lock status of a keychain, use the [SecKeychainAddCallback(\_:\_:\_:)](seckeychainaddcallback%28______%29.md) function to register for keychain notifications.

# SecKeychainGetStatus (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves status information of a keychain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainGetStatus(SecKeychainRef keychain, SecKeychainStatus *keychainStatus);
```

## Parameters

- `keychain`: A keychain object of the keychain whose status you wish to determine for the user session. Pass `NULL` to obtain the status of the default keychain.
- `keychainStatus`: On return, a pointer to the status of the specified keychain. See [SecKeychainStatus](seckeychainstatus.md) for valid status constants.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). The result code [errSecNoSuchKeychain](errsecnosuchkeychain.md) indicates that the specified keychain could not be found. The result code [errSecInvalidKeychain](errsecinvalidkeychain.md) indicates that the specified keychain is invalid.

<a id="Discussion"></a>

## Discussion

This function retrieves the status of a specified keychain. You can use this function to determine if the keychain is unlocked, readable, or writable. Note that the lock status of a keychain can change at any time due to user or system activity. Because the system automatically prompts the user to unlock a keychain when necessary, you do not usually have to worry about the lock status of a keychain. If you do need to track the lock status of a keychain, use the [SecKeychainAddCallback](seckeychainaddcallback%28______%29.md) function to register for keychain notifications.
