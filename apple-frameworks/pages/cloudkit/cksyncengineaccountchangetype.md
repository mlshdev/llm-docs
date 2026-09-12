> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengineaccountchangetype](https://developer.apple.com/documentation/cloudkit/cksyncengineaccountchangetype)

# CKSyncEngineAccountChangeType (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Describes a change to the device’s iCloud account.

## Declaration

```swift
enum CKSyncEngineAccountChangeType
```

## Topics

### Account change types

- [CKSyncEngineAccountChangeType.signIn](cksyncengineaccountchangetype/signin.md): A change indicating a sign-in to an iCloud account.
- [CKSyncEngineAccountChangeType.signOut](cksyncengineaccountchangetype/signout.md): A change indicating a sign-out of an iCloud account.
- [CKSyncEngineAccountChangeType.switchAccounts](cksyncengineaccountchangetype/switchaccounts.md): A change indicating a switch between two iCloud accounts.

### Initializers

- [init(rawValue:)](cksyncengineaccountchangetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CKSyncEngineAccountChangeType (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Describes a change to the device’s iCloud account.

## Declaration

```objectivec
enum CKSyncEngineAccountChangeType : NSInteger;
```

## Topics

### Account change types

- [CKSyncEngineAccountChangeTypeSignIn](cksyncengineaccountchangetype/signin.md): A change indicating a sign-in to an iCloud account.
- [CKSyncEngineAccountChangeTypeSignOut](cksyncengineaccountchangetype/signout.md): A change indicating a sign-out of an iCloud account.
- [CKSyncEngineAccountChangeTypeSwitchAccounts](cksyncengineaccountchangetype/switchaccounts.md): A change indicating a switch between two iCloud accounts.

## See Also

### Understanding the change

- [changeType](cksyncengineaccountchangeevent/changetype.md): The iCloud account’s change type.
- [previousUser](cksyncengineaccountchangeevent/previoususer.md): The previous iCloud account’s record identifier.
- [currentUser](cksyncengineaccountchangeevent/currentuser.md): The current iCloud account’s record identifier.
