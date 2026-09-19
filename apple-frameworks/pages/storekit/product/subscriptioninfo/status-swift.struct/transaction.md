> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/subscriptioninfo/status-swift.struct/transaction

# transaction

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The latest transaction for the subscription group.

## Declaration

```swift
let transaction: VerificationResult<Transaction>
```

## See Also

### Getting subscription status information

- [state](state.md): The renewal state of the auto-renewable subscription.
- [renewalInfo](renewalinfo.md): The signed renewal information for the auto-renewable subscription.
- [Product.SubscriptionInfo.RenewalInfo](../renewalinfo.md): The renewal information for an auto-renewable subscription.
- [Product.SubscriptionInfo.RenewalState](../renewalstate.md): The renewal states of auto-renewable subscriptions.
