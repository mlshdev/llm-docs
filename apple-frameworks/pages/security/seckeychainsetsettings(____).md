> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsetsettings(_:_:)](https://developer.apple.com/documentation/security/seckeychainsetsettings(_:_:))

# SecKeychainSetSettings(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Changes the settings of a keychain.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainSetSettings(_ keychain: SecKeychain?, _ newSettings: UnsafePointer<SecKeychainSettings>) -> OSStatus
```

## Parameters

- `keychain`: A reference to a keychain whose settings you wish to change. Pass `NULL` to change the settings of the default keychain.
- `newSettings`: A pointer to a keychain settings structure that defines whether the keychain locks when sleeping, or locks after a set time period of inactivity.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainSetSettings (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Changes the settings of a keychain.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainSetSettings(SecKeychainRef keychain, const SecKeychainSettings *newSettings);
```

## Parameters

- `keychain`: A reference to a keychain whose settings you wish to change. Pass `NULL` to change the settings of the default keychain.
- `newSettings`: A pointer to a keychain settings structure that defines whether the keychain locks when sleeping, or locks after a set time period of inactivity.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
