> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediausercontext/subscriptionstatus-swift.property](https://developer.apple.com/documentation/intents/inmediausercontext/subscriptionstatus-swift.property)

# subscriptionStatus (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The user’s current subscription status.

## Declaration

```swift
var subscriptionStatus: INMediaUserContext.SubscriptionStatus { get set }
```

## See Also

### Accessing the Media Context Information

- [numberOfLibraryItems](numberoflibraryitems-8rnf0.md): An approximate number of relevant items available in the users library.
- [INMediaUserContext.SubscriptionStatus](subscriptionstatus-swift.enum.md): Constants that describe the current description status.

# subscriptionStatus (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The user’s current subscription status.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) INMediaUserContextSubscriptionStatus subscriptionStatus;
```

```objectivec
@property (atomic, assign, readwrite) INMediaUserContextSubscriptionStatus subscriptionStatus;
```

## See Also

### Accessing the Media Context Information

- [numberOfLibraryItems](https://developer.apple.com/documentation/intents/inmediausercontext/numberoflibraryitems-881cf): An approximate number of relevant items available in the users library.
- [INMediaUserContextSubscriptionStatus](subscriptionstatus-swift.enum.md): Constants that describe the current description status.
