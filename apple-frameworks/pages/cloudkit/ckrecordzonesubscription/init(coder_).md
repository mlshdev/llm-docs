> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordzonesubscription/init(coder:)](https://developer.apple.com/documentation/cloudkit/ckrecordzonesubscription/init(coder:))

# init(coder:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a zone-based subscription from a serialized instance.

## Declaration

```swift
init(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: The coder for decoding the serialized record zone subscription.

## See Also

### Creating a Zone-Based Subscription

- [init(zoneID:)](init%28zoneid_%29.md): Deprecated. Creates a subscription for all records in the specified record zone.
- [init(zoneID:subscriptionID:)](init%28zoneid_subscriptionid_%29.md): Creates a named subscription for all records in the specified record zone.

# initWithCoder: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a zone-based subscription from a serialized instance.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: The coder for decoding the serialized record zone subscription.

## See Also

### Creating a Zone-Based Subscription

- [initWithZoneID:](init%28zoneid_%29.md): Deprecated. Creates a subscription for all records in the specified record zone.
- [initWithZoneID:subscriptionID:](initwithzoneid_subscriptionid_.md): Creates a named subscription for all records in the specified record zone.
