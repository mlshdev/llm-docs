> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/subscriptionid-12vxy](https://developer.apple.com/documentation/cloudkit/cksubscription/subscriptionid-12vxy)

# subscriptionID

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

The subscription’s unique identifier.

## Declaration

```objectivec
@property (copy, readonly) CKSubscriptionID subscriptionID;
```

<a id="discussion"></a>

## Discussion

This property’s value is the subscription ID that you provide to the `initWithRecordType:predicate:subscriptionID:options:` or `initWithZoneID:subscriptionID:options:` methods when you create the subscription. If you use a different method to create the subscription, CloudKit automatically assigns a UUID as the subscription ID.

## See Also

### Accessing the Subscription Metadata

- [CKSubscriptionID](../cksubscriptionid.md): A type that represents a subscription’s identifier.
- [subscriptionType](subscriptiontype-swift.property.md): The behavior that a subscription provides.
- [CKSubscriptionType](subscriptiontype-swift.enum.md): Constants that identify a subscription’s behavior.
