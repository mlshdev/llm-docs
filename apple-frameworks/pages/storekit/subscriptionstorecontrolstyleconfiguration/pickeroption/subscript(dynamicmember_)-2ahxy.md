> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/subscript(dynamicmember:)-2ahxy](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/subscript(dynamicmember:)-2ahxy)

# subscript(dynamicMember:)

**Framework:** StoreKit  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

Facilitates accessing optional subscription properties on a picker option value.

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<Product.SubscriptionInfo, T?>) -> T? { get }
```

<a id="Discussion"></a>

## Discussion

You don’t use this subscript directly. Instead, access the properties of a [Product.SubscriptionInfo](../../product/subscriptioninfo.md) directly on a [SubscriptionStoreControlStyleConfiguration.PickerOption](../pickeroption.md) value.

## See Also

### Dynamic member lookup support

- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-4f3i1.md): Facilitates accessing subscription properties on a picker option value.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-8bsxh.md): Facilitates accessing product properties on a picker option value.
