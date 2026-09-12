> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/subscriptionid-6fp3j](https://developer.apple.com/documentation/cloudkit/cksubscription/subscriptionid-6fp3j)

# subscriptionID

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 6.0+ · Swift 4.2+

The subscription’s unique identifier.

## Declaration

```swift
var subscriptionID: CKSubscription.ID { get }
```

<a id="discussion"></a>

## Discussion

This property’s value is the subscription ID that you provide to the `init(recordType:predicate:subscriptionID:options:)` or `init(zoneID:subscriptionID:options:)` methods when you create the subscription. If you use a different method to create the subscription, CloudKit automatically assigns a UUID as the subscription ID.

## See Also

### Accessing the Subscription Metadata

- [CKSubscription.ID](id.md): A type that represents a subscription’s identifier.
- [subscriptionType](subscriptiontype-swift.property.md): The behavior that a subscription provides.
- [CKSubscription.SubscriptionType](subscriptiontype-swift.enum.md): Constants that identify a subscription’s behavior.
