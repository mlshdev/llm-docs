> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/accountchange/changetype-swift.enum](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/accountchange/changetype-swift.enum)

# CKSyncEngine.Event.AccountChange.ChangeType

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Describes a change to the device’s iCloud account.

## Declaration

```swift
enum ChangeType
```

## Topics

### Account change types

- [CKSyncEngine.Event.AccountChange.ChangeType.signIn(currentUser:)](changetype-swift.enum/signin%28currentuser_%29.md): A change indicating a sign-in to an iCloud account.
- [CKSyncEngine.Event.AccountChange.ChangeType.signOut(previousUser:)](changetype-swift.enum/signout%28previoususer_%29.md): A change indicating a sign-out of an iCloud account.
- [CKSyncEngine.Event.AccountChange.ChangeType.switchAccounts(previousUser:currentUser:)](changetype-swift.enum/switchaccounts%28previoususer_currentuser_%29.md): A change indicating a switch between two iCloud accounts.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Understanding the change

- [changeType](changetype-swift.property.md): The iCloud account’s change type.
- [CKSyncEngineAccountChangeType](../../../cksyncengineaccountchangetype.md): Describes a change to the device’s iCloud account.
