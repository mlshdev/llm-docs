> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsetdomaindefault(_:_:)](https://developer.apple.com/documentation/security/seckeychainsetdomaindefault(_:_:))

# SecKeychainSetDomainDefault(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Sets the default keychain for a specified preference domain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainSetDomainDefault(_ domain: SecPreferencesDomain, _ keychain: SecKeychain?) -> OSStatus
```

## Parameters

- `domain`: The preference domain for which you wish to set the default keychain. See [SecPreferencesDomain](secpreferencesdomain.md) for possible domain values.
- `keychain`: A reference to the keychain you wish to set as default in the specified preference domain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. Use this function if you want to set the default keychain for a specific preference domain. Use the [SecKeychainSetDefault(\_:)](seckeychainsetdefault%28__%29.md) function if you want to set the default keychain for the current preference domain. See the [SecKeychainSetPreferenceDomain(\_:)](seckeychainsetpreferencedomain%28__%29.md) function for a discussion of current and default preference domains.

# SecKeychainSetDomainDefault (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Sets the default keychain for a specified preference domain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainSetDomainDefault(SecPreferencesDomain domain, SecKeychainRef keychain);
```

## Parameters

- `domain`: The preference domain for which you wish to set the default keychain. See [SecPreferencesDomain](secpreferencesdomain.md) for possible domain values.
- `keychain`: A reference to the keychain you wish to set as default in the specified preference domain.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. Use this function if you want to set the default keychain for a specific preference domain. Use the [SecKeychainSetDefault](seckeychainsetdefault%28__%29.md) function if you want to set the default keychain for the current preference domain. See the [SecKeychainSetPreferenceDomain](seckeychainsetpreferencedomain%28__%29.md) function for a discussion of current and default preference domains.
