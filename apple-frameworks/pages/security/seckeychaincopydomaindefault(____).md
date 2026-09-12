> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaincopydomaindefault(_:_:)](https://developer.apple.com/documentation/security/seckeychaincopydomaindefault(_:_:))

# SecKeychainCopyDomainDefault(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves the default keychain from a specified preference domain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainCopyDomainDefault(_ domain: SecPreferencesDomain, _ keychain: UnsafeMutablePointer<SecKeychain?>) -> OSStatus
```

## Parameters

- `domain`: The preference domain from which you wish to retrieve the default keychain. See [SecPreferencesDomain](secpreferencesdomain.md) for possible domain values.
- `keychain`: On return, a pointer to the keychain object of the default keychain in the specified preference domain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. Use this function if you want to retrieve the default keychain for a specific preference domain. Use the [SecKeychainCopyDefault(\_:)](seckeychaincopydefault%28__%29.md) function if you want the default keychain for the current preference domain. See the [SecKeychainSetPreferenceDomain(\_:)](seckeychainsetpreferencedomain%28__%29.md) function for a discussion of current and default preference domains.

# SecKeychainCopyDomainDefault (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Retrieves the default keychain from a specified preference domain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainCopyDomainDefault(SecPreferencesDomain domain, SecKeychainRef*keychain);
```

## Parameters

- `domain`: The preference domain from which you wish to retrieve the default keychain. See [SecPreferencesDomain](secpreferencesdomain.md) for possible domain values.
- `keychain`: On return, a pointer to the keychain object of the default keychain in the specified preference domain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. Use this function if you want to retrieve the default keychain for a specific preference domain. Use the [SecKeychainCopyDefault](seckeychaincopydefault%28__%29.md) function if you want the default keychain for the current preference domain. See the [SecKeychainSetPreferenceDomain](seckeychainsetpreferencedomain%28__%29.md) function for a discussion of current and default preference domains.
