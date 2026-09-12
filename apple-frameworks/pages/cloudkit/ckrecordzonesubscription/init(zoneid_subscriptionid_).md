> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzonesubscription/init(zoneid:subscriptionid:)](https://developer.apple.com/documentation/cloudkit/ckrecordzonesubscription/init(zoneid:subscriptionid:))

# init(zoneID:subscriptionID:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 6.0+ · Swift 4.2+

Creates a named subscription for all records in the specified record zone.

## Declaration

```swift
convenience init(zoneID: CKRecordZone.ID, subscriptionID: CKSubscription.ID)
```

## Parameters

- `zoneID`: The ID of the record zone that contains the records you want to monitor.
- `subscriptionID`: The subscription’s name. It must be unique in the container and must not be an empty string.

<a id="discussion"></a>

## Discussion

The subscription that this method returns is a zone-based subscription that generates push notifications when CloudKit changes any of the specified record zone’s records.

## See Also

### Creating a Zone-Based Subscription

- [init(zoneID:)](init%28zoneid_%29.md): Deprecated. Creates a subscription for all records in the specified record zone.
- [init(coder:)](init%28coder_%29.md): Creates a zone-based subscription from a serialized instance.
