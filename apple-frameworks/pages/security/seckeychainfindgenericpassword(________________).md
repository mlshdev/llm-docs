> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainfindgenericpassword(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/security/seckeychainfindgenericpassword(_:_:_:_:_:_:_:_:))

# SecKeychainFindGenericPassword(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Finds the first generic password based on the attributes passed.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainFindGenericPassword(_ keychainOrArray: CFTypeRef?, _ serviceNameLength: UInt32, _ serviceName: UnsafePointer<CChar>?, _ accountNameLength: UInt32, _ accountName: UnsafePointer<CChar>?, _ passwordLength: UnsafeMutablePointer<UInt32>?, _ passwordData: UnsafeMutablePointer<UnsafeMutableRawPointer?>?, _ itemRef: UnsafeMutablePointer<SecKeychainItem?>?) -> OSStatus
```

## Parameters

- `keychainOrArray`: A reference to an array of keychains to search, a single keychain, or `NULL` to search the user’s default keychain search list.
- `serviceNameLength`: The length of the `serviceName` character string.
- `serviceName`: A UTF-8 encoded character string representing the service name.
- `accountNameLength`: The length of the `accountName` character string.
- `accountName`: A UTF-8 encoded character string representing the account name.
- `passwordLength`: On return, the length of the buffer pointed to by `passwordData`.
- `passwordData`: On return, a pointer to a buffer that holds the password data. Pass `NULL` if you want to obtain the item object but not the password data. In this case, you must also pass `NULL` in the `passwordLength` parameter. You should use the [SecKeychainItemFreeContent(\_:\_:)](seckeychainitemfreecontent%28____%29.md) function to free the memory pointed to by this parameter.
- `itemRef`: On return, a pointer to the item object of the generic password. You are responsible for releasing your reference to this object. Pass `NULL` if you don’t want to obtain this object.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function finds the first generic password item that matches the attributes you provide. Most attributes are optional; you should pass only as many as you need to narrow the search sufficiently for your application’s intended use. This function optionally returns a reference to the found item.

This function decrypts the password before returning it to you. If the calling application is not in the list of trusted applications, the user is prompted before access is allowed. If the access controls for this item do not allow decryption, the function returns the `errSecAuthFailed` result code.

This function automatically calls the function [SecKeychainUnlock(\_:\_:\_:\_:)](seckeychainunlock%28________%29.md) to display the Unlock Keychain dialog box if the keychain is currently locked.

# SecKeychainFindGenericPassword (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Finds the first generic password based on the attributes passed.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainFindGenericPassword(CFTypeRef keychainOrArray, UInt32 serviceNameLength, const char *serviceName, UInt32 accountNameLength, const char *accountName, UInt32 *passwordLength, void **passwordData, SecKeychainItemRef*itemRef);
```

## Parameters

- `keychainOrArray`: A reference to an array of keychains to search, a single keychain, or `NULL` to search the user’s default keychain search list.
- `serviceNameLength`: The length of the `serviceName` character string.
- `serviceName`: A UTF-8 encoded character string representing the service name.
- `accountNameLength`: The length of the `accountName` character string.
- `accountName`: A UTF-8 encoded character string representing the account name.
- `passwordLength`: On return, the length of the buffer pointed to by `passwordData`.
- `passwordData`: On return, a pointer to a buffer that holds the password data. Pass `NULL` if you want to obtain the item object but not the password data. In this case, you must also pass `NULL` in the `passwordLength` parameter. You should use the [SecKeychainItemFreeContent](seckeychainitemfreecontent%28____%29.md) function to free the memory pointed to by this parameter.
- `itemRef`: On return, a pointer to the item object of the generic password. You are responsible for releasing your reference to this object. Pass `NULL` if you don’t want to obtain this object.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function finds the first generic password item that matches the attributes you provide. Most attributes are optional; you should pass only as many as you need to narrow the search sufficiently for your application’s intended use. This function optionally returns a reference to the found item.

This function decrypts the password before returning it to you. If the calling application is not in the list of trusted applications, the user is prompted before access is allowed. If the access controls for this item do not allow decryption, the function returns the `errSecAuthFailed` result code.

This function automatically calls the function [SecKeychainUnlock](seckeychainunlock%28________%29.md) to display the Unlock Keychain dialog box if the keychain is currently locked.
