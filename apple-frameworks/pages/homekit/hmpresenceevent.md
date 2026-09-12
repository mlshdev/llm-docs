> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmpresenceevent](https://developer.apple.com/documentation/homekit/hmpresenceevent)

# HMPresenceEvent (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that triggers based on the presence of users in the home.

## Declaration

```swift
class HMPresenceEvent
```

## Topics

### Creating a presence event

- [init(presenceEventType:presenceUserType:)](hmpresenceevent/init%28presenceeventtype_presenceusertype_%29.md): Creates a new presence event with the specified event and user presence types.

### Inspecting a presence event

- [presenceEventType](hmpresenceevent/presenceeventtype.md): The event type that triggers the presence event.
- [presenceUserType](hmpresenceevent/presenceusertype.md): The user type whose presence triggers the event.

## Relationships

### Inherits From

- [HMEvent](hmevent.md)

### Inherited By

- [HMMutablePresenceEvent](hmmutablepresenceevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User presence

- [HMMutablePresenceEvent](hmmutablepresenceevent.md): A mutable event that triggers based on the presence of users in the home.
- [HMPresenceEventType](hmpresenceeventtype.md): The user presence type that triggers a presence event.
- [HMPresenceEventUserType](hmpresenceeventusertype.md): The group of users that triggers a presence event.

# HMPresenceEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An event that triggers based on the presence of users in the home.

## Declaration

```objectivec
@interface HMPresenceEvent : HMEvent
```

## Topics

### Creating a presence event

- [initWithPresenceEventType:presenceUserType:](hmpresenceevent/init%28presenceeventtype_presenceusertype_%29.md): Creates a new presence event with the specified event and user presence types.

### Inspecting a presence event

- [presenceEventType](hmpresenceevent/presenceeventtype.md): The event type that triggers the presence event.
- [presenceUserType](hmpresenceevent/presenceusertype.md): The user type whose presence triggers the event.

## Relationships

### Inherits From

- [HMEvent](hmevent.md)

### Inherited By

- [HMMutablePresenceEvent](hmmutablepresenceevent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### User presence

- [HMMutablePresenceEvent](hmmutablepresenceevent.md): A mutable event that triggers based on the presence of users in the home.
- [HMPresenceEventType](hmpresenceeventtype.md): The user presence type that triggers a presence event.
- [HMPresenceEventUserType](hmpresenceeventusertype.md): The group of users that triggers a presence event.
