> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaineventmask/unlockeventmask](https://developer.apple.com/documentation/security/seckeychaineventmask/unlockeventmask)

# unlockEventMask (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when a keychain is unlocked.

## Declaration

```swift
static var unlockEventMask: SecKeychainEventMask { get }
```

# kSecUnlockEventMask (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when a keychain is unlocked.

## Declaration

```objectivec
kSecUnlockEventMask
```
