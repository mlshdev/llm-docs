> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/transactionquery/predicate(formerchantcategorycodes:)](https://developer.apple.com/documentation/financekit/transactionquery/predicate(formerchantcategorycodes:))

# predicate(forMerchantCategoryCodes:)

**Framework:** FinanceKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A predicate that returns transactions that match any of the provided merchant category codes.

## Declaration

```swift
static func predicate(forMerchantCategoryCodes merchantCategoryCodes: [MerchantCategoryCode]) -> Predicate<Transaction>
```

## Parameters

- `merchantCategoryCodes`: Merchant category codes to match against.

## See Also

### Type Methods

- [predicate(forStatuses:)](predicate%28forstatuses_%29.md): Returns a predicate that matches any of the provided transaction statuses.
- [predicate(forTransactionTypes:)](predicate%28fortransactiontypes_%29.md): Returns a predicate that matches any of the provided transaction types.
