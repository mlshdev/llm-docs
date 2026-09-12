> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerysubscription/options](https://developer.apple.com/documentation/cloudkit/ckquerysubscription/options)

# CKQuerySubscription.Options (Swift)

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Configuration options for a query subscription.

## Declaration

```swift
struct Options
```

## Topics

### Creating Query Subscription Options

- [init(rawValue:)](options/init%28rawvalue_%29.md): Creates a query subscription option using the specified raw value.

### Accessing Subscription Options

- [firesOnRecordCreation](options/firesonrecordcreation.md): An option that instructs CloudKit to send a push notification when it creates a record that matches a subscription’s criteria.
- [firesOnRecordDeletion](options/firesonrecorddeletion.md): An option that instructs CloudKit to send a push notification when it deletes a record that matches a subscription’s criteria.
- [firesOnRecordUpdate](options/firesonrecordupdate.md): An option that instructs CloudKit to send a push notification when it modifies a record that matches a subscription’s criteria.
- [firesOnce](options/firesonce.md): An option that instructs CloudKit to send a push notification only once.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessing the Subscription Search Parameters

- [predicate](predicate.md): The matching criteria to apply to records.
- [querySubscriptionOptions](querysubscriptionoptions.md): Options that define the behavior of the subscription.

# CKQuerySubscriptionOptions (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Configuration options for a query subscription.

## Declaration

```objectivec
enum CKQuerySubscriptionOptions : NSUInteger;
```

## Topics

### Accessing Subscription Options

- [CKQuerySubscriptionOptionsFiresOnRecordCreation](options/firesonrecordcreation.md): An option that instructs CloudKit to send a push notification when it creates a record that matches a subscription’s criteria.
- [CKQuerySubscriptionOptionsFiresOnRecordDeletion](options/firesonrecorddeletion.md): An option that instructs CloudKit to send a push notification when it deletes a record that matches a subscription’s criteria.
- [CKQuerySubscriptionOptionsFiresOnRecordUpdate](options/firesonrecordupdate.md): An option that instructs CloudKit to send a push notification when it modifies a record that matches a subscription’s criteria.
- [CKQuerySubscriptionOptionsFiresOnce](options/firesonce.md): An option that instructs CloudKit to send a push notification only once.

## See Also

### Accessing the Subscription Search Parameters

- [predicate](predicate.md): The matching criteria to apply to records.
- [querySubscriptionOptions](querysubscriptionoptions.md): Options that define the behavior of the subscription.
