> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekit/financestore/authorizationstatus()

# authorizationStatus()

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Checks the authorization status for the calling application.

## Declaration

```swift
func authorizationStatus() async throws -> AuthorizationStatus
```

<a id="return-value"></a>

## Return Value

An [AuthorizationStatus](../authorizationstatus.md) value that indicates the current state of authorization.

## See Also

### Authorization

- [requestAuthorization()](requestauthorization%28%29.md): Prompts a person to give FinanceKit authorization to access financial data.
- [AuthorizationStatus](../authorizationstatus.md)
