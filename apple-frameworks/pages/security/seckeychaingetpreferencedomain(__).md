> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaingetpreferencedomain(_:)](https://developer.apple.com/documentation/security/seckeychaingetpreferencedomain(_:))

# SecKeychainGetPreferenceDomain(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Gets the current keychain preference domain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainGetPreferenceDomain(_ domain: UnsafeMutablePointer<SecPreferencesDomain>) -> OSStatus
```

## Parameters

- `domain`: On return, a pointer to the keychain preference domain. See [SecPreferencesDomain](secpreferencesdomain.md) for possible domain values.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. The default preference domain for system daemons (that is, for daemons running in the root session) is the system domain. The default preference domain for all other programs is the user domain. Use the [SecKeychainSetPreferenceDomain(\_:)](seckeychainsetpreferencedomain%28__%29.md) function to change the preference domain.

# SecKeychainGetPreferenceDomain (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Gets the current keychain preference domain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainGetPreferenceDomain(SecPreferencesDomain *domain);
```

## Parameters

- `domain`: On return, a pointer to the keychain preference domain. See [SecPreferencesDomain](secpreferencesdomain.md) for possible domain values.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. The default preference domain for system daemons (that is, for daemons running in the root session) is the system domain. The default preference domain for all other programs is the user domain. Use the [SecKeychainSetPreferenceDomain](seckeychainsetpreferencedomain%28__%29.md) function to change the preference domain.
