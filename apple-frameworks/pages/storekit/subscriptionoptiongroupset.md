> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionoptiongroupset](https://developer.apple.com/documentation/storekit/subscriptionoptiongroupset)

# SubscriptionOptionGroupSet

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A set of groups of subscription options that include optional views for labels and marketing content.

## Declaration

```swift
@MainActor @preconcurrency struct SubscriptionOptionGroupSet<GroupID, Label, MarketingContent> where GroupID : Hashable, Label : View, MarketingContent : View
```

## Topics

### Creating subscription option group sets

- [init(idType:groupedBy:label:)](subscriptionoptiongroupset/init%28idtype_groupedby_label_%29.md)
- [init(idType:groupedBy:label:marketingContent:)](subscriptionoptiongroupset/init%28idtype_groupedby_label_marketingcontent_%29.md)

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
- [SubscriptionPeriodGroupSet](subscriptionperiodgroupset.md)
- [SubscriptionOptionSection](subscriptionoptionsection.md)
- [StoreContent](storecontent.md): A type that represents the content of a store.
- [StoreContentBuilder](storecontentbuilder.md): A result builder that creates store content from closures that you provide.
