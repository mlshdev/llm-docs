> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/entitlementtaskstate/success(_:)](https://developer.apple.com/documentation/storekit/entitlementtaskstate/success(_:))

# EntitlementTaskState.success(\_:)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The task successfully loaded the entitlement.

## Declaration

```swift
case success(Value)
```

## See Also

### Getting the task state

- [EntitlementTaskState.loading](loading.md): The task is loading the entitlement in the background.
- [EntitlementTaskState.failure(\_:)](failure%28__%29.md): The task failed to load the entitlement, with an error.
