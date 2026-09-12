> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/transactionreporting/token(for:)](https://developer.apple.com/documentation/marketplacekit/transactionreporting/token(for:))

# token(for:)

**Framework:** MarketplaceKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Returns a token of the specified type.

## Declaration

```swift
static func token(for tokenType: TransactionReporting.TokenType) async throws -> String
```

## Parameters

- `tokenType`: The type of token to generate.

<a id="return-value"></a>

## Return Value

JSON data in a Base64URL-encoded string.

## Mentioned In

- [Reporting transactions for the Core Technology Commission](../reporting-transactions-for-core-technology-commission.md)

<a id="discussion"></a>

## Discussion

When you pass a token type, this method returns a token.

For example, passing the [coreTechnology](tokentype/coretechnology.md) token type, returns a token for reporting a potential purchase related to your app.

> **Throws**

> A [MarketplaceKitError](../marketplacekiterror.md), if the app doesn’t meet qualifications for transaction reporting. For example, if the [current](../appdistributor/current.md) distributor isn’t [AppDistributor.marketplace(\_:)](../appdistributor/marketplace%28__%29.md) or [AppDistributor.web](../appdistributor/web.md).
