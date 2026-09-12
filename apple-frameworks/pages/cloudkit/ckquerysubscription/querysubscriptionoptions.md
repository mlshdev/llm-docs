> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerysubscription/querysubscriptionoptions](https://developer.apple.com/documentation/cloudkit/ckquerysubscription/querysubscriptionoptions)

# querySubscriptionOptions (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Options that define the behavior of the subscription.

## Declaration

```swift
var querySubscriptionOptions: CKQuerySubscription.Options { get }
```

<a id="discussion"></a>

## Discussion

Set the value of this property at initialization time. When you configure a query-based subscription, use one of the following values:

- [firesOnRecordCreation](options/firesonrecordcreation.md)
- [firesOnRecordUpdate](options/firesonrecordupdate.md)
- [firesOnRecordDeletion](options/firesonrecorddeletion.md)

If you don’t set an option, the system throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md).

## See Also

### Accessing the Subscription Search Parameters

- [predicate](predicate.md): The matching criteria to apply to records.
- [CKQuerySubscription.Options](options.md): Configuration options for a query subscription.

# querySubscriptionOptions (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Options that define the behavior of the subscription.

## Declaration

```objectivec
@property (assign, readonly) CKQuerySubscriptionOptions querySubscriptionOptions;
```

<a id="discussion"></a>

## Discussion

Set the value of this property at initialization time. When you configure a query-based subscription, use one of the following values:

- [CKQuerySubscriptionOptionsFiresOnRecordCreation](options/firesonrecordcreation.md)
- [CKQuerySubscriptionOptionsFiresOnRecordUpdate](options/firesonrecordupdate.md)
- [CKQuerySubscriptionOptionsFiresOnRecordDeletion](options/firesonrecorddeletion.md)

If you don’t set an option, the system throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md).

## See Also

### Accessing the Subscription Search Parameters

- [predicate](predicate.md): The matching criteria to apply to records.
- [CKQuerySubscriptionOptions](options.md): Configuration options for a query subscription.
