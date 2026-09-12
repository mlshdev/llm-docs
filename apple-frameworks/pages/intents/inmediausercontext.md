> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediausercontext](https://developer.apple.com/documentation/intents/inmediausercontext)

# INMediaUserContext (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An object that provides user information to Siri.

## Declaration

```swift
class INMediaUserContext
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="overview"></a>

## Overview

When your media app launches, create an [INMediaUserContext](inmediausercontext.md). Provide the number of items the user has in their library and indicate whether the user has a current paid subscription. Then call [becomeCurrent()](inusercontext/becomecurrent%28%29.md) to share this user context with the system. The following code listing shows how to set the current context for a user with a paid subscription and a few hundred items in their library:

```swift
let context = INMediaUserContext()
context.numberOfLibraryItems = 345
context.subscriptionStatus = .subscribed
context.becomeCurrent()
```

## Topics

### Creating a new Media User Context

- [init()](inmediausercontext/init%28%29.md): Creates a new media user context object.

### Accessing the Media Context Information

- [numberOfLibraryItems](inmediausercontext/numberoflibraryitems-8rnf0.md): An approximate number of relevant items available in the users library.
- [subscriptionStatus](inmediausercontext/subscriptionstatus-swift.property.md): The user’s current subscription status.
- [INMediaUserContext.SubscriptionStatus](inmediausercontext/subscriptionstatus-swift.enum.md): Constants that describe the current description status.

## Relationships

### Inherits From

- [INUserContext](inusercontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### User Context

- [INUserContext](inusercontext.md): An object that provides user information to Siri.

# INMediaUserContext (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An object that provides user information to Siri.

## Declaration

```objectivec
@interface INMediaUserContext : INUserContext
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="overview"></a>

## Overview

When your media app launches, create an [INMediaUserContext](inmediausercontext.md). Provide the number of items the user has in their library and indicate whether the user has a current paid subscription. Then call [becomeCurrent](inusercontext/becomecurrent%28%29.md) to share this user context with the system. The following code listing shows how to set the current context for a user with a paid subscription and a few hundred items in their library:

```swift
let context = INMediaUserContext()
context.numberOfLibraryItems = 345
context.subscriptionStatus = .subscribed
context.becomeCurrent()
```

## Topics

### Creating a new Media User Context

- [init](inmediausercontext/init%28%29.md): Creates a new media user context object.

### Accessing the Media Context Information

- [numberOfLibraryItems](https://developer.apple.com/documentation/intents/inmediausercontext/numberoflibraryitems-881cf): An approximate number of relevant items available in the users library.
- [subscriptionStatus](inmediausercontext/subscriptionstatus-swift.property.md): The user’s current subscription status.
- [INMediaUserContextSubscriptionStatus](inmediausercontext/subscriptionstatus-swift.enum.md): Constants that describe the current description status.

## Relationships

### Inherits From

- [INUserContext](inusercontext.md)

## See Also

### User Context

- [INUserContext](inusercontext.md): An object that provides user information to Siri.
