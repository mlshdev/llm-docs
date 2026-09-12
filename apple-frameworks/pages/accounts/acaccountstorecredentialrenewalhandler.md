> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstorecredentialrenewalhandler](https://developer.apple.com/documentation/accounts/acaccountstorecredentialrenewalhandler)

# ACAccountStoreCredentialRenewalHandler (Swift)

**Framework:** Accounts  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Specifies a handler to call when credentials are renewed.

## Declaration

```swift
typealias ACAccountStoreCredentialRenewalHandler = (ACAccountCredentialRenewResult, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

The renewal handler parameters are:

- **`renewResult`**: The result of the renewal request.
- **`error`**: An error, if one occurred.

## See Also

### Renewing Account Credentials

- [renewCredentials(for:completion:)](acaccountstore/renewcredentials%28for_completion_%29.md): Deprecated. Renews account credentials when the credentials are no longer valid.
- [ACAccountCredentialRenewResult](acaccountcredentialrenewresult.md): Status codes of credential renewal requests.

# ACAccountStoreCredentialRenewalHandler (Objective-C)

**Framework:** Accounts  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Specifies a handler to call when credentials are renewed.

## Declaration

```objectivec
typedef void (^)(enum ACAccountCredentialRenewResult, NSError *) ACAccountStoreCredentialRenewalHandler;
```

<a id="Discussion"></a>

## Discussion

The renewal handler parameters are:

- **`renewResult`**: The result of the renewal request.
- **`error`**: An error, if one occurred.

## See Also

### Renewing Account Credentials

- [renewCredentialsForAccount:completion:](acaccountstore/renewcredentials%28for_completion_%29.md): Deprecated. Renews account credentials when the credentials are no longer valid.
- [ACAccountCredentialRenewResult](acaccountcredentialrenewresult.md): Status codes of credential renewal requests.
