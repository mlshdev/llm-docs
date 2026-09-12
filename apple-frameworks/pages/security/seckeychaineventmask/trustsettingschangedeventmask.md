> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaineventmask/trustsettingschangedeventmask](https://developer.apple.com/documentation/security/seckeychaineventmask/trustsettingschangedeventmask)

# trustSettingsChangedEventMask (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when there is a change in certificate trust settings.

## Declaration

```swift
static var trustSettingsChangedEventMask: SecKeychainEventMask { get }
```

# kSecTrustSettingsChangedEventMask (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the bit specified by this mask is set, your callback function is invoked when there is a change in certificate trust settings.

## Declaration

```objectivec
kSecTrustSettingsChangedEventMask
```
