> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/entitlementtaskstate](https://developer.apple.com/documentation/storekit/entitlementtaskstate)

# EntitlementTaskState

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The state of an entitlement task.

## Declaration

```swift
enum EntitlementTaskState<Value>
```

<a id="overview"></a>

## Overview

To get an entitlement task state, use [currentEntitlementTask(for:priority:action:)](https://developer.apple.com/documentation/swiftui/view/currententitlementtask%28for:priority:action:%29) or [subscriptionStatusTask(for:priority:action:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstatustask%28for:priority:action:%29) on a [View](https://developer.apple.com/documentation/swiftui/view).

## Topics

### Getting the task state

- [EntitlementTaskState.loading](entitlementtaskstate/loading.md): The task is loading the entitlement in the background.
- [EntitlementTaskState.success(\_:)](entitlementtaskstate/success%28__%29.md): The task successfully loaded the entitlement.
- [EntitlementTaskState.failure(\_:)](entitlementtaskstate/failure%28__%29.md): The task failed to load the entitlement, with an error.

### Getting the transaction with the entitlement

- [transaction](entitlementtaskstate/transaction.md): Conforms when `Value` is `VerificationResult<Transaction>?`. The transaction value if the task is successful.
- [value](entitlementtaskstate/value.md): The entitlement value if the task is successful.

### Helper methods

- [flatMap(\_:)](entitlementtaskstate/flatmap%28__%29-7gsnv.md): Returns a new state, mapping the entitlement value if successful.
- [flatMap(\_:)](entitlementtaskstate/flatmap%28__%29-66eb8.md): Returns a new state, mapping the entitlement value if successful.
- [map(\_:)](entitlementtaskstate/map%28__%29-8ly3v.md): Returns a new state, mapping the entitlement value if successful.
- [map(\_:)](entitlementtaskstate/map%28__%29-250dk.md): Returns a new state, mapping the entitlement value if successful.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loading StoreKit data

- [storeProductTask(for:priority:action:)](https://developer.apple.com/documentation/swiftui/view/storeproducttask%28for:priority:action:%29): Declares the view as dependent on an In-App Purchase product and returns a modified view.
- [storeProductsTask(for:priority:action:)](https://developer.apple.com/documentation/swiftui/view/storeproductstask%28for:priority:action:%29): Declares the view as dependent on a collection of In-App Purchase products and returns a modified view.
- [currentEntitlementTask(for:priority:action:)](https://developer.apple.com/documentation/swiftui/view/currententitlementtask%28for:priority:action:%29): Declares the view as dependent on the entitlement of an In-App Purchase product, and returns a modified view.
- [subscriptionStatusTask(for:priority:action:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstatustask%28for:priority:action:%29): Declares the view as dependent on the status of an auto-renewable subscription group, and returns a modified view.
- [Product.CollectionTaskState](product/collectiontaskstate.md): The state of a task that loads a collection of products in the background.
- [Product.TaskState](product/taskstate.md): The state of a task that loads a product in the background.
