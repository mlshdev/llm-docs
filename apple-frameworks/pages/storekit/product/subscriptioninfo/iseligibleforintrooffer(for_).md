> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/iseligibleforintrooffer(for:)](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/iseligibleforintrooffer(for:))

# isEligibleForIntroOffer(for:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a Boolean value that determines the customer’s eligibility for an introductory offer within the provided subscription group.

## Declaration

```swift
static func isEligibleForIntroOffer(for groupID: String) async -> Bool
```

## Parameters

- `groupID`: The subscription group identifier to check eligibility for an introductory offer.

<a id="return-value"></a>

## Return Value

`true` if the customer is eligible for an introductory offer on any auto-renewable subscription within the subscription group; `false` otherwise.

<a id="Discussion"></a>

## Discussion

This value may be `true` even if you haven’t set up an introductory offer in App Store Connect.

## See Also

### Getting introductory offer details

- [isEligibleForIntroOffer](iseligibleforintrooffer.md): A Boolean value that indicates whether the customer is eligible for an introductory offer.
- [introductoryOffer](introductoryoffer.md): Information about the introductory offer available for the auto-renewable subscription.
- [Product.SubscriptionOffer](../subscriptionoffer.md): Information about a subscription offer that you configure in App Store Connect.
