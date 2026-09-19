> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/subscriptioninfo/subscriptiongroupid

# subscriptionGroupID

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The subscription group identifier for this subscription.

## Declaration

```swift
let subscriptionGroupID: String
```

<a id="Discussion"></a>

## Discussion

Auto-renewable subscriptions always belong to a subscription group. You create the subscription group identifiers in App Store Connect before you create and add an auto-renewable subscription. For more information about subscription groups, see [Offer auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev75708c031).

## See Also

### Identifying the subscription group

- [groupDisplayName](groupdisplayname.md): The localized name of the subscription group, suitable for display.
- [groupLevel](grouplevel.md): The rank of the subscription relative to other subscriptions in the same subscription group.
