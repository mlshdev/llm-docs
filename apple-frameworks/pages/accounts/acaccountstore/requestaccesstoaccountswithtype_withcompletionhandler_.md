> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstore/requestaccesstoaccountswithtype:withcompletionhandler:](https://developer.apple.com/documentation/accounts/acaccountstore/requestaccesstoaccountswithtype:withcompletionhandler:)

# requestAccessToAccountsWithType:withCompletionHandler:

**Interface language:** Objective-C

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 6.0) · iPadOS 6.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Requests access to accounts of the specified type.

> Use [requestAccessToAccountsWithType:options:completion:](requestaccesstoaccounts%28with_options_completion_%29.md) instead.

## Declaration

```objectivec
- (void) requestAccessToAccountsWithType:(ACAccountType *) accountType withCompletionHandler:(ACAccountStoreRequestAccessCompletionHandler) handler;
```

## Parameters

- `accountType`: The account type.
- `handler`: The handler to call when access is granted or denied. The handler is called on an arbitrary queue.

<a id="Discussion"></a>

## Discussion

This method displays a dialog to the user confirming whether the application has access to the account. If access is granted, the application has access to protected properties of and operations on all accounts of the specified type.

## See Also

### Requesting Access

- [requestAccessToAccountsWithType:options:completion:](requestaccesstoaccounts%28with_options_completion_%29.md): Deprecated. Obtains permission to access protected user properties.
- [ACAccountStoreRequestAccessCompletionHandler](../acaccountstorerequestaccesscompletionhandler.md): Specifies a handler to call when access is granted or denied.
