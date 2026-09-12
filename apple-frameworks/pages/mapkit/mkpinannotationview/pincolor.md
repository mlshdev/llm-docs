> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpinannotationview/pincolor](https://developer.apple.com/documentation/mapkit/mkpinannotationview/pincolor)

# pinColor (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 9.0) · iPadOS 3.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.11)

The color of the pin head.

> Use [pinTintColor](pintintcolor.md) instead.

## Declaration

```swift
var pinColor: MKPinAnnotationColor { get set }
```

<a id="Discussion"></a>

## Discussion

The Maps application uses different pin colors for different types of map annotations. Your own map annotation should use the available pin colors in the same way. For a description of when to use each type of pin, see the constants of [MKPinAnnotationColor](../mkpinannotationcolor.md).

## See Also

### Properties

- [filterType](../mklocalsearchcompleter/filtertype-swift.property.md): Deprecated. The filter options for the search results.
- [showsPointsOfInterest](../mkmapview/showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [showsPointsOfInterest](../mkmapsnapshotter/options/showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [mapType](../mkmapsnapshotter/options/maptype.md): Deprecated. The map’s visual style.

# pinColor (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 9.0) · iPadOS 3.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.11)

The color of the pin head.

> Use [pinTintColor](pintintcolor.md) instead.

## Declaration

```objectivec
@property (nonatomic) MKPinAnnotationColor pinColor;
```

<a id="Discussion"></a>

## Discussion

The Maps application uses different pin colors for different types of map annotations. Your own map annotation should use the available pin colors in the same way. For a description of when to use each type of pin, see the constants of [MKPinAnnotationColor](../mkpinannotationcolor.md).

## See Also

### Properties

- [filterType](../mklocalsearchcompleter/filtertype-swift.property.md): Deprecated. The filter options for the search results.
- [showsPointsOfInterest](../mkmapview/showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [showsPointsOfInterest](../mkmapsnapshotter/options/showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [mapType](../mkmapsnapshotter/options/maptype.md): Deprecated. The map’s visual style.
