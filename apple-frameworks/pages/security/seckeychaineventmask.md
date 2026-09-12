> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychaineventmask](https://developer.apple.com/documentation/security/seckeychaineventmask)

# SecKeychainEventMask (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Bit masks corresponding to the events that can trigger a keychain callback.

## Declaration

```swift
struct SecKeychainEventMask
```

<a id="overview"></a>

## Overview

Bitwise `OR` one or more of these masks together to provide the `eventMask` input to the [SecKeychainAddCallback(\_:\_:\_:)](seckeychainaddcallback%28______%29.md) function to indicate what event or events should trigger your callback.

## Topics

### Initializers

- [init(rawValue:)](seckeychaineventmask/init%28rawvalue_%29.md): Initializes an event mask value.

### Constants

- [lockEventMask](seckeychaineventmask/lockeventmask.md): If the bit specified by this mask is set, your callback function is invoked when a keychain is locked.
- [unlockEventMask](seckeychaineventmask/unlockeventmask.md): If the bit specified by this mask is set, your callback function is invoked when a keychain is unlocked.
- [addEventMask](seckeychaineventmask/addeventmask.md): If the bit specified by this mask is set, your callback function is invoked when an item is added to a keychain.
- [deleteEventMask](seckeychaineventmask/deleteeventmask.md): If the bit specified by this mask is set, your callback function is invoked when an item is deleted from a keychain.
- [updateEventMask](seckeychaineventmask/updateeventmask.md): If the bit specified by this mask is set, your callback function is invoked when a keychain item is updated.
- [passwordChangedEventMask](seckeychaineventmask/passwordchangedeventmask.md): If the bit specified by this mask is set, your callback function is invoked when the keychain password is changed.
- [defaultChangedEventMask](seckeychaineventmask/defaultchangedeventmask.md): If the bit specified by this mask is set, your callback function is invoked when a different keychain is specified as the default.
- [dataAccessEventMask](seckeychaineventmask/dataaccesseventmask.md): Deprecated. If the bit specified by this mask is set, your callback function is invoked when a process accesses a keychain item’s data.
- [keychainListChangedMask](seckeychaineventmask/keychainlistchangedmask.md): If the bit specified by this mask is set, your callback function is invoked when a keychain list is changed.
- [trustSettingsChangedEventMask](seckeychaineventmask/trustsettingschangedeventmask.md): If the bit specified by this mask is set, your callback function is invoked when there is a change in certificate trust settings.
- [everyEventMask](seckeychaineventmask/everyeventmask.md): If all the bits are set, your callback function is invoked whenever any event occurs.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SecKeychainEventMask (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Bit masks corresponding to the events that can trigger a keychain callback.

## Declaration

```objectivec
enum SecKeychainEventMask : UInt32;
```

<a id="overview"></a>

## Overview

Bitwise `OR` one or more of these masks together to provide the `eventMask` input to the [SecKeychainAddCallback](seckeychainaddcallback%28______%29.md) function to indicate what event or events should trigger your callback.

## Topics

### Constants

- [kSecLockEventMask](seckeychaineventmask/lockeventmask.md): If the bit specified by this mask is set, your callback function is invoked when a keychain is locked.
- [kSecUnlockEventMask](seckeychaineventmask/unlockeventmask.md): If the bit specified by this mask is set, your callback function is invoked when a keychain is unlocked.
- [kSecAddEventMask](seckeychaineventmask/addeventmask.md): If the bit specified by this mask is set, your callback function is invoked when an item is added to a keychain.
- [kSecDeleteEventMask](seckeychaineventmask/deleteeventmask.md): If the bit specified by this mask is set, your callback function is invoked when an item is deleted from a keychain.
- [kSecUpdateEventMask](seckeychaineventmask/updateeventmask.md): If the bit specified by this mask is set, your callback function is invoked when a keychain item is updated.
- [kSecPasswordChangedEventMask](seckeychaineventmask/passwordchangedeventmask.md): If the bit specified by this mask is set, your callback function is invoked when the keychain password is changed.
- [kSecDefaultChangedEventMask](seckeychaineventmask/defaultchangedeventmask.md): If the bit specified by this mask is set, your callback function is invoked when a different keychain is specified as the default.
- [kSecDataAccessEventMask](seckeychaineventmask/dataaccesseventmask.md): Deprecated. If the bit specified by this mask is set, your callback function is invoked when a process accesses a keychain item’s data.
- [kSecKeychainListChangedMask](seckeychaineventmask/keychainlistchangedmask.md): If the bit specified by this mask is set, your callback function is invoked when a keychain list is changed.
- [kSecTrustSettingsChangedEventMask](seckeychaineventmask/trustsettingschangedeventmask.md): If the bit specified by this mask is set, your callback function is invoked when there is a change in certificate trust settings.
- [kSecEveryEventMask](seckeychaineventmask/everyeventmask.md): If all the bits are set, your callback function is invoked whenever any event occurs.
