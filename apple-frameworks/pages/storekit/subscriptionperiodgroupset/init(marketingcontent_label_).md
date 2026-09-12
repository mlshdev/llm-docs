> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionperiodgroupset/init(marketingcontent:label:)](https://developer.apple.com/documentation/storekit/subscriptionperiodgroupset/init(marketingcontent:label:))

# init(marketingContent:label:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency init(@ViewBuilder marketingContent: @escaping (Product.SubscriptionPeriod?) -> MarketingContent, @ViewBuilder label: @escaping (Product.SubscriptionPeriod?) -> Label)
```

## See Also

### Creating subscription period group sets

- [init()](init%28%29.md)
- [init(marketingContent:)](init%28marketingcontent_%29.md)
