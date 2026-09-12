> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/setregionanimated](https://developer.apple.com/documentation/mapkitjs/map/setregionanimated)

# setRegionAnimated(region, animated)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Changes the map’s region to the provided region, with optional animation.

## Declaration

```
setRegionAnimated(region: CoordinateRegionData, animated?: boolean): Map;
```

## Parameters

- `region`: A new [region](region.md) for the map to display.
- `animate`: A Boolean value that determines whether MapKit JS animates the region change. The default value is `true`.

<a id="return-value"></a>

## Return Value

Returns the map object.

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

By default, MapKit JS animates the change.

## See Also

### Manipulating the visible portion of the map

- [center](center.md): The map coordinate at the center of the map view.
- [setCenterAnimated()](setcenteranimated.md): Centers the map to the provided coordinate, with optional animation.
- [region](region.md): The area the map is displaying.
- [rotation](rotation.md): The map’s rotation, in degrees.
- [setRotationAnimated()](setrotationanimated.md): Changes the map’s rotation setting to the number of specified degrees.
- [visibleMapRect](visiblemaprect.md): The visible area of the map, in map units.
- [setVisibleMapRectAnimated()](setvisiblemaprectanimated.md): Changes the map’s visible map rectangle to the specified map rectangle.
- [cameraBoundary](cameraboundary.md): A constraint of the location of the center of the map.
- [setCameraBoundaryAnimated()](setcameraboundaryanimated.md): Changes the map’s camera boundary with an animated transition.
- [CameraBoundaryDescription](../cameraboundarydescription.md): An object literal that contains information defining an area on the map.
- [cameraDistance](cameradistance.md): The altitude of the camera relative to the elevation of the center of the map.
- [setCameraDistanceAnimated()](setcameradistanceanimated.md): Changes the map’s camera distance with an animated transition.
- [cameraZoomRange](camerazoomrange.md): The minimum and maximum distances of the camera from the map center.
- [setCameraZoomRangeAnimated()](setcamerazoomrangeanimated.md): Changes the map’s camera zoom range with an animated transition.
