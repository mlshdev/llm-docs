> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/entitlementtaskstate/loading

# EntitlementTaskState.loading

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The task is loading the entitlement in the background.

## Declaration

```swift
case loading
```

## See Also

### Getting the task state

- [EntitlementTaskState.success(\_:)](success%28__%29.md): The task successfully loaded the entitlement.
- [EntitlementTaskState.failure(\_:)](failure%28__%29.md): The task failed to load the entitlement, with an error.
