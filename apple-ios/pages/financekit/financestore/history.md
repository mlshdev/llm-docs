> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/history](https://developer.apple.com/documentation/financekit/financestore/history)

# FinanceStore.History

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure the framework uses to collect and iterate over finance store model objects.

## Declaration

```swift
struct History<Model> where Model : Identifiable
```

## Topics

### Structures

- [FinanceStore.History.Iterator](history/iterator.md): The type that allows iteration over an array’s elements.

### Instance Methods

- [makeAsyncIterator()](history/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.

### Type Aliases

- [FinanceStore.History.AsyncIterator](history/asynciterator.md): The type of asynchronous iterator that produces elements of this asynchronous sequence.
- [FinanceStore.History.Element](history/element.md): An alias for the type that this asynchronous sequence holds.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [FinanceStore.Changes](changes.md): A structure that records changes to the finance store.
- [FinanceStore.HistoryToken](historytoken.md): A structure that describes the starting point to use for financial data queries.
