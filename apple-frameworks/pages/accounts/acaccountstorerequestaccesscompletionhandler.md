> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstorerequestaccesscompletionhandler](https://developer.apple.com/documentation/accounts/acaccountstorerequestaccesscompletionhandler)

# ACAccountStoreRequestAccessCompletionHandler (Swift)

**Framework:** Accounts  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Specifies a handler to call when access is granted or denied.

## Declaration

```swift
typealias ACAccountStoreRequestAccessCompletionHandler = (Bool, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

The completion handler parameters are:

- **`granted`**: A Boolean value indicating whether access is granted. [true](https://developer.apple.com/documentation/swift/true) if access is granted; otherwise [false](https://developer.apple.com/documentation/swift/false).
- **`error`**: An error, if one occurred.

## See Also

### Requesting Access

- [requestAccessToAccounts(with:options:completion:)](acaccountstore/requestaccesstoaccounts%28with_options_completion_%29.md): Deprecated. Obtains permission to access protected user properties.

# ACAccountStoreRequestAccessCompletionHandler (Objective-C)

**Framework:** Accounts  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Specifies a handler to call when access is granted or denied.

## Declaration

```objectivec
typedef void (^)(_Bool, NSError *) ACAccountStoreRequestAccessCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

The completion handler parameters are:

- **`granted`**: A Boolean value indicating whether access is granted. [true](https://developer.apple.com/documentation/swift/true) if access is granted; otherwise [false](https://developer.apple.com/documentation/swift/false).
- **`error`**: An error, if one occurred.

## See Also

### Requesting Access

- [requestAccessToAccountsWithType:withCompletionHandler:](acaccountstore/requestaccesstoaccountswithtype_withcompletionhandler_.md): Deprecated. Requests access to accounts of the specified type.
- [requestAccessToAccountsWithType:options:completion:](acaccountstore/requestaccesstoaccounts%28with_options_completion_%29.md): Deprecated. Obtains permission to access protected user properties.
