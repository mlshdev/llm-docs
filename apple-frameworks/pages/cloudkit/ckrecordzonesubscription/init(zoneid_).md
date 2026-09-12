> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzonesubscription/init(zoneid:)](https://developer.apple.com/documentation/cloudkit/ckrecordzonesubscription/init(zoneid:))

# init(zoneID:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 6.0)

Creates a subscription for all records in the specified record zone.

## Declaration

```swift
convenience init(zoneID: CKRecordZone.ID)
```

## Parameters

- `zoneID`: The ID of the record zone that contains the records you want to monitor. This parameter must not be `nil`.

<a id="discussion"></a>

## Discussion

The subscription that this method returns is a zone-based subscription that generates push notifications when CloudKit changes any of the specified record zone’s records.

## See Also

### Creating a Zone-Based Subscription

- [init(zoneID:subscriptionID:)](init%28zoneid_subscriptionid_%29.md): Creates a named subscription for all records in the specified record zone.
- [init(coder:)](init%28coder_%29.md): Creates a zone-based subscription from a serialized instance.

# initWithZoneID: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 6.0)

Creates a subscription for all records in the specified record zone.

## Declaration

```objectivec
- (instancetype) initWithZoneID:(CKRecordZoneID *) zoneID;
```

## Parameters

- `zoneID`: The ID of the record zone that contains the records you want to monitor. This parameter must not be `nil`.

<a id="discussion"></a>

## Discussion

The subscription that this method returns is a zone-based subscription that generates push notifications when CloudKit changes any of the specified record zone’s records.

## See Also

### Creating a Zone-Based Subscription

- [initWithZoneID:subscriptionID:](initwithzoneid_subscriptionid_.md): Creates a named subscription for all records in the specified record zone.
- [initWithCoder:](init%28coder_%29.md): Creates a zone-based subscription from a serialized instance.
