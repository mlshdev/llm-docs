> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/accountchange](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/accountchange)

# CKSyncEngine.Event.AccountChange

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The user signed in or out of their account.

## Declaration

```swift
struct AccountChange
```

<a id="overview"></a>

## Overview

The sync engine automatically listens for account changes, and it sends this event when the user signs in or out. It’s your responsibility to react appropriately to this change and update your local persistence.

When the logged-in account changes, the sync engine resets its internal state. This means that it clears any pending database or record zone changes that you may have added.

Note that it’s possible the account changes multiple times while your app is quit. If this happens, you only receive one account change event representing the transition between the last known state and the current state.

> **Important**

> When a sync engine detects a change to the device’s iCloud account, it resets its internal state, including unsaved changes to both records and record zones. Your app needs to handle this scenario gracefully.

## Topics

### Understanding the change

- [changeType](accountchange/changetype-swift.property.md): The iCloud account’s change type.
- [CKSyncEngine.Event.AccountChange.ChangeType](accountchange/changetype-swift.enum.md): Describes a change to the device’s iCloud account.
- [CKSyncEngineAccountChangeType](../../cksyncengineaccountchangetype.md): Describes a change to the device’s iCloud account.

### Debugging the event

- [description](accountchange/description.md): A textual description of the event that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](accountchange/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Account changes

- [CKSyncEngine.Event.accountChange(\_:)](accountchange%28__%29.md): The user signed in or out of their account.
