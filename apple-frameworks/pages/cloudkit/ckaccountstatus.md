> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckaccountstatus](https://developer.apple.com/documentation/cloudkit/ckaccountstatus)

# CKAccountStatus (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the availability of the user’s iCloud account.

## Declaration

```swift
enum CKAccountStatus
```

## Topics

### Account Statuses

- [CKAccountStatus.available](ckaccountstatus/available.md): The user’s iCloud account is available.
- [CKAccountStatus.couldNotDetermine](ckaccountstatus/couldnotdetermine.md): CloudKit can’t determine the status of the user’s iCloud account.
- [CKAccountStatus.noAccount](ckaccountstatus/noaccount.md): The device doesn’t have an iCloud account.
- [CKAccountStatus.restricted](ckaccountstatus/restricted.md): The system denies access to the user’s iCloud account.
- [CKAccountStatus.temporarilyUnavailable](ckaccountstatus/temporarilyunavailable.md): The user’s iCloud account is temporarily unavailable.

### Initializers

- [init(rawValue:)](ckaccountstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining the User’s iCloud Access Status

- [accountStatus(completionHandler:)](ckcontainer/accountstatus%28completionhandler_%29.md): Determines whether the system can access the user’s iCloud account.

# CKAccountStatus (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the availability of the user’s iCloud account.

## Declaration

```objectivec
enum CKAccountStatus : NSInteger;
```

## Topics

### Account Statuses

- [CKAccountStatusAvailable](ckaccountstatus/available.md): The user’s iCloud account is available.
- [CKAccountStatusCouldNotDetermine](ckaccountstatus/couldnotdetermine.md): CloudKit can’t determine the status of the user’s iCloud account.
- [CKAccountStatusNoAccount](ckaccountstatus/noaccount.md): The device doesn’t have an iCloud account.
- [CKAccountStatusRestricted](ckaccountstatus/restricted.md): The system denies access to the user’s iCloud account.
- [CKAccountStatusTemporarilyUnavailable](ckaccountstatus/temporarilyunavailable.md): The user’s iCloud account is temporarily unavailable.

## See Also

### Determining the User’s iCloud Access Status

- [accountStatusWithCompletionHandler:](ckcontainer/accountstatus%28completionhandler_%29.md): Determines whether the system can access the user’s iCloud account.
