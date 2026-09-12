> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/accountbalancequery/predicate(availablesince:until:)](https://developer.apple.com/documentation/financekit/accountbalancequery/predicate(availablesince:until:))

# predicate(availableSince:until:)

**Framework:** FinanceKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A predicate that returns available account balances since a specified date, and, optionally, until another date.

## Declaration

```swift
static func predicate(availableSince startDate: Date, until endDate: Date? = nil) -> Predicate<AccountBalance>
```

## Parameters

- `startDate`: The date to start collecting account balances.
- `endDate`: The date to end collection account balances. This parameter is optional. If this parameter isn’t included, the method returns all account balances since the `startDate`.

## See Also

### Type Methods

- [predicate(bookedSince:until:)](predicate%28bookedsince_until_%29.md): A predicate that returns booked account balances since a specified date until another date.
