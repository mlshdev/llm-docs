> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmpresenceeventusertype](https://developer.apple.com/documentation/homekit/hmpresenceeventusertype)

# HMPresenceEventUserType (Swift)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The group of users that triggers a presence event.

## Declaration

```swift
enum HMPresenceEventUserType
```

## Topics

### Selecting users

- [HMPresenceEventUserType.currentUser](hmpresenceeventusertype/currentuser.md): The current user triggers the presence event.
- [HMPresenceEventUserType.homeUsers](hmpresenceeventusertype/homeusers.md): All users associated with a home trigger a presence event.
- [HMPresenceEventUserType.customUsers](hmpresenceeventusertype/customusers.md): A custom set of users is used to trigger a presence event.

### Initializers

- [init(rawValue:)](hmpresenceeventusertype/init%28rawvalue_%29.md)

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
- [HMPresenceEventType](hmpresenceeventtype.md): The user presence type that triggers a presence event.

# HMPresenceEventUserType (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The group of users that triggers a presence event.

## Declaration

```objectivec
enum HMPresenceEventUserType : NSUInteger;
```

## Topics

### Selecting users

- [HMPresenceEventUserTypeCurrentUser](hmpresenceeventusertype/currentuser.md): The current user triggers the presence event.
- [HMPresenceEventUserTypeHomeUsers](hmpresenceeventusertype/homeusers.md): All users associated with a home trigger a presence event.
- [HMPresenceEventUserTypeCustomUsers](hmpresenceeventusertype/customusers.md): A custom set of users is used to trigger a presence event.

## See Also

### User presence

- [HMPresenceEvent](hmpresenceevent.md): An event that triggers based on the presence of users in the home.
- [HMMutablePresenceEvent](hmmutablepresenceevent.md): A mutable event that triggers based on the presence of users in the home.
- [HMPresenceEventType](hmpresenceeventtype.md): The user presence type that triggers a presence event.
