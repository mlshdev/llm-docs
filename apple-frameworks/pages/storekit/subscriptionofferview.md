> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionofferview](https://developer.apple.com/documentation/storekit/subscriptionofferview)

# SubscriptionOfferView

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

## Declaration

```swift
@MainActor @preconcurrency struct SubscriptionOfferView<Icon, PlaceholderIcon> where Icon : View, PlaceholderIcon : View
```

## Topics

### Initializers

- [init(\_:)](subscriptionofferview/init%28__%29.md)
- [init(groupID:visibleRelationship:)](subscriptionofferview/init%28groupid_visiblerelationship_%29.md)
- [init(groupID:visibleRelationship:icon:)](subscriptionofferview/init%28groupid_visiblerelationship_icon_%29.md)
- [init(groupID:visibleRelationship:icon:placeholderIcon:)](subscriptionofferview/init%28groupid_visiblerelationship_icon_placeholdericon_%29.md)
- [init(groupID:visibleRelationship:useAppIcon:)](subscriptionofferview/init%28groupid_visiblerelationship_useappicon_%29.md)
- [init(id:icon:placeholderIcon:)](subscriptionofferview/init%28id_icon_placeholdericon_%29.md)
- [init(id:prefersPromotionalIcon:)](subscriptionofferview/init%28id_preferspromotionalicon_%29.md)
- [init(id:prefersPromotionalIcon:icon:)](subscriptionofferview/init%28id_preferspromotionalicon_icon_%29.md)
- [init(id:prefersPromotionalIcon:icon:placeholderIcon:)](subscriptionofferview/init%28id_preferspromotionalicon_icon_placeholdericon_%29.md)
- [init(\_:icon:)](subscriptionofferview/init%28__icon_%29.md)
- [init(\_:prefersPromotionalIcon:)](subscriptionofferview/init%28__preferspromotionalicon_%29.md)
- [init(\_:prefersPromotionalIcon:icon:)](subscriptionofferview/init%28__preferspromotionalicon_icon_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Merchandising In-App Purchases, subscriptions, and offers

- [ProductView](productview.md): A view that merchandises an individual In-App Purchase product.
- [StoreView](storeview.md): A view that merchandises a collection of In-App Purchase products.
- [SubscriptionStoreView](subscriptionstoreview.md): A view that merchandises a collection of auto-renewable subscription options that belong to the same subscription group.
- [Backyard Birds: Building an app with SwiftData and widgets](https://developer.apple.com/documentation/swiftui/backyard-birds-sample): Create an app with persistent data, interactive widgets, and an all new in-app purchase experience.
