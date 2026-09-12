> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerysubscription/options/firesonce](https://developer.apple.com/documentation/cloudkit/ckquerysubscription/options/firesonce)

# firesOnce (Swift)

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

An option that instructs CloudKit to send a push notification only once.

## Declaration

```swift
static var firesOnce: CKQuerySubscription.Options { get }
```

<a id="discussion"></a>

## Discussion

You combine this option with one or more of the other subscription options. This option applies only to query-based subscriptions. CloudKit deletes the subscription after it sends the push notification. If you want to generate subsequent push notifications using the same criteria, create and save a new subscription.

## See Also

### Accessing Subscription Options

- [firesOnRecordCreation](firesonrecordcreation.md): An option that instructs CloudKit to send a push notification when it creates a record that matches a subscription’s criteria.
- [firesOnRecordDeletion](firesonrecorddeletion.md): An option that instructs CloudKit to send a push notification when it deletes a record that matches a subscription’s criteria.
- [firesOnRecordUpdate](firesonrecordupdate.md): An option that instructs CloudKit to send a push notification when it modifies a record that matches a subscription’s criteria.

# CKQuerySubscriptionOptionsFiresOnce (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

An option that instructs CloudKit to send a push notification only once.

## Declaration

```objectivec
CKQuerySubscriptionOptionsFiresOnce
```

<a id="discussion"></a>

## Discussion

You combine this option with one or more of the other subscription options. This option applies only to query-based subscriptions. CloudKit deletes the subscription after it sends the push notification. If you want to generate subsequent push notifications using the same criteria, create and save a new subscription.

## See Also

### Accessing Subscription Options

- [CKQuerySubscriptionOptionsFiresOnRecordCreation](firesonrecordcreation.md): An option that instructs CloudKit to send a push notification when it creates a record that matches a subscription’s criteria.
- [CKQuerySubscriptionOptionsFiresOnRecordDeletion](firesonrecorddeletion.md): An option that instructs CloudKit to send a push notification when it deletes a record that matches a subscription’s criteria.
- [CKQuerySubscriptionOptionsFiresOnRecordUpdate](firesonrecordupdate.md): An option that instructs CloudKit to send a push notification when it modifies a record that matches a subscription’s criteria.
