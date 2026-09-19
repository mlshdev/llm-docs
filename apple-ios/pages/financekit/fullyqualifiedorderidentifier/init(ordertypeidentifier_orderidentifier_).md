> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekit/fullyqualifiedorderidentifier/init(ordertypeidentifier:orderidentifier:)

# init(orderTypeIdentifier:orderIdentifier:)

**Framework:** FinanceKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Initializes the object with values that uniquely identify an order within an order type.

## Declaration

```swift
init(orderTypeIdentifier: String, orderIdentifier: String)
```

<a id="Discussion"></a>

## Discussion

In combination with the order type identifier, these two properties uniquely identify an order in [FinanceStore](../financestore.md).
