> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstore/requestaccesstoaccounts(with:options:completion:)](https://developer.apple.com/documentation/accounts/acaccountstore/requestaccesstoaccounts(with:options:completion:))

# requestAccessToAccounts(with:options:completion:) (Swift)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Obtains permission to access protected user properties.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
func requestAccessToAccounts(with accountType: ACAccountType!, options: [AnyHashable : Any]! = [:], completion: (@Sendable (Bool, (any Error)?) -> Void)!)
```

```swift
func requestAccessToAccounts(with accountType: ACAccountType!, options: [AnyHashable : Any]! = [:]) async throws -> Bool
```

## Parameters

- `accountType`: The account type.
- `options`: A dictionary of options, if options are required by the account type; otherwise, `nil`.
- `completion`: The handler to call when the request has completed. The handler is called on an arbitrary queue.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func requestAccessToAccounts(with accountType: ACAccountType!, options: [AnyHashable : Any]! = [:]) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Certain account types (such as Facebook) require an options dictionary. This method throws an `NSInvalidArgumentException` if the options dictionary isn’t provided for such account types. Conversely, if the account type doesn’t require an options dictionary, the `options` parameter must be `nil`.

## See Also

### Requesting Access

- [ACAccountStoreRequestAccessCompletionHandler](../acaccountstorerequestaccesscompletionhandler.md): Specifies a handler to call when access is granted or denied.

# requestAccessToAccountsWithType:options:completion: (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Obtains permission to access protected user properties.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
- (void) requestAccessToAccountsWithType:(ACAccountType *) accountType options:(NSDictionary *) options completion:(ACAccountStoreRequestAccessCompletionHandler) completion;
```

## Parameters

- `accountType`: The account type.
- `options`: A dictionary of options, if options are required by the account type; otherwise, `nil`.
- `completion`: The handler to call when the request has completed. The handler is called on an arbitrary queue.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func requestAccessToAccounts(with accountType: ACAccountType!, options: [AnyHashable : Any]! = [:]) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Certain account types (such as Facebook) require an options dictionary. This method throws an `NSInvalidArgumentException` if the options dictionary isn’t provided for such account types. Conversely, if the account type doesn’t require an options dictionary, the `options` parameter must be `nil`.

## See Also

### Requesting Access

- [requestAccessToAccountsWithType:withCompletionHandler:](requestaccesstoaccountswithtype_withcompletionhandler_.md): Deprecated. Requests access to accounts of the specified type.
- [ACAccountStoreRequestAccessCompletionHandler](../acaccountstorerequestaccesscompletionhandler.md): Specifies a handler to call when access is granted or denied.
