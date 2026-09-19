> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychaineventmask/dataaccesseventmask

# dataAccessEventMask (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.15)

If the bit specified by this mask is set, your callback function is invoked when a process accesses a keychain item’s data.

> Read events are no longer posted

## Declaration

```swift
static var dataAccessEventMask: SecKeychainEventMask { get }
```

# kSecDataAccessEventMask (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.15)

If the bit specified by this mask is set, your callback function is invoked when a process accesses a keychain item’s data.

> Read events are no longer posted

## Declaration

```objectivec
kSecDataAccessEventMask
```
