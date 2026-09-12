> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinteresttemplate/pointsofinterest](https://developer.apple.com/documentation/carplay/cppointofinteresttemplate/pointsofinterest)

# pointsOfInterest (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The points of interest the template displays on the map and in the scrollable picker.

## Declaration

```swift
var pointsOfInterest: [CPPointOfInterest] { get }
```

<a id="Discussion"></a>

## Discussion

You must call the [setPointsOfInterest(\_:selectedIndex:)](setpointsofinterest%28__selectedindex_%29.md) method to update the points of interest the template displays.

## See Also

### Managing the Points of Interest

- [setPointsOfInterest(\_:selectedIndex:)](setpointsofinterest%28__selectedindex_%29.md): Updates the points of interest and the current selection.
- [selectedIndex](selectedindex.md): The current selection’s index.

# pointsOfInterest (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The points of interest the template displays on the map and in the scrollable picker.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<CPPointOfInterest *> * pointsOfInterest;
```

<a id="Discussion"></a>

## Discussion

You must call the [setPointsOfInterest:selectedIndex:](setpointsofinterest%28__selectedindex_%29.md) method to update the points of interest the template displays.

## See Also

### Managing the Points of Interest

- [setPointsOfInterest:selectedIndex:](setpointsofinterest%28__selectedindex_%29.md): Updates the points of interest and the current selection.
- [selectedIndex](selectedindex.md): The current selection’s index.
