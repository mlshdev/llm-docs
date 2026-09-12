> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionperiodgroupset](https://developer.apple.com/documentation/storekit/subscriptionperiodgroupset)

# SubscriptionPeriodGroupSet

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency struct SubscriptionPeriodGroupSet<Label, MarketingContent> where Label : View, MarketingContent : View
```

## Topics

### Creating subscription period group sets

- [init()](subscriptionperiodgroupset/init%28%29.md)
- [init(marketingContent:)](subscriptionperiodgroupset/init%28marketingcontent_%29.md)
- [init(marketingContent:label:)](subscriptionperiodgroupset/init%28marketingcontent_label_%29.md)

### Creating the group style

- [subscriptionStoreOptionGroupStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstoreoptiongroupstyle%28_:%29): Sets the style subscription store views within this view use to display groups of subscription options.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StoreContent](storecontent.md)

## See Also

### Declaring the structure of a subscription store

- [SubscriptionOptionGroup](subscriptionoptiongroup.md): A group of subscription options that includes optional views for labels and marketing content.
- [SubscriptionOptionGroupSet](subscriptionoptiongroupset.md): A set of groups of subscription options that include optional views for labels and marketing content.
- [SubscriptionOptionSection](subscriptionoptionsection.md)
- [StoreContent](storecontent.md): A type that represents the content of a store.
- [StoreContentBuilder](storecontentbuilder.md): A result builder that creates store content from closures that you provide.
