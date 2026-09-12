> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaineventmask/updateeventmask](https://developer.apple.com/documentation/security/seckeychaineventmask/updateeventmask)

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
