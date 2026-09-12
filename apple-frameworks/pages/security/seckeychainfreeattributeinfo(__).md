> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainfreeattributeinfo(_:)](https://developer.apple.com/documentation/security/seckeychainfreeattributeinfo(_:))

# SecKeychainFreeAttributeInfo(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Releases the memory acquired by calling the `SecKeychainAttributeInfoForItemID` function.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainFreeAttributeInfo(_ info: UnsafeMutablePointer<SecKeychainAttributeInfo>) -> OSStatus
```

## Parameters

- `info`: A pointer to the keychain attribute information to release.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainFreeAttributeInfo (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Releases the memory acquired by calling the `SecKeychainAttributeInfoForItemID` function.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainFreeAttributeInfo(SecKeychainAttributeInfo *info);
```

## Parameters

- `info`: A pointer to the keychain attribute information to release.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
