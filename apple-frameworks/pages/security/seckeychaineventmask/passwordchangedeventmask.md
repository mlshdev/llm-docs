> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychaineventmask/passwordchangedeventmask

# passwordChangedEventMask (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when the keychain password is changed.

## Declaration

```swift
static var passwordChangedEventMask: SecKeychainEventMask { get }
```

# kSecPasswordChangedEventMask (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when the keychain password is changed.

## Declaration

```objectivec
kSecPasswordChangedEventMask
```
