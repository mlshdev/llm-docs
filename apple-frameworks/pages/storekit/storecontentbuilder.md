> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storecontentbuilder](https://developer.apple.com/documentation/storekit/storecontentbuilder)

# StoreContentBuilder

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A result builder that creates store content from closures that you provide.

## Declaration

```swift
@resultBuilder struct StoreContentBuilder
```

## Topics

### Building store content

- [buildBlock(\_:)](storecontentbuilder/buildblock%28__%29.md)
- [buildEither(first:)](storecontentbuilder/buildeither%28first_%29.md)
- [buildEither(second:)](storecontentbuilder/buildeither%28second_%29.md)
- [buildExpression(\_:)](storecontentbuilder/buildexpression%28__%29.md)
- [buildIf(\_:)](storecontentbuilder/buildif%28__%29.md)
- [buildLimitedAvailability(\_:)](storecontentbuilder/buildlimitedavailability%28__%29.md)
- [TupleStoreContent](tuplestorecontent.md)

## See Also

### Declaring the structure of a subscription store

- [SubscriptionOptionGroup](subscriptionoptiongroup.md): A group of subscription options that includes optional views for labels and marketing content.
- [SubscriptionOptionGroupSet](subscriptionoptiongroupset.md): A set of groups of subscription options that include optional views for labels and marketing content.
- [SubscriptionPeriodGroupSet](subscriptionperiodgroupset.md)
- [SubscriptionOptionSection](subscriptionoptionsection.md)
- [StoreContent](storecontent.md): A type that represents the content of a store.
