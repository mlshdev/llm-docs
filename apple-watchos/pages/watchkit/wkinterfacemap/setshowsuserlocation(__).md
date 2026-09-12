> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemap/setshowsuserlocation(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacemap/setshowsuserlocation(_:))

# setShowsUserLocation(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.1+

Sets whether the map shows the user’s current location.

## Declaration

```swift
func setShowsUserLocation(_ showsUserLocation: Bool)
```

## Parameters

- `showsUserLocation`: A Boolean value that indicates whether the map shows the user’s current location.

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) displays the users current location on the map. The default value is [false](https://developer.apple.com/documentation/swift/false).

This property doesn’t indicate whether the user’s position is visible on the map. Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the map view to use the Core Location framework to track the user’s current location and display the location when it’s visible on screen. To keep the map centered on the user’s location, pass [WKInterfaceMap.UserTrackingMode.follow](usertrackingmode/follow.md) to the [setUserTrackingMode(\_:animated:)](setusertrackingmode%28__animated_%29.md) method.

## See Also

### Displaying the User’s Location

- [setShowsUserHeading(\_:)](setshowsuserheading%28__%29.md): Sets whether the map shows the user heading.
- [setUserTrackingMode(\_:animated:)](setusertrackingmode%28__animated_%29.md): Sets the map’s tracking mode.
- [WKInterfaceMap.UserTrackingMode](usertrackingmode.md): Modes for tracking the user’s location on the map.

# setShowsUserLocation: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.1+

Sets whether the map shows the user’s current location.

## Declaration

```objectivec
- (void) setShowsUserLocation:(BOOL) showsUserLocation;
```

## Parameters

- `showsUserLocation`: A Boolean value that indicates whether the map shows the user’s current location.

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) displays the users current location on the map. The default value is [false](https://developer.apple.com/documentation/swift/false).

This property doesn’t indicate whether the user’s position is visible on the map. Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the map view to use the Core Location framework to track the user’s current location and display the location when it’s visible on screen. To keep the map centered on the user’s location, pass [WKInterfaceMapUserTrackingModeFollow](usertrackingmode/follow.md) to the [setUserTrackingMode:animated:](setusertrackingmode%28__animated_%29.md) method.

## See Also

### Displaying the User’s Location

- [setShowsUserHeading:](setshowsuserheading%28__%29.md): Sets whether the map shows the user heading.
- [setUserTrackingMode:animated:](setusertrackingmode%28__animated_%29.md): Sets the map’s tracking mode.
- [WKInterfaceMapUserTrackingMode](usertrackingmode.md): Modes for tracking the user’s location on the map.
