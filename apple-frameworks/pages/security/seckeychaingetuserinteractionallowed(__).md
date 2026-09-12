> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaingetuserinteractionallowed(_:)](https://developer.apple.com/documentation/security/seckeychaingetuserinteractionallowed(_:))

# SecKeychainGetUserInteractionAllowed(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Indicates whether keychain services functions that normally display a user interaction are allowed to do so.

> SecKeychain is deprecated

## Declaration

```swift
func SecKeychainGetUserInteractionAllowed(_ state: UnsafeMutablePointer<DarwinBoolean>) -> OSStatus
```

## Parameters

- `state`: On return, a Boolean value indicating whether user interaction is permitted. If [true](https://developer.apple.com/documentation/swift/true), user interaction is allowed, and keychain services functions that display a user interface can do so as appropriate.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecKeychainGetUserInteractionAllowed (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.10)

Indicates whether keychain services functions that normally display a user interaction are allowed to do so.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecKeychainGetUserInteractionAllowed(Boolean *state);
```

## Parameters

- `state`: On return, a Boolean value indicating whether user interaction is permitted. If [true](https://developer.apple.com/documentation/swift/true), user interaction is allowed, and keychain services functions that display a user interface can do so as appropriate.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
