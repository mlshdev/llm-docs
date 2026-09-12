> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/nocloudaccountnotification](https://developer.apple.com/documentation/foundation/userdefaults/nocloudaccountnotification)

# noCloudAccountNotification (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.3+ (deprecated in 9.3) · iPadOS 9.3+ (deprecated in 9.3) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Posted when a cloud default is set, but no iCloud user is logged in.

> Notification is never posted

## Declaration

```swift
class let noCloudAccountNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification is posted to the default notification center on the main queue.

This notification doesn’t necessarily indicate an error; ubiquitous defaults set when no iCloud user is logged in are uploaded the next time one is available if configured to do so.

## See Also

### Deprecated

- [init(user:)](init%28user_%29.md): Deprecated. Creates a user defaults object initialized with the defaults for the specified user account.
- [synchronize()](synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [resetStandardUserDefaults()](resetstandarduserdefaults%28%29.md): This method has no effect and shouldn’t be used.
- [persistentDomainNames()](persistentdomainnames%28%29.md): Deprecated. Returns an array of the current persistent domain names.
- [completedInitialCloudSyncNotification](completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [didChangeCloudAccountsNotification](didchangecloudaccountsnotification.md): Deprecated. Posted when the user changes the primary iCloud account.
- [Language-Dependent Information Constants](../language-dependent-information-constants.md): These constants are deprecated and shouldn’t be used.

# NSUbiquitousUserDefaultsNoCloudAccountNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.3+ (deprecated in 9.3) · iPadOS 9.3+ (deprecated in 9.3) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Posted when a cloud default is set, but no iCloud user is logged in.

> Notification is never posted

## Declaration

```objectivec
extern NSNotificationName const NSUbiquitousUserDefaultsNoCloudAccountNotification;
```

<a id="Discussion"></a>

## Discussion

This notification is posted to the default notification center on the main queue.

This notification doesn’t necessarily indicate an error; ubiquitous defaults set when no iCloud user is logged in are uploaded the next time one is available if configured to do so.

## See Also

### Deprecated

- [initWithUser:](init%28user_%29.md): Deprecated. Creates a user defaults object initialized with the defaults for the specified user account.
- [synchronize](synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [resetStandardUserDefaults](resetstandarduserdefaults%28%29.md): This method has no effect and shouldn’t be used.
- [persistentDomainNames](persistentdomainnames%28%29.md): Deprecated. Returns an array of the current persistent domain names.
- [NSUbiquitousUserDefaultsCompletedInitialSyncNotification](completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [NSUbiquitousUserDefaultsDidChangeAccountsNotification](didchangecloudaccountsnotification.md): Deprecated. Posted when the user changes the primary iCloud account.
- [Language-Dependent Information Constants](../language-dependent-information-constants.md): These constants are deprecated and shouldn’t be used.
