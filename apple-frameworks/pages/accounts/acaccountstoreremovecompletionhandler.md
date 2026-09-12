> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstoreremovecompletionhandler](https://developer.apple.com/documentation/accounts/acaccountstoreremovecompletionhandler)

# ACAccountStoreRemoveCompletionHandler (Swift)

**Framework:** Accounts  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Specifies a handler to call when an account is removed from the store.

## Declaration

```swift
typealias ACAccountStoreRemoveCompletionHandler = (Bool, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

The completion handler parameters are:

- **`success`**: A Boolean value indicating whether the operation was successful. [true](https://developer.apple.com/documentation/swift/true) if successful, otherwise [false](https://developer.apple.com/documentation/swift/false).
- **`error`**: An error, if one occurred.

## See Also

### Removing Accounts

- [removeAccount(\_:withCompletionHandler:)](acaccountstore/removeaccount%28__withcompletionhandler_%29.md): Deprecated. Removes an account from the account store.

# ACAccountStoreRemoveCompletionHandler (Objective-C)

**Framework:** Accounts  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Specifies a handler to call when an account is removed from the store.

## Declaration

```objectivec
typedef void (^)(_Bool, NSError *) ACAccountStoreRemoveCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

The completion handler parameters are:

- **`success`**: A Boolean value indicating whether the operation was successful. [true](https://developer.apple.com/documentation/swift/true) if successful, otherwise [false](https://developer.apple.com/documentation/swift/false).
- **`error`**: An error, if one occurred.

## See Also

### Removing Accounts

- [removeAccount:withCompletionHandler:](acaccountstore/removeaccount%28__withcompletionhandler_%29.md): Deprecated. Removes an account from the account store.
