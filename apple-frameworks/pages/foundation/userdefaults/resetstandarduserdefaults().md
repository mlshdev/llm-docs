> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/resetstandarduserdefaults()](https://developer.apple.com/documentation/foundation/userdefaults/resetstandarduserdefaults())

# resetStandardUserDefaults() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method has no effect and shouldn’t be used.

## Declaration

```swift
class func resetStandardUserDefaults()
```

## See Also

### Deprecated

- [init(user:)](init%28user_%29.md): Deprecated. Creates a user defaults object initialized with the defaults for the specified user account.
- [synchronize()](synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [persistentDomainNames()](persistentdomainnames%28%29.md): Deprecated. Returns an array of the current persistent domain names.
- [completedInitialCloudSyncNotification](completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [didChangeCloudAccountsNotification](didchangecloudaccountsnotification.md): Deprecated. Posted when the user changes the primary iCloud account.
- [noCloudAccountNotification](nocloudaccountnotification.md): Deprecated. Posted when a cloud default is set, but no iCloud user is logged in.
- [Language-Dependent Information Constants](../language-dependent-information-constants.md): These constants are deprecated and shouldn’t be used.

# resetStandardUserDefaults (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

This method has no effect and shouldn’t be used.

## Declaration

```objectivec
+ (void) resetStandardUserDefaults;
```

## See Also

### Deprecated

- [initWithUser:](init%28user_%29.md): Deprecated. Creates a user defaults object initialized with the defaults for the specified user account.
- [synchronize](synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [persistentDomainNames](persistentdomainnames%28%29.md): Deprecated. Returns an array of the current persistent domain names.
- [NSUbiquitousUserDefaultsCompletedInitialSyncNotification](completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [NSUbiquitousUserDefaultsDidChangeAccountsNotification](didchangecloudaccountsnotification.md): Deprecated. Posted when the user changes the primary iCloud account.
- [NSUbiquitousUserDefaultsNoCloudAccountNotification](nocloudaccountnotification.md): Deprecated. Posted when a cloud default is set, but no iCloud user is logged in.
- [Language-Dependent Information Constants](../language-dependent-information-constants.md): These constants are deprecated and shouldn’t be used.
