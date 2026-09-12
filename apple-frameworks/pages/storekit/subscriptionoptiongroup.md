> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionoptiongroup](https://developer.apple.com/documentation/storekit/subscriptionoptiongroup)

# SubscriptionOptionGroup

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A group of subscription options that includes optional views for labels and marketing content.

## Declaration

```swift
@MainActor @preconcurrency struct SubscriptionOptionGroup<Content, Label, MarketingContent> where Content : StoreContent, Label : View, MarketingContent : View
```

## Topics

### Creating subscription option groups

- [init(\_:content:)](subscriptionoptiongroup/init%28__content_%29-2nlpw.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(\_:content:)](subscriptionoptiongroup/init%28__content_%29-24grh.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(\_:content:marketingContent:)](subscriptionoptiongroup/init%28__content_marketingcontent_%29-9jybc.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` conforms to `View`.
- [init(\_:content:marketingContent:)](subscriptionoptiongroup/init%28__content_marketingcontent_%29-550q0.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` conforms to `View`.
- [init(\_:isIncluded:)](subscriptionoptiongroup/init%28__isincluded_%29-uhqa.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(\_:isIncluded:)](subscriptionoptiongroup/init%28__isincluded_%29-5f3ml.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(\_:isIncluded:marketingContent:)](subscriptionoptiongroup/init%28__isincluded_marketingcontent_%29-8vmdm.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` conforms to `View`.
- [init(\_:isIncluded:marketingContent:)](subscriptionoptiongroup/init%28__isincluded_marketingcontent_%29-4d72a.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `Text`, and `MarketingContent` conforms to `View`.
- [init(content:)](subscriptionoptiongroup/init%28content_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `AutomaticSubscriptionOptionGroupLabel`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(content:label:)](subscriptionoptiongroup/init%28content_label_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` conforms to `View`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(content:label:marketingContent:)](subscriptionoptiongroup/init%28content_label_marketingcontent_%29.md)
- [init(content:marketingContent:)](subscriptionoptiongroup/init%28content_marketingcontent_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `AutomaticSubscriptionOptionGroupLabel`, and `MarketingContent` conforms to `View`.
- [init(isIncluded:)](subscriptionoptiongroup/init%28isincluded_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `AutomaticSubscriptionOptionGroupLabel`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(isIncluded:label:)](subscriptionoptiongroup/init%28isincluded_label_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` conforms to `View`, and `MarketingContent` is `AutomaticSubscriptionStoreMarketingContent`.
- [init(isIncluded:label:marketingContent:)](subscriptionoptiongroup/init%28isincluded_label_marketingcontent_%29.md)
- [init(isIncluded:marketingContent:)](subscriptionoptiongroup/init%28isincluded_marketingcontent_%29.md): Conforms when `Content` conforms to `StoreContent`, `Label` is `AutomaticSubscriptionOptionGroupLabel`, and `MarketingContent` conforms to `View`.

### Supporting types

- [AutomaticSubscriptionOptionGroupLabel](automaticsubscriptionoptiongrouplabel.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StoreContent](storecontent.md)

## See Also

### Declaring the structure of a subscription store

- [SubscriptionOptionGroupSet](subscriptionoptiongroupset.md): A set of groups of subscription options that include optional views for labels and marketing content.
- [SubscriptionPeriodGroupSet](subscriptionperiodgroupset.md)
- [SubscriptionOptionSection](subscriptionoptionsection.md)
- [StoreContent](storecontent.md): A type that represents the content of a store.
- [StoreContentBuilder](storecontentbuilder.md): A result builder that creates store content from closures that you provide.
