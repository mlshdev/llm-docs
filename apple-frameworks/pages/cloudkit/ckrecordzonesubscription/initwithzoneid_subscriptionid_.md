> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzonesubscription/initwithzoneid:subscriptionid:](https://developer.apple.com/documentation/cloudkit/ckrecordzonesubscription/initwithzoneid:subscriptionid:)

# initWithZoneID:subscriptionID:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a named subscription for all records in the specified record zone.

## Declaration

```objectivec
- (instancetype) initWithZoneID:(CKRecordZoneID *) zoneID subscriptionID:(CKSubscriptionID) subscriptionID;
```

## Parameters

- `zoneID`: The ID of the record zone that contains the records you want to monitor. This parameter must not be `nil`.
- `subscriptionID`: The subscription’s name. It must be unique in the container, and must not be `nil` or an empty string.

<a id="discussion"></a>

## Discussion

The subscription that this method returns is a zone-based subscription that generates push notifications when CloudKit changes any of the specified record zone’s records.

## See Also

### Creating a Zone-Based Subscription

- [initWithZoneID:](init%28zoneid_%29.md): Deprecated. Creates a subscription for all records in the specified record zone.
- [initWithCoder:](init%28coder_%29.md): Creates a zone-based subscription from a serialized instance.
