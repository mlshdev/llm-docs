> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaineventmask/deleteeventmask](https://developer.apple.com/documentation/security/seckeychaineventmask/deleteeventmask)

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
