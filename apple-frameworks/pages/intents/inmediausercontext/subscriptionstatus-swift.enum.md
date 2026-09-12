> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediausercontext/subscriptionstatus-swift.enum](https://developer.apple.com/documentation/intents/inmediausercontext/subscriptionstatus-swift.enum)

# INMediaUserContext.SubscriptionStatus (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the current description status.

## Declaration

```swift
enum SubscriptionStatus
```

## Topics

### Constants

- [INMediaUserContext.SubscriptionStatus.unknown](subscriptionstatus-swift.enum/unknown.md): A code that indicates the app doesn’t offer subscriptions or the subscription status is unavailable.
- [INMediaUserContext.SubscriptionStatus.notSubscribed](subscriptionstatus-swift.enum/notsubscribed.md): A code that indicates the user isn’t a subscriber, but subscriptions are available.
- [INMediaUserContext.SubscriptionStatus.subscribed](subscriptionstatus-swift.enum/subscribed.md): A code that indicates the user currently has a subscription.

### Initializers

- [init(rawValue:)](subscriptionstatus-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Media Context Information

- [numberOfLibraryItems](numberoflibraryitems-8rnf0.md): An approximate number of relevant items available in the users library.
- [subscriptionStatus](subscriptionstatus-swift.property.md): The user’s current subscription status.

# INMediaUserContextSubscriptionStatus (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe the current description status.

## Declaration

```objectivec
enum INMediaUserContextSubscriptionStatus : NSInteger;
```

## Topics

### Constants

- [INMediaUserContextSubscriptionStatusUnknown](subscriptionstatus-swift.enum/unknown.md): A code that indicates the app doesn’t offer subscriptions or the subscription status is unavailable.
- [INMediaUserContextSubscriptionStatusNotSubscribed](subscriptionstatus-swift.enum/notsubscribed.md): A code that indicates the user isn’t a subscriber, but subscriptions are available.
- [INMediaUserContextSubscriptionStatusSubscribed](subscriptionstatus-swift.enum/subscribed.md): A code that indicates the user currently has a subscription.

## See Also

### Accessing the Media Context Information

- [numberOfLibraryItems](https://developer.apple.com/documentation/intents/inmediausercontext/numberoflibraryitems-881cf): An approximate number of relevant items available in the users library.
- [subscriptionStatus](subscriptionstatus-swift.property.md): The user’s current subscription status.
