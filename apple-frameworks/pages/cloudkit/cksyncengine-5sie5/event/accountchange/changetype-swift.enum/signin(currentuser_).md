> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/accountchange/changetype-swift.enum/signin(currentuser:)

# CKSyncEngine.Event.AccountChange.ChangeType.signIn(currentUser:)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A change indicating a sign-in to an iCloud account.

## Declaration

```swift
case signIn(currentUser: CKRecord.ID)
```

<a id="discussion"></a>

## Discussion

If your app has locally-stored data when [CKSyncEngine](../../../../cksyncengine-5sie5.md) notifies it about the device signing in to an iCloud account, perform one of the following actions:

- Keep the local data separate from any remote data
- Merge the local data with the account’s remote data
- Delete the local data
- Prompt the account’s owner to make the decision

## See Also

### Account change types

- [CKSyncEngine.Event.AccountChange.ChangeType.signOut(previousUser:)](signout%28previoususer_%29.md): A change indicating a sign-out of an iCloud account.
- [CKSyncEngine.Event.AccountChange.ChangeType.switchAccounts(previousUser:currentUser:)](switchaccounts%28previoususer_currentuser_%29.md): A change indicating a switch between two iCloud accounts.
