> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinteresttemplate/selectedindex](https://developer.apple.com/documentation/carplay/cppointofinteresttemplate/selectedindex)

# selectedIndex (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The current selection’s index.

## Declaration

```swift
var selectedIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value of the property must be within the bounds of the [pointsOfInterest](pointsofinterest.md) array, or [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) to indicate no selection.

## See Also

### Managing the Points of Interest

- [pointsOfInterest](pointsofinterest.md): The points of interest the template displays on the map and in the scrollable picker.
- [setPointsOfInterest(\_:selectedIndex:)](setpointsofinterest%28__selectedindex_%29.md): Updates the points of interest and the current selection.

# selectedIndex (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The current selection’s index.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger selectedIndex;
```

<a id="Discussion"></a>

## Discussion

The value of the property must be within the bounds of the [pointsOfInterest](pointsofinterest.md) array, or [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) to indicate no selection.

## See Also

### Managing the Points of Interest

- [pointsOfInterest](pointsofinterest.md): The points of interest the template displays on the map and in the scrollable picker.
- [setPointsOfInterest:selectedIndex:](setpointsofinterest%28__selectedindex_%29.md): Updates the points of interest and the current selection.
