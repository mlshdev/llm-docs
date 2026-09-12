> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsetdomainsearchlist(_:_:)](https://developer.apple.com/documentation/security/seckeychainsetdomainsearchlist(_:_:))

# SecKeychainSetDomainSearchList(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Sets the keychain search list for a specified preference domain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainSetDomainSearchList(_ domain: SecPreferencesDomain, _ searchList: CFArray) -> OSStatus
```

## Parameters

- `domain`: The preference domain for which you wish to set the default keychain search list. See [SecPreferencesDomain](secpreferencesdomain.md)for possible domain values.
- `searchList`: A pointer to a keychain search list to set in the preference domain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. Use this function if you want to set the keychain search list for a specific preference domain. Use the [SecKeychainSetSearchList(\_:)](seckeychainsetsearchlist%28__%29.md) function if you want to set the keychain search list for the current preference domain. See the [SecKeychainSetPreferenceDomain(\_:)](seckeychainsetpreferencedomain%28__%29.md) function for a discussion of current and default preference domains.

# SecKeychainSetDomainSearchList (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Sets the keychain search list for a specified preference domain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainSetDomainSearchList(SecPreferencesDomain domain, CFArrayRef searchList);
```

## Parameters

- `domain`: The preference domain for which you wish to set the default keychain search list. See [SecPreferencesDomain](secpreferencesdomain.md)for possible domain values.
- `searchList`: A pointer to a keychain search list to set in the preference domain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. Use this function if you want to set the keychain search list for a specific preference domain. Use the [SecKeychainSetSearchList](seckeychainsetsearchlist%28__%29.md) function if you want to set the keychain search list for the current preference domain. See the [SecKeychainSetPreferenceDomain](seckeychainsetpreferencedomain%28__%29.md) function for a discussion of current and default preference domains.
