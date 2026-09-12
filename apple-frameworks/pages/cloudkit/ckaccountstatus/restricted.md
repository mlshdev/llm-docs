> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckaccountstatus/restricted](https://developer.apple.com/documentation/cloudkit/ckaccountstatus/restricted)

# CKAccountStatus.restricted (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The system denies access to the user’s iCloud account.

## Declaration

```swift
case restricted
```

<a id="discussion"></a>

## Discussion

Your app can’t access the user’s iCloud account due to restrictions that Parental Controls or Mobile Device Management impose.

## See Also

### Account Statuses

- [CKAccountStatus.available](available.md): The user’s iCloud account is available.
- [CKAccountStatus.couldNotDetermine](couldnotdetermine.md): CloudKit can’t determine the status of the user’s iCloud account.
- [CKAccountStatus.noAccount](noaccount.md): The device doesn’t have an iCloud account.
- [CKAccountStatus.temporarilyUnavailable](temporarilyunavailable.md): The user’s iCloud account is temporarily unavailable.

# CKAccountStatusRestricted (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The system denies access to the user’s iCloud account.

## Declaration

```objectivec
CKAccountStatusRestricted
```

<a id="discussion"></a>

## Discussion

Your app can’t access the user’s iCloud account due to restrictions that Parental Controls or Mobile Device Management impose.

## See Also

### Account Statuses

- [CKAccountStatusAvailable](available.md): The user’s iCloud account is available.
- [CKAccountStatusCouldNotDetermine](couldnotdetermine.md): CloudKit can’t determine the status of the user’s iCloud account.
- [CKAccountStatusNoAccount](noaccount.md): The device doesn’t have an iCloud account.
- [CKAccountStatusTemporarilyUnavailable](temporarilyunavailable.md): The user’s iCloud account is temporarily unavailable.
