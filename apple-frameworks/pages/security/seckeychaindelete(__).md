> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaindelete(_:)](https://developer.apple.com/documentation/security/seckeychaindelete(_:))

# SecKeychainDelete(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Deletes one or more keychains from the default keychain search list, and removes the keychain itself if it is a file.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainDelete(_ keychainOrArray: SecKeychain?) -> OSStatus
```

## Parameters

- `keychainOrArray`: A single keychain object or a reference to an array of keychains you wish to delete. To delete more than one keychain, create a `CFArray` of keychain references (type `SecKeychainRef`) and pass a reference to the array.

  In macOS 10.3 and later, passing `NULL` to this parameter returns an `errSecInvalidKeychain` error code. In OS X 10.2, this parameter was named `keychain` and only took a single keychain object. Passing `NULL` to this parameter deleted the user’s default keychain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). The result code [errSecInvalidKeychain](errsecinvalidkeychain.md) is returned if the specified keychain is invalid or if the value of the `keychainOrArray` parameter is invalid or `NULL`.

<a id="Discussion"></a>

## Discussion

The keychain may be a file stored locally, a smart card, or retrieved from a network server using non-file-based database protocols. This function deletes the keychain only if it is a local file.

This function does not release the memory used by the keychain object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release each keychain object when you are finished with it.

# SecKeychainDelete (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Deletes one or more keychains from the default keychain search list, and removes the keychain itself if it is a file.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainDelete(SecKeychainRef keychainOrArray);
```

## Parameters

- `keychainOrArray`: A single keychain object or a reference to an array of keychains you wish to delete. To delete more than one keychain, create a `CFArray` of keychain references (type `SecKeychainRef`) and pass a reference to the array.

  In macOS 10.3 and later, passing `NULL` to this parameter returns an `errSecInvalidKeychain` error code. In OS X 10.2, this parameter was named `keychain` and only took a single keychain object. Passing `NULL` to this parameter deleted the user’s default keychain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). The result code [errSecInvalidKeychain](errsecinvalidkeychain.md) is returned if the specified keychain is invalid or if the value of the `keychainOrArray` parameter is invalid or `NULL`.

<a id="Discussion"></a>

## Discussion

The keychain may be a file stored locally, a smart card, or retrieved from a network server using non-file-based database protocols. This function deletes the keychain only if it is a local file.

This function does not release the memory used by the keychain object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release each keychain object when you are finished with it.
