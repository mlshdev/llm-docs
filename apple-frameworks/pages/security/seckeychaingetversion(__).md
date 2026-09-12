> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaingetversion(_:)](https://developer.apple.com/documentation/security/seckeychaingetversion(_:))

# SecKeychainGetVersion(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Determines the version of keychain services installed on the user’s system.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainGetVersion(_ returnVers: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## Parameters

- `returnVers`: On return, a pointer to the version number of keychain services installed on the current system. See `Keychain Settings Version` for a list of values.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Your application can call the [SecKeychainGetVersion(\_:)](seckeychaingetversion%28__%29.md) function to find out which version of keychain services is installed on the user’s system.

# SecKeychainGetVersion (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Determines the version of keychain services installed on the user’s system.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainGetVersion(UInt32 *returnVers);
```

## Parameters

- `returnVers`: On return, a pointer to the version number of keychain services installed on the current system. See `Keychain Settings Version` for a list of values.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Your application can call the [SecKeychainGetVersion](seckeychaingetversion%28__%29.md) function to find out which version of keychain services is installed on the user’s system.
