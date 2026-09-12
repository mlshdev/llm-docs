> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionoptiongroup/init(isincluded:label:marketingcontent:)](https://developer.apple.com/documentation/storekit/subscriptionoptiongroup/init(isincluded:label:marketingcontent:))

# init(isIncluded:label:marketingContent:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency init(isIncluded: @escaping (Product) -> Bool, @ViewBuilder label: () -> Label, @ViewBuilder marketingContent: () -> MarketingContent) where Content == Never
```

## See Also

### Creating subscription option groups

- [init(\_:content:)](init%28__content_%29-2nlpw.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(\_:content:)](init%28__content_%29-24grh.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(\_:content:marketingContent:)](init%28__content_marketingcontent_%29-9jybc.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` conforms to `View`.
- [init(\_:content:marketingContent:)](init%28__content_marketingcontent_%29-550q0.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` conforms to `View`.
- [init(\_:isIncluded:)](init%28__isincluded_%29-uhqa.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(\_:isIncluded:)](init%28__isincluded_%29-5f3ml.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(\_:isIncluded:marketingContent:)](init%28__isincluded_marketingcontent_%29-8vmdm.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` conforms to `View`.
- [init(\_:isIncluded:marketingContent:)](init%28__isincluded_marketingcontent_%29-4d72a.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` conforms to `View`.
- [init(content:)](init%28content_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `AutomaticSubscriptionOptionGroupLabel`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(content:label:)](init%28content_label_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` conforms to `View`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(content:label:marketingContent:)](init%28content_label_marketingcontent_%29.md)
- [init(content:marketingContent:)](init%28content_marketingcontent_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `AutomaticSubscriptionOptionGroupLabel`, and `MarketingContent` conforms to `View`.
- [init(isIncluded:)](init%28isincluded_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `AutomaticSubscriptionOptionGroupLabel`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(isIncluded:label:)](init%28isincluded_label_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` conforms to `View`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(isIncluded:marketingContent:)](init%28isincluded_marketingcontent_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `AutomaticSubscriptionOptionGroupLabel`, and `MarketingContent` conforms to `View`.
