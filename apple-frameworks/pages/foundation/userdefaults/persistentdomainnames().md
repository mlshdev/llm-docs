> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/persistentdomainnames()](https://developer.apple.com/documentation/foundation/userdefaults/persistentdomainnames())

# persistentDomainNames() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns an array of the current persistent domain names.

> Instead of using this method, you should track the domains you add if you want to later retrieve them with [persistentDomain(forName:)](persistentdomain%28forname_%29.md).

## Declaration

```swift
func persistentDomainNames() -> [Any]
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the domain names.

<a id="Discussion"></a>

## Discussion

You can get the keys and values for each domain by passing the returned domain names to the  [persistentDomain(forName:)](persistentdomain%28forname_%29.md) method.

## See Also

### Deprecated

- [init(user:)](init%28user_%29.md): Deprecated. Creates a user defaults object initialized with the defaults for the specified user account.
- [synchronize()](synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [resetStandardUserDefaults()](resetstandarduserdefaults%28%29.md): This method has no effect and shouldn’t be used.
- [completedInitialCloudSyncNotification](completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [didChangeCloudAccountsNotification](didchangecloudaccountsnotification.md): Deprecated. Posted when the user changes the primary iCloud account.
- [noCloudAccountNotification](nocloudaccountnotification.md): Deprecated. Posted when a cloud default is set, but no iCloud user is logged in.
- [Language-Dependent Information Constants](../language-dependent-information-constants.md): These constants are deprecated and shouldn’t be used.

# persistentDomainNames (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns an array of the current persistent domain names.

> Instead of using this method, you should track the domains you add if you want to later retrieve them with [persistentDomainForName:](persistentdomain%28forname_%29.md).

## Declaration

```objectivec
- (NSArray *) persistentDomainNames;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the domain names.

<a id="Discussion"></a>

## Discussion

You can get the keys and values for each domain by passing the returned domain names to the  [persistentDomainForName:](persistentdomain%28forname_%29.md) method.

## See Also

### Deprecated

- [initWithUser:](init%28user_%29.md): Deprecated. Creates a user defaults object initialized with the defaults for the specified user account.
- [synchronize](synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [resetStandardUserDefaults](resetstandarduserdefaults%28%29.md): This method has no effect and shouldn’t be used.
- [NSUbiquitousUserDefaultsCompletedInitialSyncNotification](completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [NSUbiquitousUserDefaultsDidChangeAccountsNotification](didchangecloudaccountsnotification.md): Deprecated. Posted when the user changes the primary iCloud account.
- [NSUbiquitousUserDefaultsNoCloudAccountNotification](nocloudaccountnotification.md): Deprecated. Posted when a cloud default is set, but no iCloud user is logged in.
- [Language-Dependent Information Constants](../language-dependent-information-constants.md): These constants are deprecated and shouldn’t be used.
