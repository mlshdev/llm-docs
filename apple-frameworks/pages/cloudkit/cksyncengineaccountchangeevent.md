> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineaccountchangeevent](https://developer.apple.com/documentation/cloudkit/cksyncengineaccountchangeevent)

# CKSyncEngineAccountChangeEvent

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The user signed in or out of their account.

## Declaration

```objectivec
@interface CKSyncEngineAccountChangeEvent : CKSyncEngineEvent
```

<a id="overview"></a>

## Overview

The sync engine automatically listens for account changes, and it sends this event when the user signs in or out. It’s your responsibility to react appropriately to this change and update your local persistence.

When the logged-in account changes, the sync engine resets its internal state. This means that it clears any pending database or record zone changes that you may have added.

Note that it’s possible the account changes multiple times while your app is quit. If this happens, you only receive one account change event representing the transition between the last known state and the current state.

## Topics

### Understanding the change

- [changeType](cksyncengineaccountchangeevent/changetype.md): The iCloud account’s change type.
- [CKSyncEngineAccountChangeType](cksyncengineaccountchangetype.md): Describes a change to the device’s iCloud account.
- [previousUser](cksyncengineaccountchangeevent/previoususer.md): The previous iCloud account’s record identifier.
- [currentUser](cksyncengineaccountchangeevent/currentuser.md): The current iCloud account’s record identifier.

## Relationships

### Inherits From

- [CKSyncEngineEvent](cksyncengineevent.md)

## See Also

### Accessing account changes

- [accountChangeEvent](cksyncengineevent/accountchangeevent.md): The event downcast to the subclass that represents a change to the device’s iCloud account.
