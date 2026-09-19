> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekit/fullyqualifiedorderidentifier/ordertypeidentifier

# orderTypeIdentifier

**Framework:** FinanceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A string that describes the order type.

## Declaration

```swift
var orderTypeIdentifier: String
```

<a id="Discussion"></a>

## Discussion

This is a string the merchant uses to identify the set of orders associated with a given type. Merchants can set up order types on the developer portal.

## See Also

### Instance Properties

- [orderIdentifier](orderidentifier.md): A string the merchant uses to identify a specific customer order.
