> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychaincallbackinfo/keychain

# keychain (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A reference to the keychain in which the event occurred. If the event did not involve a keychain, this field is not valid.

## Declaration

```swift
var keychain: Unmanaged<SecKeychain>
```

# keychain (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A reference to the keychain in which the event occurred. If the event did not involve a keychain, this field is not valid.

## Declaration

```objectivec
SecKeychainRef keychain;
```
