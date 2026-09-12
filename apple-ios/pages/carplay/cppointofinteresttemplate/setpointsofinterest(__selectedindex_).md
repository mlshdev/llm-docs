> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinteresttemplate/setpointsofinterest(_:selectedindex:)](https://developer.apple.com/documentation/carplay/cppointofinteresttemplate/setpointsofinterest(_:selectedindex:))

# setPointsOfInterest(\_:selectedIndex:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the points of interest and the current selection.

## Declaration

```swift
func setPointsOfInterest(_ pointsOfInterest: [CPPointOfInterest], selectedIndex: Int)
```

## Parameters

- `pointsOfInterest`: An array that contains the points of interest the template displays.
- `selectedIndex`: The selection’s index. This is the array’s index for the specific point of interest you want to select. Use [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) to indicate no initial selection.

<a id="Discussion"></a>

## Discussion

`pointsOfInterest` can contain a maximum of twelve points of interest because that is the most the template displays.

## See Also

### Managing the Points of Interest

- [pointsOfInterest](pointsofinterest.md): The points of interest the template displays on the map and in the scrollable picker.
- [selectedIndex](selectedindex.md): The current selection’s index.

# setPointsOfInterest:selectedIndex: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the points of interest and the current selection.

## Declaration

```objectivec
- (void) setPointsOfInterest:(NSArray<CPPointOfInterest *> *) pointsOfInterest selectedIndex:(NSUInteger) selectedIndex;
```

## Parameters

- `pointsOfInterest`: An array that contains the points of interest the template displays.
- `selectedIndex`: The selection’s index. This is the array’s index for the specific point of interest you want to select. Use [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) to indicate no initial selection.

<a id="Discussion"></a>

## Discussion

`pointsOfInterest` can contain a maximum of twelve points of interest because that is the most the template displays.

## See Also

### Managing the Points of Interest

- [pointsOfInterest](pointsofinterest.md): The points of interest the template displays on the map and in the scrollable picker.
- [selectedIndex](selectedindex.md): The current selection’s index.
