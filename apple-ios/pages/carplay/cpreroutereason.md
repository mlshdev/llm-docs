> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpreroutereason](https://developer.apple.com/documentation/carplay/cpreroutereason)

# CPRerouteReason (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Values that represent reasons for navigation rerouting.

## Declaration

```swift
enum CPRerouteReason
```

## Topics

### Properties

- [CPRerouteReason.alternateRoute](cpreroutereason/alternateroute.md): A value that represents rerouting because an alternate route became available.
- [CPRerouteReason.missedTurn](cpreroutereason/missedturn.md): A value that represents rerouting because of a missed turn.
- [CPRerouteReason.offline](cpreroutereason/offline.md): A value that represents rerouting because the system was offline.

### Enumeration Cases

- [CPRerouteReason.mandated](cpreroutereason/mandated.md): A reroute was required due to external circumstances, such as a road closure.
- [CPRerouteReason.unknown](cpreroutereason/unknown.md): The reason for rerouting is unknown or not specified.
- [CPRerouteReason.waypointModified](cpreroutereason/waypointmodified.md): An existing waypoint was modified or updated.

### Initializers

- [init(rawValue:)](cpreroutereason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CPRerouteReason (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Values that represent reasons for navigation rerouting.

## Declaration

```objectivec
enum CPRerouteReason : NSInteger;
```

## Topics

### Properties

- [CPRerouteReasonAlternateRoute](cpreroutereason/alternateroute.md): A value that represents rerouting because an alternate route became available.
- [CPRerouteReasonMissedTurn](cpreroutereason/missedturn.md): A value that represents rerouting because of a missed turn.
- [CPRerouteReasonOffline](cpreroutereason/offline.md): A value that represents rerouting because the system was offline.

### Enumeration Cases

- [CPRerouteReasonMandated](cpreroutereason/mandated.md): A reroute was required due to external circumstances, such as a road closure.
- [CPRerouteReasonUnknown](cpreroutereason/unknown.md): The reason for rerouting is unknown or not specified.
- [CPRerouteReasonWaypointModified](cpreroutereason/waypointmodified.md): An existing waypoint was modified or updated.
