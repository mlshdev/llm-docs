> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainevent](https://developer.apple.com/documentation/security/seckeychainevent)

# SecKeychainEvent (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The list of keychain events that can trigger a callback.

## Declaration

```swift
enum SecKeychainEvent
```

<a id="overview"></a>

## Overview

Keychain Services includes one of these events in the callback you register with [SecKeychainAddCallback(\_:\_:\_:)](seckeychainaddcallback%28______%29.md), using the function signature defined by [SecKeychainCallback](seckeychaincallback.md), to indicate what event triggered the callback.

## Topics

### Constants

- [SecKeychainEvent.lockEvent](seckeychainevent/lockevent.md): Indicates a keychain was locked.
- [SecKeychainEvent.unlockEvent](seckeychainevent/unlockevent.md): Indicates a keychain was successfully unlocked.
- [SecKeychainEvent.addEvent](seckeychainevent/addevent.md): Indicates an item was added to a keychain.
- [SecKeychainEvent.deleteEvent](seckeychainevent/deleteevent.md): Indicates an item was deleted from a keychain.
- [SecKeychainEvent.updateEvent](seckeychainevent/updateevent.md): Indicates a keychain item was updated.
- [SecKeychainEvent.passwordChangedEvent](seckeychainevent/passwordchangedevent.md): Indicates the keychain password was changed.
- [SecKeychainEvent.defaultChangedEvent](seckeychainevent/defaultchangedevent.md): Indicates that a different keychain was specified as the default.
- [SecKeychainEvent.dataAccessEvent](seckeychainevent/dataaccessevent.md): Deprecated. Indicates a process has accessed a keychain item’s data.
- [SecKeychainEvent.keychainListChangedEvent](seckeychainevent/keychainlistchangedevent.md): Indicates the list of keychains has changed.
- [SecKeychainEvent.trustSettingsChangedEvent](seckeychainevent/trustsettingschangedevent.md): Indicates trust settings have changed.

### Initializers

- [init(rawValue:)](seckeychainevent/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecKeychainEvent (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The list of keychain events that can trigger a callback.

## Declaration

```objectivec
enum SecKeychainEvent : UInt32;
```

<a id="overview"></a>

## Overview

Keychain Services includes one of these events in the callback you register with [SecKeychainAddCallback](seckeychainaddcallback%28______%29.md), using the function signature defined by [SecKeychainCallback](seckeychaincallback.md), to indicate what event triggered the callback.

## Topics

### Constants

- [kSecLockEvent](seckeychainevent/lockevent.md): Indicates a keychain was locked.
- [kSecUnlockEvent](seckeychainevent/unlockevent.md): Indicates a keychain was successfully unlocked.
- [kSecAddEvent](seckeychainevent/addevent.md): Indicates an item was added to a keychain.
- [kSecDeleteEvent](seckeychainevent/deleteevent.md): Indicates an item was deleted from a keychain.
- [kSecUpdateEvent](seckeychainevent/updateevent.md): Indicates a keychain item was updated.
- [kSecPasswordChangedEvent](seckeychainevent/passwordchangedevent.md): Indicates the keychain password was changed.
- [kSecDefaultChangedEvent](seckeychainevent/defaultchangedevent.md): Indicates that a different keychain was specified as the default.
- [kSecDataAccessEvent](seckeychainevent/dataaccessevent.md): Deprecated. Indicates a process has accessed a keychain item’s data.
- [kSecKeychainListChangedEvent](seckeychainevent/keychainlistchangedevent.md): Indicates the list of keychains has changed.
- [kSecTrustSettingsChangedEvent](seckeychainevent/trustsettingschangedevent.md): Indicates trust settings have changed.
