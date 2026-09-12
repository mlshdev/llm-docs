> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstoresavecompletionhandler](https://developer.apple.com/documentation/accounts/acaccountstoresavecompletionhandler)

# ACAccountStoreSaveCompletionHandler (Swift)

**Framework:** Accounts  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Specifies a handler to call when an Accounts database operation is complete.

## Declaration

```swift
typealias ACAccountStoreSaveCompletionHandler = (Bool, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

The completion handler parameters are:

- **`success`**: A Boolean value indicating whether the operation is successful. [true](https://developer.apple.com/documentation/swift/true) if the operation is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).
- **`error`**: An error, if one occurred.

## See Also

### Saving Accounts

- [saveAccount(\_:withCompletionHandler:)](acaccountstore/saveaccount%28__withcompletionhandler_%29.md): Deprecated. Saves an account to the Accounts database.

# ACAccountStoreSaveCompletionHandler (Objective-C)

**Framework:** Accounts  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Specifies a handler to call when an Accounts database operation is complete.

## Declaration

```objectivec
typedef void (^)(_Bool, NSError *) ACAccountStoreSaveCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

The completion handler parameters are:

- **`success`**: A Boolean value indicating whether the operation is successful. [true](https://developer.apple.com/documentation/swift/true) if the operation is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).
- **`error`**: An error, if one occurred.

## See Also

### Saving Accounts

- [saveAccount:withCompletionHandler:](acaccountstore/saveaccount%28__withcompletionhandler_%29.md): Deprecated. Saves an account to the Accounts database.
