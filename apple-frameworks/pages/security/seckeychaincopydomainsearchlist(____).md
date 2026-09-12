> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaincopydomainsearchlist(_:_:)](https://developer.apple.com/documentation/security/seckeychaincopydomainsearchlist(_:_:))

# SecKeychainCopyDomainSearchList(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves the keychain search list for a specified preference domain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainCopyDomainSearchList(_ domain: SecPreferencesDomain, _ searchList: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `domain`: The preference domain from which you wish to retrieve the keychain search list. See [SecPreferencesDomain](secpreferencesdomain.md) for possible domain values.
- `searchList`: On return, a pointer to the keychain search list of the specified preference domain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. Use this function if you want to retrieve the keychain search list for a specific preference domain. Use the [SecKeychainCopySearchList(\_:)](seckeychaincopysearchlist%28__%29.md) function if you want the keychain search list for the current preference domain. See the [SecKeychainSetPreferenceDomain(\_:)](seckeychainsetpreferencedomain%28__%29.md) function for a discussion of current and default preference domains.

# SecKeychainCopyDomainSearchList (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves the keychain search list for a specified preference domain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainCopyDomainSearchList(SecPreferencesDomain domain, CFArrayRef*searchList);
```

## Parameters

- `domain`: The preference domain from which you wish to retrieve the keychain search list. See [SecPreferencesDomain](secpreferencesdomain.md) for possible domain values.
- `searchList`: On return, a pointer to the keychain search list of the specified preference domain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. Use this function if you want to retrieve the keychain search list for a specific preference domain. Use the [SecKeychainCopySearchList](seckeychaincopysearchlist%28__%29.md) function if you want the keychain search list for the current preference domain. See the [SecKeychainSetPreferenceDomain](seckeychainsetpreferencedomain%28__%29.md) function for a discussion of current and default preference domains.
