> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/init(user:)](https://developer.apple.com/documentation/foundation/userdefaults/init(user:))

# init(user:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a user defaults object initialized with the defaults for the specified user account.

> This method was never implemented to return anything but the defaults for the current user. Use [standard](standard.md) instead.

## Declaration

```swift
convenience init?(user username: String)
```

## Parameters

- `username`: The name of the user account.

<a id="return-value"></a>

## Return Value

An initialized [UserDefaults](../userdefaults.md) object whose argument and registration domains are already set up. If the current user does not have access to the specified user account, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

This method doesn’t put anything in the search list. Invoke it only if you’ve allocated your own [UserDefaults](../userdefaults.md) instance instead of using the shared one.

You do not normally use this method to initialize an instance of [UserDefaults](../userdefaults.md). Applications used by a superuser might use this method to update the defaults databases for a number of users. The user who started the application must have appropriate access (read, write, or both) to the defaults database of the new user, or this method returns `nil`.

<a id="Special-Considerations"></a>

### Special Considerations

This method was never implemented to do anything except return the defaults for the current user.

## See Also

### Related Documentation

- [standard](standard.md): The shared defaults object for the current app.

### Deprecated

- [synchronize()](synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [resetStandardUserDefaults()](resetstandarduserdefaults%28%29.md): This method has no effect and shouldn’t be used.
- [persistentDomainNames()](persistentdomainnames%28%29.md): Deprecated. Returns an array of the current persistent domain names.
- [completedInitialCloudSyncNotification](completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [didChangeCloudAccountsNotification](didchangecloudaccountsnotification.md): Deprecated. Posted when the user changes the primary iCloud account.
- [noCloudAccountNotification](nocloudaccountnotification.md): Deprecated. Posted when a cloud default is set, but no iCloud user is logged in.
- [Language-Dependent Information Constants](../language-dependent-information-constants.md): These constants are deprecated and shouldn’t be used.

# initWithUser: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a user defaults object initialized with the defaults for the specified user account.

> This method was never implemented to return anything but the defaults for the current user. Use [standardUserDefaults](standard.md) instead.

## Declaration

```objectivec
- (id) initWithUser:(NSString *) username;
```

## Parameters

- `username`: The name of the user account.

<a id="return-value"></a>

## Return Value

An initialized [NSUserDefaults](../userdefaults.md) object whose argument and registration domains are already set up. If the current user does not have access to the specified user account, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

This method doesn’t put anything in the search list. Invoke it only if you’ve allocated your own [NSUserDefaults](../userdefaults.md) instance instead of using the shared one.

You do not normally use this method to initialize an instance of [NSUserDefaults](../userdefaults.md). Applications used by a superuser might use this method to update the defaults databases for a number of users. The user who started the application must have appropriate access (read, write, or both) to the defaults database of the new user, or this method returns `nil`.

<a id="Special-Considerations"></a>

### Special Considerations

This method was never implemented to do anything except return the defaults for the current user.

## See Also

### Related Documentation

- [standardUserDefaults](standard.md): The shared defaults object for the current app.

### Deprecated

- [synchronize](synchronize%28%29.md): Waits for any pending asynchronous updates to the defaults database and returns; this method is unnecessary and shouldn’t be used.
- [resetStandardUserDefaults](resetstandarduserdefaults%28%29.md): This method has no effect and shouldn’t be used.
- [persistentDomainNames](persistentdomainnames%28%29.md): Deprecated. Returns an array of the current persistent domain names.
- [NSUbiquitousUserDefaultsCompletedInitialSyncNotification](completedinitialcloudsyncnotification.md): Deprecated. Posted when ubiquitous defaults finish downloading data, either the first time a device is connected to an iCloud account or when a user switches their primary iCloud account.
- [NSUbiquitousUserDefaultsDidChangeAccountsNotification](didchangecloudaccountsnotification.md): Deprecated. Posted when the user changes the primary iCloud account.
- [NSUbiquitousUserDefaultsNoCloudAccountNotification](nocloudaccountnotification.md): Deprecated. Posted when a cloud default is set, but no iCloud user is logged in.
- [Language-Dependent Information Constants](../language-dependent-information-constants.md): These constants are deprecated and shouldn’t be used.
