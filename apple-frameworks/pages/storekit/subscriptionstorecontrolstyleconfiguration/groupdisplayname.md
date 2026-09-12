> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyleconfiguration/groupdisplayname](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/groupdisplayname)

# groupDisplayName

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The localized display name of the subscription group that the subscription store view merchandises.

## Declaration

```swift
var groupDisplayName: String { get }
```

<a id="Discussion"></a>

## Discussion

This property is the same as accessing [groupDisplayName](../product/subscriptioninfo/groupdisplayname.md) on a [Product.SubscriptionInfo](../product/subscriptioninfo.md) value. Because all options within a subscription store view belong to the same subscription group, using the [groupDisplayName](groupdisplayname.md) property is more convenient than getting the group display name from an arbitrary subscription option.

## See Also

### Getting subscription group properties

- [autoRenewPreference](autorenewpreference.md): The auto-renewable subscripton product that renews at the next billing cycle.
- [allOptions](alloptions.md): All subscription options in the subscription group.
