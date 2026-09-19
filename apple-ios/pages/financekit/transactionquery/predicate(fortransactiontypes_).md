> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekit/transactionquery/predicate(fortransactiontypes:)

# predicate(forTransactionTypes:)

**Framework:** FinanceKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Returns a predicate that matches any of the provided transaction types.

## Declaration

```swift
static func predicate(forTransactionTypes transactionTypes: [TransactionType]) -> Predicate<Transaction>
```

## Parameters

- `transactionTypes`: Transaction types to match against.

## See Also

### Type Methods

- [predicate(forMerchantCategoryCodes:)](predicate%28formerchantcategorycodes_%29.md): A predicate that returns transactions that match any of the provided merchant category codes.
- [predicate(forStatuses:)](predicate%28forstatuses_%29.md): Returns a predicate that matches any of the provided transaction statuses.
