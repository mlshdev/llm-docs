> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstore/saveaccount(_:withcompletionhandler:)](https://developer.apple.com/documentation/accounts/acaccountstore/saveaccount(_:withcompletionhandler:))

# saveAccount(\_:withCompletionHandler:) (Swift)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Saves an account to the Accounts database.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
func saveAccount(_ account: ACAccount!, withCompletionHandler completionHandler: (@Sendable (Bool, (any Error)?) -> Void)!)
```

```swift
func saveAccount(_ account: ACAccount!) async throws -> Bool
```

## Parameters

- `account`: The account to save.
- `completionHandler`: The handler to call when the operation completes. The handler is called on an arbitrary queue.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func saveAccount(_ account: ACAccount!) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

If the account type supports authentication and the account isn’t authenticated, the account server uses the account’s credentials to authenticate it. If the authentication is successful, the account is saved; otherwise it’s not saved.

## See Also

### Saving Accounts

- [ACAccountStoreSaveCompletionHandler](../acaccountstoresavecompletionhandler.md): Specifies a handler to call when an Accounts database operation is complete.

# saveAccount:withCompletionHandler: (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Saves an account to the Accounts database.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
- (void) saveAccount:(ACAccount *) account withCompletionHandler:(ACAccountStoreSaveCompletionHandler) completionHandler;
```

## Parameters

- `account`: The account to save.
- `completionHandler`: The handler to call when the operation completes. The handler is called on an arbitrary queue.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func saveAccount(_ account: ACAccount!) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

If the account type supports authentication and the account isn’t authenticated, the account server uses the account’s credentials to authenticate it. If the authentication is successful, the account is saved; otherwise it’s not saved.

## See Also

### Saving Accounts

- [ACAccountStoreSaveCompletionHandler](../acaccountstoresavecompletionhandler.md): Specifies a handler to call when an Accounts database operation is complete.
