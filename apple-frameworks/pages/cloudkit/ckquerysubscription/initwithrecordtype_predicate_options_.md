> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerysubscription/initwithrecordtype:predicate:options:](https://developer.apple.com/documentation/cloudkit/ckquerysubscription/initwithrecordtype:predicate:options:)

# initWithRecordType:predicate:options:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 6.0)

Creates a query-based subscription that queries records of a specific type.

## Declaration

```objectivec
- (instancetype) initWithRecordType:(CKRecordType) recordType predicate:(NSPredicate *) predicate options:(CKQuerySubscriptionOptions) querySubscriptionOptions;
```

## Parameters

- `recordType`: The record’s type. You’re responsible for defining your app’s record types. This parameter must not be `nil` or an empty string.
- `predicate`: The predicate that identifies the records for inclusion in the subscription. This parameter must not be `nil`. For information about the operators that predicates support, see the discussion in [CKQuery](../ckquery.md).
- `querySubscriptionOptions`: A bitmask of configuration options. See [CKQuerySubscriptionOptions](options.md) for more information.

<a id="discussion"></a>

## Discussion

The subscription that this method returns is a query-based subscription with a scope that includes all of the user’s record zones. When CloudKit modifies a record that matches the specified type and predicate, it uses `querySubscriptionOptions` to determine whether to send a push notification.

## See Also

### Creating a Subscription

- [initWithRecordType:predicate:subscriptionID:options:](initwithrecordtype_predicate_subscriptionid_options_.md): Creates a named query-based subscription that queries records of a specific type.
- [initWithCoder:](init%28coder_%29.md): Creates a query-based subscription from a serialized instance.
