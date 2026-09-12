> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerysubscription/init(coder:)](https://developer.apple.com/documentation/cloudkit/ckquerysubscription/init(coder:))

# init(coder:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a query-based subscription from a serialized instance.

## Declaration

```swift
init(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: The coder for decoding the serialized query subscription.

## See Also

### Creating a Subscription

- [init(recordType:predicate:subscriptionID:options:)](init%28recordtype_predicate_subscriptionid_options_%29.md): Creates a named query-based subscription that queries records of a specific type.

# initWithCoder: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a query-based subscription from a serialized instance.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: The coder for decoding the serialized query subscription.

## See Also

### Creating a Subscription

- [initWithRecordType:predicate:options:](initwithrecordtype_predicate_options_.md): Deprecated. Creates a query-based subscription that queries records of a specific type.
- [initWithRecordType:predicate:subscriptionID:options:](initwithrecordtype_predicate_subscriptionid_options_.md): Creates a named query-based subscription that queries records of a specific type.
