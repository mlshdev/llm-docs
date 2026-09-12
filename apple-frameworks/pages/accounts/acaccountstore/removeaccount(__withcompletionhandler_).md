> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstore/removeaccount(_:withcompletionhandler:)](https://developer.apple.com/documentation/accounts/acaccountstore/removeaccount(_:withcompletionhandler:))

# removeAccount(\_:withCompletionHandler:) (Swift)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Removes an account from the account store.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
func removeAccount(_ account: ACAccount!, withCompletionHandler completionHandler: (@Sendable (Bool, (any Error)?) -> Void)!)
```

```swift
func removeAccount(_ account: ACAccount!) async throws -> Bool
```

## Parameters

- `account`: The account to remove.
- `completionHandler`: The handler to call when the removal has completed.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func removeAccount(_ account: ACAccount!) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This call will fail if you don’t have sufficient rights to remove the account.

## See Also

### Removing Accounts

- [ACAccountStoreRemoveCompletionHandler](../acaccountstoreremovecompletionhandler.md): Specifies a handler to call when an account is removed from the store.

# removeAccount:withCompletionHandler: (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Removes an account from the account store.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
- (void) removeAccount:(ACAccount *) account withCompletionHandler:(ACAccountStoreRemoveCompletionHandler) completionHandler;
```

## Parameters

- `account`: The account to remove.
- `completionHandler`: The handler to call when the removal has completed.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func removeAccount(_ account: ACAccount!) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This call will fail if you don’t have sufficient rights to remove the account.

## See Also

### Removing Accounts

- [ACAccountStoreRemoveCompletionHandler](../acaccountstoreremovecompletionhandler.md): Specifies a handler to call when an account is removed from the store.
