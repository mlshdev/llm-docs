> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/requestauthorization()](https://developer.apple.com/documentation/financekit/financestore/requestauthorization())

# requestAuthorization()

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Prompts a person to give FinanceKit authorization to access financial data.

## Declaration

```swift
func requestAuthorization() async throws -> AuthorizationStatus
```

<a id="return-value"></a>

## Return Value

An [AuthorizationStatus](../authorizationstatus.md) value that indicates the current state of authorization.

<a id="Discussion"></a>

## Discussion

If there are no accounts are available to display, the framework presents a “No Accounts” screen and returns a status of [AuthorizationStatus.authorized](../authorizationstatus/authorized.md) or [AuthorizationStatus.denied](../authorizationstatus/denied.md) depending on the state of a person’s consent.

It’s safe to call this method multiple times; the framework prompts a person only if necessary.

## See Also

### Authorization

- [authorizationStatus()](authorizationstatus%28%29.md): Checks the authorization status for the calling application.
- [AuthorizationStatus](../authorizationstatus.md)
