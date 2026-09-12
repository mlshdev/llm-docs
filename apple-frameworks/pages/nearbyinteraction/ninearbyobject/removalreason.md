> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/ninearbyobject/removalreason](https://developer.apple.com/documentation/nearbyinteraction/ninearbyobject/removalreason)

# NINearbyObject.RemovalReason (Swift)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · watchOS 7.3+

The reason a session removed a nearby object.

## Declaration

```swift
enum RemovalReason
```

<a id="overview"></a>

## Overview

Each case is a possible value of the `reason` argument to the delegate’s [session(\_:didRemove:reason:)](../nisessiondelegate/session%28__didremove_reason_%29.md) callback.

## Topics

### Reasons

- [NINearbyObject.RemovalReason.peerEnded](removalreason/peerended.md): The peer ended the session.
- [NINearbyObject.RemovalReason.timeout](removalreason/timeout.md): NI timed out the session.
- [NINearbyObject.RemovalReason.peerEnded](removalreason/peerended.md): The peer ended the session.
- [NINearbyObject.RemovalReason.timeout](removalreason/timeout.md): NI timed out the session.

### Initializers

- [init(rawValue:)](removalreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NINearbyObjectRemovalReason (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

The reason a session removed a nearby object.

## Declaration

```objectivec
enum NINearbyObjectRemovalReason : NSInteger;
```

<a id="overview"></a>

## Overview

Each case is a possible value of the `reason` argument to the delegate’s [session:didRemoveNearbyObjects:withReason:](../nisessiondelegate/session%28__didremove_reason_%29.md) callback.

## Topics

### Reasons

- [NINearbyObjectRemovalReasonPeerEnded](removalreason/peerended.md): The peer ended the session.
- [NINearbyObjectRemovalReasonTimeout](removalreason/timeout.md): NI timed out the session.
- [NINearbyObjectRemovalReasonPeerEnded](removalreason/peerended.md): The peer ended the session.
- [NINearbyObjectRemovalReasonTimeout](removalreason/timeout.md): NI timed out the session.
