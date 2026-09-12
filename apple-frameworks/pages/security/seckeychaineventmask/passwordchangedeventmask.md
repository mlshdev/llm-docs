> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaineventmask/passwordchangedeventmask](https://developer.apple.com/documentation/security/seckeychaineventmask/passwordchangedeventmask)

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
