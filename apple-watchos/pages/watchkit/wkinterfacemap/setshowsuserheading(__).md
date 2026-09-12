> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacemap/setshowsuserheading(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacemap/setshowsuserheading(_:))

# setShowsUserHeading(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.1+

Sets whether the map shows the user heading.

## Declaration

```swift
func setShowsUserHeading(_ showsUserHeading: Bool)
```

<a id="Discussion"></a>

## Discussion

By default, the map doesn’t show the user’s heading.

> **Note**

>  Calling this method has no effect unless the map is showing the user’s location. For more information, see [setShowsUserLocation(\_:)](setshowsuserlocation%28__%29.md).

## See Also

### Displaying the User’s Location

- [setShowsUserLocation(\_:)](setshowsuserlocation%28__%29.md): Sets whether the map shows the user’s current location.
- [setUserTrackingMode(\_:animated:)](setusertrackingmode%28__animated_%29.md): Sets the map’s tracking mode.
- [WKInterfaceMap.UserTrackingMode](usertrackingmode.md): Modes for tracking the user’s location on the map.

# setShowsUserHeading: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.1+

Sets whether the map shows the user heading.

## Declaration

```objectivec
- (void) setShowsUserHeading:(BOOL) showsUserHeading;
```

<a id="Discussion"></a>

## Discussion

By default, the map doesn’t show the user’s heading.

> **Note**

>  Calling this method has no effect unless the map is showing the user’s location. For more information, see [setShowsUserLocation:](setshowsuserlocation%28__%29.md).

## See Also

### Displaying the User’s Location

- [setShowsUserLocation:](setshowsuserlocation%28__%29.md): Sets whether the map shows the user’s current location.
- [setUserTrackingMode:animated:](setusertrackingmode%28__animated_%29.md): Sets the map’s tracking mode.
- [WKInterfaceMapUserTrackingMode](usertrackingmode.md): Modes for tracking the user’s location on the map.
