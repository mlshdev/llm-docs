> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstore/renewcredentials(for:completion:)](https://developer.apple.com/documentation/accounts/acaccountstore/renewcredentials(for:completion:))

# renewCredentials(for:completion:) (Swift)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Renews account credentials when the credentials are no longer valid.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
func renewCredentials(for account: ACAccount!, completion completionHandler: (@Sendable (ACAccountCredentialRenewResult, (any Error)?) -> Void)!)
```

```swift
func renewCredentials(for account: ACAccount!) async throws -> ACAccountCredentialRenewResult
```

## Parameters

- `account`: The account to renew credentials.
- `completionHandler`: The handler to call when the renewal has completed.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func renewCredentials(for account: ACAccount!) async throws -> ACAccountCredentialRenewResult
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

For Twitter and Sina Weibo accounts, this method prompts the user to go to Settings to re-enter their password.

For Facebook accounts, if the access token has become invalid due to a regular expiration, this method obtains a new one.

If the user has deauthorized your app, this renewal request returns `ACAccountCredentialRenewResultRejected`.

## See Also

### Renewing Account Credentials

- [ACAccountStoreCredentialRenewalHandler](../acaccountstorecredentialrenewalhandler.md): Specifies a handler to call when credentials are renewed.
- [ACAccountCredentialRenewResult](../acaccountcredentialrenewresult.md): Status codes of credential renewal requests.

# renewCredentialsForAccount:completion: (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Renews account credentials when the credentials are no longer valid.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
- (void) renewCredentialsForAccount:(ACAccount *) account completion:(ACAccountStoreCredentialRenewalHandler) completionHandler;
```

## Parameters

- `account`: The account to renew credentials.
- `completionHandler`: The handler to call when the renewal has completed.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func renewCredentials(for account: ACAccount!) async throws -> ACAccountCredentialRenewResult
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

For Twitter and Sina Weibo accounts, this method prompts the user to go to Settings to re-enter their password.

For Facebook accounts, if the access token has become invalid due to a regular expiration, this method obtains a new one.

If the user has deauthorized your app, this renewal request returns `ACAccountCredentialRenewResultRejected`.

## See Also

### Renewing Account Credentials

- [ACAccountStoreCredentialRenewalHandler](../acaccountstorecredentialrenewalhandler.md): Specifies a handler to call when credentials are renewed.
- [ACAccountCredentialRenewResult](../acaccountcredentialrenewresult.md): Status codes of credential renewal requests.
