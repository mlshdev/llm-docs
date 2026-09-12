> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/saveorder(signedarchive:)](https://developer.apple.com/documentation/financekit/financestore/saveorder(signedarchive:))

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
