> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineaccountchangetype/switchaccounts](https://developer.apple.com/documentation/cloudkit/cksyncengineaccountchangetype/switchaccounts)

# CKSyncEngineAccountChangeType.switchAccounts (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A change indicating a switch between two iCloud accounts.

## Declaration

```swift
case switchAccounts
```

<a id="discussion"></a>

## Discussion

You should delete any locally-stored data for the previous account.

## See Also

### Account change types

- [CKSyncEngineAccountChangeType.signIn](signin.md): A change indicating a sign-in to an iCloud account.
- [CKSyncEngineAccountChangeType.signOut](signout.md): A change indicating a sign-out of an iCloud account.

# CKSyncEngineAccountChangeTypeSwitchAccounts (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A change indicating a switch between two iCloud accounts.

## Declaration

```objectivec
CKSyncEngineAccountChangeTypeSwitchAccounts
```

<a id="discussion"></a>

## Discussion

You should delete any locally-stored data for the previous account.

## See Also

### Account change types

- [CKSyncEngineAccountChangeTypeSignIn](signin.md): A change indicating a sign-in to an iCloud account.
- [CKSyncEngineAccountChangeTypeSignOut](signout.md): A change indicating a sign-out of an iCloud account.
