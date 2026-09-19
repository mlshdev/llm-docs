> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychainpromptselector/invalid

# invalid (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** macOS 10.0+

Indicates that a passphrase should be required when an application with an invalid signature attempts to use the keychain, overriding the system default.

## Declaration

```swift
static var invalid: SecKeychainPromptSelector { get }
```

# kSecKeychainPromptInvalid (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Indicates that a passphrase should be required when an application with an invalid signature attempts to use the keychain, overriding the system default.

## Declaration

```objectivec
kSecKeychainPromptInvalid
```
