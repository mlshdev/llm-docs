> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineaccountchangetype/signin](https://developer.apple.com/documentation/cloudkit/cksyncengineaccountchangetype/signin)

# CKSyncEngineAccountChangeType.signIn (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A change indicating a sign-in to an iCloud account.

## Declaration

```swift
case signIn
```

<a id="discussion"></a>

## Discussion

If your app has locally-stored data when [CKSyncEngine](../cksyncengine-4b4w9.md) notifies it about the device signing in to an iCloud account, perform one of the following actions:

- Keep the local data separate from any remote data
- Merge the local data with the account’s remote data
- Delete the local data
- Prompt the account’s owner to make the decision

## See Also

### Account change types

- [CKSyncEngineAccountChangeType.signOut](signout.md): A change indicating a sign-out of an iCloud account.
- [CKSyncEngineAccountChangeType.switchAccounts](switchaccounts.md): A change indicating a switch between two iCloud accounts.

# CKSyncEngineAccountChangeTypeSignIn (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A change indicating a sign-in to an iCloud account.

## Declaration

```objectivec
CKSyncEngineAccountChangeTypeSignIn
```

<a id="discussion"></a>

## Discussion

If your app has locally-stored data when [CKSyncEngine](../cksyncengine-4b4w9.md) notifies it about the device signing in to an iCloud account, perform one of the following actions:

- Keep the local data separate from any remote data
- Merge the local data with the account’s remote data
- Delete the local data
- Prompt the account’s owner to make the decision

## See Also

### Account change types

- [CKSyncEngineAccountChangeTypeSignOut](signout.md): A change indicating a sign-out of an iCloud account.
- [CKSyncEngineAccountChangeTypeSwitchAccounts](switchaccounts.md): A change indicating a switch between two iCloud accounts.
