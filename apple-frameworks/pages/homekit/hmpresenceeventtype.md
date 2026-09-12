> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmpresenceeventtype](https://developer.apple.com/documentation/homekit/hmpresenceeventtype)

# HMPresenceEventType (Swift)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The user presence type that triggers a presence event.

## Declaration

```swift
enum HMPresenceEventType
```

## Topics

### Specifying presence type

- [HMPresenceEventType.everyEntry](hmpresenceeventtype/everyentry.md): Triggers the event every time a user enters the home.
- [HMPresenceEventType.everyExit](hmpresenceeventtype/everyexit.md): Triggers the event every time a user leaves the home.
- [HMPresenceEventType.firstEntry](hmpresenceeventtype/firstentry.md): Triggers an event for the first user entering the home.
- [HMPresenceEventType.lastExit](hmpresenceeventtype/lastexit.md): Triggers an event when the last user leaves the home.

### Using presence as a predicate

- [atHome](hmpresenceeventtype/athome.md): Triggers the event when at least one user is in the home.
- [notAtHome](hmpresenceeventtype/notathome.md): Triggers the event when there are no users in the home.

### Initializers

- [init(rawValue:)](hmpresenceeventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User presence

- [HMPresenceEvent](hmpresenceevent.md): An event that triggers based on the presence of users in the home.
- [HMMutablePresenceEvent](hmmutablepresenceevent.md): A mutable event that triggers based on the presence of users in the home.
- [HMPresenceEventUserType](hmpresenceeventusertype.md): The group of users that triggers a presence event.

# HMPresenceEventType (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The user presence type that triggers a presence event.

## Declaration

```objectivec
enum HMPresenceEventType : NSUInteger;
```

## Topics

### Specifying presence type

- [HMPresenceEventTypeEveryEntry](hmpresenceeventtype/everyentry.md): Triggers the event every time a user enters the home.
- [HMPresenceEventTypeEveryExit](hmpresenceeventtype/everyexit.md): Triggers the event every time a user leaves the home.
- [HMPresenceEventTypeFirstEntry](hmpresenceeventtype/firstentry.md): Triggers an event for the first user entering the home.
- [HMPresenceEventTypeLastExit](hmpresenceeventtype/lastexit.md): Triggers an event when the last user leaves the home.

### Using presence as a predicate

- [HMPresenceEventTypeAtHome](hmpresenceeventtype/athome.md): Triggers the event when at least one user is in the home.
- [HMPresenceEventTypeNotAtHome](hmpresenceeventtype/notathome.md): Triggers the event when there are no users in the home.

## See Also

### User presence

- [HMPresenceEvent](hmpresenceevent.md): An event that triggers based on the presence of users in the home.
- [HMMutablePresenceEvent](hmmutablepresenceevent.md): A mutable event that triggers based on the presence of users in the home.
- [HMPresenceEventUserType](hmpresenceeventusertype.md): The group of users that triggers a presence event.
