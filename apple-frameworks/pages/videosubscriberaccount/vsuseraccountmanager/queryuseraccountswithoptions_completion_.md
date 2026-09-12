> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/queryuseraccountswithoptions:completion:](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/queryuseraccountswithoptions:completion:)

# queryUserAccountsWithOptions:completion:

**Interface language:** Objective-C

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

Returns a list of registered user accounts for your app.

## Declaration

```objectivec
- (void) queryUserAccountsWithOptions:(VSUserAccountQueryOptions) options completion:(void (^)(NSArray<VSUserAccount *> *accounts, NSError *error)) completion;
```

## Parameters

- `options`: An array of options you specify to customize the user account query.
- `completion`: The closure that the user account manager executes after the request completes. This closure has no return value and takes the following parameters:

  - **accounts**: A list of registered user accounts for your app.
  - **error**: An error object that contains information about a problem, or `nil` if the request completed successfully.

<a id="Discussion"></a>

## Discussion

By default, this fetches and returns the list of registered user accounts on the current device. Provide the query option [VSUserAccountQueryAllDevices](queryoptions/alldevices.md) to fetch the list of registered user accounts on all the devices the person has in their iCloud account.

## See Also

### Getting user accounts

- [VSUserAccountQueryOptions](queryoptions.md): Constants that represent options you use to fetch a list of user accounts.
