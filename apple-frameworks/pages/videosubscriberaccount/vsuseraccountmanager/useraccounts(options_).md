> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/useraccounts(options:)](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/useraccounts(options:))

# userAccounts(options:)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS

Returns a list of registered user accounts for your app.

## Declaration

```swift
func userAccounts(options: VSUserAccountManager.QueryOptions = []) async throws -> [VSUserAccount]
```

## Parameters

- `options`: An array of options you specify to customize the user account query.

<a id="return-value"></a>

## Return Value

A list of registered user accounts for your app.

<a id="Discussion"></a>

## Discussion

By default, this fetches and returns the list of registered user accounts on the current device. Provide the query option [allDevices](queryoptions/alldevices.md) to fetch the list of registered user accounts on all the devices the person has in their iCloud account.

## See Also

### Getting user accounts

- [VSUserAccountManager.QueryOptions](queryoptions.md): Constants that represent options you use to fetch a list of user accounts.
