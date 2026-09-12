> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionoptionsection](https://developer.apple.com/documentation/storekit/subscriptionoptionsection)

# SubscriptionOptionSection

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency struct SubscriptionOptionSection<Header, Content, Footer> where Header : View, Content : StoreContent, Footer : View
```

## Topics

### Creating subscription option sections

- [init(\_:isIncluded:footer:)](subscriptionoptionsection/init%28__isincluded_footer_%29-17lo3.md): Conforms when `Header` is `Text`, `Content` is `Never`, and `Footer` conforms to `View`.
- [init(\_:isIncluded:footer:)](subscriptionoptionsection/init%28__isincluded_footer_%29-36k79.md): Conforms when `Header` is `Text`, `Content` is `Never`, and `Footer` conforms to `View`.
- [init(isIncluded:header:footer:)](subscriptionoptionsection/init%28isincluded_header_footer_%29.md): Conforms when `Header` conforms to `View`, `Content` is `Never`, and `Footer` conforms to `View`.

### Choosing a subscription option group style

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
- [SubscriptionPeriodGroupSet](subscriptionperiodgroupset.md)
- [StoreContent](storecontent.md): A type that represents the content of a store.
- [StoreContentBuilder](storecontentbuilder.md): A result builder that creates store content from closures that you provide.
