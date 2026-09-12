> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/accountbalancequery/init(sortdescriptors:predicate:limit:offset:)](https://developer.apple.com/documentation/financekit/accountbalancequery/init(sortdescriptors:predicate:limit:offset:))

# init(sortDescriptors:predicate:limit:offset:)

**Framework:** FinanceKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a new account balance query structure with the provided sort descriptors.

## Declaration

```swift
init(sortDescriptors: [SortDescriptor<AccountBalance>] = [], predicate: Predicate<AccountBalance>? = nil, limit: Int? = nil, offset: Int? = nil)
```

## Parameters

- `sortDescriptors`: An array of [AccountBalance](../accountbalance.md) sort descriptors.
- `predicate`: A [Predicate](https://developer.apple.com/documentation/foundation/predicate) to filter the `Account` records with.
- `limit`: An integer that indicates the maximum number of  records to return.
- `offset`: An integer that indicates the number of records to offset the result by.
