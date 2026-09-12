> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountcredentialrenewresult](https://developer.apple.com/documentation/accounts/acaccountcredentialrenewresult)

# ACAccountCredentialRenewResult (Swift)

**Framework:** Accounts  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Status codes of credential renewal requests.

## Declaration

```swift
enum ACAccountCredentialRenewResult
```

## Topics

### Constants

- [ACAccountCredentialRenewResult.renewed](acaccountcredentialrenewresult/renewed.md): The account’s credentials have been renewed and are now associated with the account.
- [ACAccountCredentialRenewResult.rejected](acaccountcredentialrenewresult/rejected.md): Renewal failed because the user revoked your access to their account.
- [ACAccountCredentialRenewResult.failed](acaccountcredentialrenewresult/failed.md): A non-user-initiated cancel of the prompt.

### Initializers

- [init(rawValue:)](acaccountcredentialrenewresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Renewing Account Credentials

- [renewCredentials(for:completion:)](acaccountstore/renewcredentials%28for_completion_%29.md): Deprecated. Renews account credentials when the credentials are no longer valid.
- [ACAccountStoreCredentialRenewalHandler](acaccountstorecredentialrenewalhandler.md): Specifies a handler to call when credentials are renewed.

# ACAccountCredentialRenewResult (Objective-C)

**Framework:** Accounts  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Status codes of credential renewal requests.

## Declaration

```objectivec
enum ACAccountCredentialRenewResult : NSInteger;
```

## Topics

### Constants

- [ACAccountCredentialRenewResultRenewed](acaccountcredentialrenewresult/renewed.md): The account’s credentials have been renewed and are now associated with the account.
- [ACAccountCredentialRenewResultRejected](acaccountcredentialrenewresult/rejected.md): Renewal failed because the user revoked your access to their account.
- [ACAccountCredentialRenewResultFailed](acaccountcredentialrenewresult/failed.md): A non-user-initiated cancel of the prompt.

## See Also

### Renewing Account Credentials

- [renewCredentialsForAccount:completion:](acaccountstore/renewcredentials%28for_completion_%29.md): Deprecated. Renews account credentials when the credentials are no longer valid.
- [ACAccountStoreCredentialRenewalHandler](acaccountstorecredentialrenewalhandler.md): Specifies a handler to call when credentials are renewed.
