> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/subscript(dynamicmember:)-8sl2m](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/subscript(dynamicmember:)-8sl2m)

# subscript(dynamicMember:)

**Framework:** StoreKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Facilitates accessing optional subscription properties on an option value.

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<Product.SubscriptionInfo, T?>) -> T? { get }
```

<a id="Discussion"></a>

## Discussion

You don’t use this subscript directly. Instead, access the properties of a [Product.SubscriptionInfo](../../product/subscriptioninfo.md) directly on a [SubscriptionStoreControlStyleConfiguration.Option](../option.md) value. For an example of using a dynamic member lookup, see [SubscriptionStoreControlStyleConfiguration.Option](../option.md).

## See Also

### Looking up dynamic members

- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-wjww.md): Facilitates accessing subscription properties on an option value.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-9g2sm.md): Facilitates accessing product properties on an option value.
