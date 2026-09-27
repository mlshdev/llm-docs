> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/marketplacekit/transactionreporting/tokentype/coretechnology

# coreTechnology

**Framework:** MarketplaceKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A token type for potential purchases related to your app.

## Declaration

```swift
static let coreTechnology: TransactionReporting.TokenType
```

## Mentioned In

- [Reporting transactions for the Core Technology Commission](../../reporting-transactions-for-core-technology-commission.md)

<a id="discussion"></a>

## Discussion

When you pass this constant to the [token(for:)](../token%28for_%29.md) method, it returns JSON data as a Base64URL-encoded string. For more information, see [Reporting transactions for the Core Technology Commission](../../reporting-transactions-for-core-technology-commission.md).
