> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstoredidchangenotification](https://developer.apple.com/documentation/accounts/acaccountstoredidchangenotification)

# ACAccountStoreDidChangeNotification

**Interface language:** Objective-C

**Framework:** Accounts  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 14.0) · iPadOS 5.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0)

Posted when the accounts managed by this account store changed in the database.

## Declaration

```objectivec
extern NSString * const ACAccountStoreDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification sent if an account is saved or removed locally or externally. If you receive this notification, you should refetch all account objects.

There’s no `userInfo` dictionary associated with this notification.
