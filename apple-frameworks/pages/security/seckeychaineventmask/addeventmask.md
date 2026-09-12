> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaineventmask/addeventmask](https://developer.apple.com/documentation/security/seckeychaineventmask/addeventmask)

# addEventMask (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when an item is added to a keychain.

## Declaration

```swift
static var addEventMask: SecKeychainEventMask { get }
```

# kSecAddEventMask (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when an item is added to a keychain.

## Declaration

```objectivec
kSecAddEventMask
```
