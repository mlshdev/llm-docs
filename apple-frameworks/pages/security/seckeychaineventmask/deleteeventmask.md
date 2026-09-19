> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychaineventmask/deleteeventmask

# deleteEventMask (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when an item is deleted from a keychain.

## Declaration

```swift
static var deleteEventMask: SecKeychainEventMask { get }
```

# kSecDeleteEventMask (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when an item is deleted from a keychain.

## Declaration

```objectivec
kSecDeleteEventMask
```
