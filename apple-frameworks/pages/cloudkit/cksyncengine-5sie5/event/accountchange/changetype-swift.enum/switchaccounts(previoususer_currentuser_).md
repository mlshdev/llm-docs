> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/accountchange/changetype-swift.enum/switchaccounts(previoususer:currentuser:)](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/accountchange/changetype-swift.enum/switchaccounts(previoususer:currentuser:))

# CKSyncEngine.Event.AccountChange.ChangeType.switchAccounts(previousUser:currentUser:)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A change indicating a switch between two iCloud accounts.

## Declaration

```swift
case switchAccounts(previousUser: CKRecord.ID, currentUser: CKRecord.ID)
```

<a id="discussion"></a>

## Discussion

You should delete any locally-stored data for the previous account.

## See Also

### Account change types

- [CKSyncEngine.Event.AccountChange.ChangeType.signIn(currentUser:)](signin%28currentuser_%29.md): A change indicating a sign-in to an iCloud account.
- [CKSyncEngine.Event.AccountChange.ChangeType.signOut(previousUser:)](signout%28previoususer_%29.md): A change indicating a sign-out of an iCloud account.
