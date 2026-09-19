> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychaineventmask/updateeventmask

# updateEventMask (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when a keychain item is updated.

## Declaration

```swift
static var updateEventMask: SecKeychainEventMask { get }
```

# kSecUpdateEventMask (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when a keychain item is updated.

## Declaration

```objectivec
kSecUpdateEventMask
```
