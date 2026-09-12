> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckaccountstatus/temporarilyunavailable](https://developer.apple.com/documentation/cloudkit/ckaccountstatus/temporarilyunavailable)

# CKAccountStatus.temporarilyUnavailable (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The user’s iCloud account is temporarily unavailable.

## Declaration

```swift
case temporarilyUnavailable
```

<a id="discussion"></a>

## Discussion

You receive this account status when the user’s iCloud account is available, but isn’t ready to support CloudKit operations. Don’t delete any cached data and don’t enqueue any CloudKit operations after receipt of this account status. Instead, use the [CKAccountChanged](../../foundation/nsnotification/name-swift.struct/ckaccountchanged.md) notification to listen for when the status changes to [CKAccountStatus.available](available.md).

## See Also

### Account Statuses

- [CKAccountStatus.available](available.md): The user’s iCloud account is available.
- [CKAccountStatus.couldNotDetermine](couldnotdetermine.md): CloudKit can’t determine the status of the user’s iCloud account.
- [CKAccountStatus.noAccount](noaccount.md): The device doesn’t have an iCloud account.
- [CKAccountStatus.restricted](restricted.md): The system denies access to the user’s iCloud account.

# CKAccountStatusTemporarilyUnavailable (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The user’s iCloud account is temporarily unavailable.

## Declaration

```objectivec
CKAccountStatusTemporarilyUnavailable
```

<a id="discussion"></a>

## Discussion

You receive this account status when the user’s iCloud account is available, but isn’t ready to support CloudKit operations. Don’t delete any cached data and don’t enqueue any CloudKit operations after receipt of this account status. Instead, use the [CKAccountChanged](../../foundation/nsnotification/name-swift.struct/ckaccountchanged.md) notification to listen for when the status changes to [CKAccountStatusAvailable](available.md).

## See Also

### Account Statuses

- [CKAccountStatusAvailable](available.md): The user’s iCloud account is available.
- [CKAccountStatusCouldNotDetermine](couldnotdetermine.md): CloudKit can’t determine the status of the user’s iCloud account.
- [CKAccountStatusNoAccount](noaccount.md): The device doesn’t have an iCloud account.
- [CKAccountStatusRestricted](restricted.md): The system denies access to the user’s iCloud account.
