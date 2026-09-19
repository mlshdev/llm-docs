> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekit/financestore/saveorder(signedarchive:)

# saveOrder(signedArchive:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Adds an order to the store or updates an existing order.

## Declaration

```swift
func saveOrder(signedArchive: Data) async throws -> FinanceStore.SaveOrderResult
```

<a id="Discussion"></a>

## Discussion

`Data` must be the archive data of a valid, signed order.

## See Also

### Orders

- [FullyQualifiedOrderIdentifier](../fullyqualifiedorderidentifier.md): A structure that specifies the characteristics of an order.
