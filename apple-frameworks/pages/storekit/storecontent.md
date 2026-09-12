> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storecontent](https://developer.apple.com/documentation/storekit/storecontent)

# StoreContent

**Framework:** StoreKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type that represents the content of a store.

## Declaration

```swift
@MainActor @preconcurrency protocol StoreContent
```

## Topics

### Implementing store content

- [body](storecontent/body-swift.property.md)
- [Body](storecontent/body-swift.associatedtype.md)

### Configuring store content

- [subscriptionStoreOptionGroupStyle(\_:)](storecontent/subscriptionstoreoptiongroupstyle%28__%29.md)
- [subscriptionStoreButtonLabel(\_:)](storecontent/subscriptionstorebuttonlabel%28__%29.md)
- [storeButton(\_:for:)](storecontent/storebutton%28__for_%29.md)
- [subscriptionStoreControlStyle(\_:placement:)](storecontent/subscriptionstorecontrolstyle%28__placement_%29.md)
- [productDescription(\_:)](storecontent/productdescription%28__%29.md)

### Configuring backgrounds

- [subscriptionStoreControlBackground(\_:)](storecontent/subscriptionstorecontrolbackground%28__%29-10hv8.md)
- [subscriptionStoreControlBackground(\_:)](storecontent/subscriptionstorecontrolbackground%28__%29-3xzai.md)
- [subscriptionStorePickerItemBackground(\_:)](storecontent/subscriptionstorepickeritembackground%28__%29.md)
- [subscriptionStorePickerItemBackground(\_:in:)](storecontent/subscriptionstorepickeritembackground%28__in_%29.md)

### Supporting types

- [IdentifiedStoreContent](identifiedstorecontent.md): The type of SwiftUI view that StoreKit transforms store content into.

## Relationships

### Conforming Types

- [SubscriptionOptionGroup](subscriptionoptiongroup.md)
- [SubscriptionOptionGroupSet](subscriptionoptiongroupset.md)
- [SubscriptionOptionSection](subscriptionoptionsection.md)
- [SubscriptionPeriodGroupSet](subscriptionperiodgroupset.md)
- [TupleStoreContent](tuplestorecontent.md)

## See Also

### Declaring the structure of a subscription store

- [SubscriptionOptionGroup](subscriptionoptiongroup.md): A group of subscription options that includes optional views for labels and marketing content.
- [SubscriptionOptionGroupSet](subscriptionoptiongroupset.md): A set of groups of subscription options that include optional views for labels and marketing content.
- [SubscriptionPeriodGroupSet](subscriptionperiodgroupset.md)
- [SubscriptionOptionSection](subscriptionoptionsection.md)
- [StoreContentBuilder](storecontentbuilder.md): A result builder that creates store content from closures that you provide.
