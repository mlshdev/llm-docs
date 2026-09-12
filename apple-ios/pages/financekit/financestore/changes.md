> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/changes](https://developer.apple.com/documentation/financekit/financestore/changes)

# FinanceStore.Changes

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that records changes to the finance store.

## Declaration

```swift
struct Changes<Model> where Model : Identifiable
```

## Topics

### Instance Properties

- [deleted](changes/deleted.md): An array of model objects identifiers that the framework deleted from the finance store.
- [inserted](changes/inserted.md): An array of model objects the framework inserted into the finance store.
- [newToken](changes/newtoken.md): An updated history token that you can use to query more historical data.
- [updated](changes/updated.md): An array of model objects that the framework updated in the finance store.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [FinanceStore.History](history.md): A structure the framework uses to collect and iterate over finance store model objects.
- [FinanceStore.HistoryToken](historytoken.md): A structure that describes the starting point to use for financial data queries.
