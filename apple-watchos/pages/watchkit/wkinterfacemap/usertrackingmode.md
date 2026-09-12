> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemap/usertrackingmode](https://developer.apple.com/documentation/watchkit/wkinterfacemap/usertrackingmode)

# WKInterfaceMap.UserTrackingMode (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 6.1+

Modes for tracking the user’s location on the map.

## Declaration

```swift
enum UserTrackingMode
```

## Topics

### Tracking Modes

- [WKInterfaceMap.UserTrackingMode.follow](usertrackingmode/follow.md): The map scrolls to follow the user as they move.
- [WKInterfaceMap.UserTrackingMode.none](usertrackingmode/none.md): The map remains stationary, even if the user moves off the map.
- [WKInterfaceMap.UserTrackingMode.follow](usertrackingmode/follow.md): The map scrolls to follow the user as they move.
- [WKInterfaceMap.UserTrackingMode.none](usertrackingmode/none.md): The map remains stationary, even if the user moves off the map.

### Initializers

- [init(rawValue:)](usertrackingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying the User’s Location

- [setShowsUserLocation(\_:)](setshowsuserlocation%28__%29.md): Sets whether the map shows the user’s current location.
- [setShowsUserHeading(\_:)](setshowsuserheading%28__%29.md): Sets whether the map shows the user heading.
- [setUserTrackingMode(\_:animated:)](setusertrackingmode%28__animated_%29.md): Sets the map’s tracking mode.

# WKInterfaceMapUserTrackingMode (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 6.1+

Modes for tracking the user’s location on the map.

## Declaration

```objectivec
enum WKInterfaceMapUserTrackingMode : NSInteger;
```

## Topics

### Tracking Modes

- [WKInterfaceMapUserTrackingModeFollow](usertrackingmode/follow.md): The map scrolls to follow the user as they move.
- [WKInterfaceMapUserTrackingModeNone](usertrackingmode/none.md): The map remains stationary, even if the user moves off the map.
- [WKInterfaceMapUserTrackingModeFollow](usertrackingmode/follow.md): The map scrolls to follow the user as they move.
- [WKInterfaceMapUserTrackingModeNone](usertrackingmode/none.md): The map remains stationary, even if the user moves off the map.

## See Also

### Displaying the User’s Location

- [setShowsUserLocation:](setshowsuserlocation%28__%29.md): Sets whether the map shows the user’s current location.
- [setShowsUserHeading:](setshowsuserheading%28__%29.md): Sets whether the map shows the user heading.
- [setUserTrackingMode:animated:](setusertrackingmode%28__animated_%29.md): Sets the map’s tracking mode.
