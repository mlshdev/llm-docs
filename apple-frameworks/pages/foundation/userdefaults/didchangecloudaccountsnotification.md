> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/didchangecloudaccountsnotification](https://developer.apple.com/documentation/foundation/userdefaults/didchangecloudaccountsnotification)

# didChangeCloudAccountsNotification (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.3+ (deprecated in 9.3) · iPadOS 9.3+ (deprecated in 9.3) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Posted when the user changes the primary iCloud account.

> Notification is never posted

## Declaration

```swift
class let didChangeCloudAccountsNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification is posted to the default notification center on the main queue.The keys and values in the local key-value store are replaced with those from the new account, regardless of the relative timestamps.

## See Also

### Deprecated

- [init(user:)](init%28user_%29.md): Deprecated. Creates a user defaults object initialized with the defaults for the specified user account.
- [synchronize()](synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [resetStandardUserDefaults()](resetstandarduserdefaults%28%29.md): This method has no effect and shouldn’t be used.
- [persistentDomainNames()](persistentdomainnames%28%29.md): Deprecated. Returns an array of the current persistent domain names.
- [completedInitialCloudSyncNotification](completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [noCloudAccountNotification](nocloudaccountnotification.md): Deprecated. Posted when a cloud default is set, but no iCloud user is logged in.
- [Language-Dependent Information Constants](../language-dependent-information-constants.md): These constants are deprecated and shouldn’t be used.

# NSUbiquitousUserDefaultsDidChangeAccountsNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.3+ (deprecated in 9.3) · iPadOS 9.3+ (deprecated in 9.3) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Posted when the user changes the primary iCloud account.

> Notification is never posted

## Declaration

```objectivec
extern NSNotificationName const NSUbiquitousUserDefaultsDidChangeAccountsNotification;
```

<a id="Discussion"></a>

## Discussion

This notification is posted to the default notification center on the main queue.The keys and values in the local key-value store are replaced with those from the new account, regardless of the relative timestamps.

## See Also

### Deprecated

- [initWithUser:](init%28user_%29.md): Deprecated. Creates a user defaults object initialized with the defaults for the specified user account.
- [synchronize](synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [resetStandardUserDefaults](resetstandarduserdefaults%28%29.md): This method has no effect and shouldn’t be used.
- [persistentDomainNames](persistentdomainnames%28%29.md): Deprecated. Returns an array of the current persistent domain names.
- [NSUbiquitousUserDefaultsCompletedInitialSyncNotification](completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [NSUbiquitousUserDefaultsNoCloudAccountNotification](nocloudaccountnotification.md): Deprecated. Posted when a cloud default is set, but no iCloud user is logged in.
- [Language-Dependent Information Constants](../language-dependent-information-constants.md): These constants are deprecated and shouldn’t be used.
