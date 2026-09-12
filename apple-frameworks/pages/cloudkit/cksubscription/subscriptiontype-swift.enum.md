> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/subscriptiontype-swift.enum](https://developer.apple.com/documentation/cloudkit/cksubscription/subscriptiontype-swift.enum)

# CKSubscription.SubscriptionType (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

Constants that identify a subscription’s behavior.

## Declaration

```swift
enum SubscriptionType
```

## Topics

### Subscription Types

- [CKSubscription.SubscriptionType.query](subscriptiontype-swift.enum/query.md): A constant that indicates the subscription is query-based.
- [CKSubscription.SubscriptionType.database](subscriptiontype-swift.enum/database.md): A constant that indicates the subscription is database-based.
- [CKSubscription.SubscriptionType.recordZone](subscriptiontype-swift.enum/recordzone.md): A constant that indicates the subscription is zone-based.

### Initializers

- [init(rawValue:)](subscriptiontype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Subscription Metadata

- [subscriptionID](subscriptionid-6fp3j.md): The subscription’s unique identifier.
- [CKSubscription.ID](id.md): A type that represents a subscription’s identifier.
- [subscriptionType](subscriptiontype-swift.property.md): The behavior that a subscription provides.

# CKSubscriptionType (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

Constants that identify a subscription’s behavior.

## Declaration

```objectivec
enum CKSubscriptionType : NSInteger;
```

## Topics

### Subscription Types

- [CKSubscriptionTypeQuery](subscriptiontype-swift.enum/query.md): A constant that indicates the subscription is query-based.
- [CKSubscriptionTypeDatabase](subscriptiontype-swift.enum/database.md): A constant that indicates the subscription is database-based.
- [CKSubscriptionTypeRecordZone](subscriptiontype-swift.enum/recordzone.md): A constant that indicates the subscription is zone-based.

## See Also

### Accessing the Subscription Metadata

- [subscriptionID](subscriptionid-12vxy.md): The subscription’s unique identifier.
- [CKSubscriptionID](../cksubscriptionid.md): A type that represents a subscription’s identifier.
- [subscriptionType](subscriptiontype-swift.property.md): The behavior that a subscription provides.
