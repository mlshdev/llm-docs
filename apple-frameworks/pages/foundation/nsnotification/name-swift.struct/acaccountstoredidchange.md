> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/acaccountstoredidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/acaccountstoredidchange)

# ACAccountStoreDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ (deprecated in 14.0) · iPadOS 5.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.8+ (deprecated in 11.0)

Posted when the accounts managed by this account store changed in the database.

> Public notification deprecated. Internal clients, see private header for replacement

## Declaration

```swift
static let ACAccountStoreDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification sent if an account is saved or removed locally or externally. If you receive this notification, you should refetch all account objects.

There’s no `userInfo` dictionary associated with this notification.
