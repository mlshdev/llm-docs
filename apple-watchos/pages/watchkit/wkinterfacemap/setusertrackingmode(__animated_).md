> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemap/setusertrackingmode(_:animated:)](https://developer.apple.com/documentation/watchkit/wkinterfacemap/setusertrackingmode(_:animated:))

# setUserTrackingMode(\_:animated:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.1+

Sets the map’s tracking mode.

## Declaration

```swift
func setUserTrackingMode(_ mode: WKInterfaceMap.UserTrackingMode, animated: Bool)
```

## Parameters

- `mode`: The desired tracking mode. For a complete list of valid tracking modes, see [WKInterfaceMap.UserTrackingMode](usertrackingmode.md).
- `animated`: A Boolean value that indicates whether the map animates the change to the tracking mode.

<a id="Discussion"></a>

## Discussion

By default, the tracking mode is [WKInterfaceMap.UserTrackingMode.none](usertrackingmode/none.md).

Setting the tracking mode to [WKInterfaceMap.UserTrackingMode.follow](usertrackingmode/follow.md) causes the map to center on the user’s location and begin tracking the user. If the map is zoomed out, the map view automatically zooms in on the user’s location, effectively changing the current visible region.

## See Also

### Displaying the User’s Location

- [setShowsUserLocation(\_:)](setshowsuserlocation%28__%29.md): Sets whether the map shows the user’s current location.
- [setShowsUserHeading(\_:)](setshowsuserheading%28__%29.md): Sets whether the map shows the user heading.
- [WKInterfaceMap.UserTrackingMode](usertrackingmode.md): Modes for tracking the user’s location on the map.

# setUserTrackingMode:animated: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.1+

Sets the map’s tracking mode.

## Declaration

```objectivec
- (void) setUserTrackingMode:(WKInterfaceMapUserTrackingMode) mode animated:(BOOL) animated;
```

## Parameters

- `mode`: The desired tracking mode. For a complete list of valid tracking modes, see [WKInterfaceMapUserTrackingMode](usertrackingmode.md).
- `animated`: A Boolean value that indicates whether the map animates the change to the tracking mode.

<a id="Discussion"></a>

## Discussion

By default, the tracking mode is [WKInterfaceMapUserTrackingModeNone](usertrackingmode/none.md).

Setting the tracking mode to [WKInterfaceMapUserTrackingModeFollow](usertrackingmode/follow.md) causes the map to center on the user’s location and begin tracking the user. If the map is zoomed out, the map view automatically zooms in on the user’s location, effectively changing the current visible region.

## See Also

### Displaying the User’s Location

- [setShowsUserLocation:](setshowsuserlocation%28__%29.md): Sets whether the map shows the user’s current location.
- [setShowsUserHeading:](setshowsuserheading%28__%29.md): Sets whether the map shows the user heading.
- [WKInterfaceMapUserTrackingMode](usertrackingmode.md): Modes for tracking the user’s location on the map.
