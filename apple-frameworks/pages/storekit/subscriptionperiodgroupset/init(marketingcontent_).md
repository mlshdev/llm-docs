> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionperiodgroupset/init(marketingcontent:)](https://developer.apple.com/documentation/storekit/subscriptionperiodgroupset/init(marketingcontent:))

# init(marketingContent:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency init(@ViewBuilder marketingContent: @escaping (Product.SubscriptionPeriod?) -> MarketingContent) where Label == AutomaticSubscriptionOptionGroupLabel
```

## See Also

### Creating subscription period group sets

- [init()](init%28%29.md)
- [init(marketingContent:label:)](init%28marketingcontent_label_%29.md)
