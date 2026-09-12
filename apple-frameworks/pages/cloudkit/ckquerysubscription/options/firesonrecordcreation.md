> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerysubscription/options/firesonrecordcreation](https://developer.apple.com/documentation/cloudkit/ckquerysubscription/options/firesonrecordcreation)

# firesOnRecordCreation (Swift)

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

An option that instructs CloudKit to send a push notification when it creates a record that matches a subscription’s criteria.

## Declaration

```swift
static var firesOnRecordCreation: CKQuerySubscription.Options { get }
```

## See Also

### Accessing Subscription Options

- [firesOnRecordDeletion](firesonrecorddeletion.md): An option that instructs CloudKit to send a push notification when it deletes a record that matches a subscription’s criteria.
- [firesOnRecordUpdate](firesonrecordupdate.md): An option that instructs CloudKit to send a push notification when it modifies a record that matches a subscription’s criteria.
- [firesOnce](firesonce.md): An option that instructs CloudKit to send a push notification only once.

# CKQuerySubscriptionOptionsFiresOnRecordCreation (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

An option that instructs CloudKit to send a push notification when it creates a record that matches a subscription’s criteria.

## Declaration

```objectivec
CKQuerySubscriptionOptionsFiresOnRecordCreation
```

## See Also

### Accessing Subscription Options

- [CKQuerySubscriptionOptionsFiresOnRecordDeletion](firesonrecorddeletion.md): An option that instructs CloudKit to send a push notification when it deletes a record that matches a subscription’s criteria.
- [CKQuerySubscriptionOptionsFiresOnRecordUpdate](firesonrecordupdate.md): An option that instructs CloudKit to send a push notification when it modifies a record that matches a subscription’s criteria.
- [CKQuerySubscriptionOptionsFiresOnce](firesonce.md): An option that instructs CloudKit to send a push notification only once.
