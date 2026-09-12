> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/setcameradistanceanimated](https://developer.apple.com/documentation/mapkitjs/map/setcameradistanceanimated)

# setCameraDistanceAnimated(distance, animated)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.23+

Changes the map’s camera distance with an animated transition.

## Declaration

```
setCameraDistanceAnimated(distance: number, animated?: boolean): Map;
```

## Parameters

- `distance`: The altitude of the camera from the center of the map. It’s value needs to be greater than or equal to `0`.
- `animate`: A Boolean value that determines whether MapKit JS animates the visible area change. The default value is `true`.

<a id="return-value"></a>

## Return Value

Returns the containing map instance object.

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

By default, the change of distance animates.

## See Also

### Manipulating the visible portion of the map

- [center](center.md): The map coordinate at the center of the map view.
- [setCenterAnimated()](setcenteranimated.md): Centers the map to the provided coordinate, with optional animation.
- [region](region.md): The area the map is displaying.
- [setRegionAnimated()](setregionanimated.md): Changes the map’s region to the provided region, with optional animation.
- [rotation](rotation.md): The map’s rotation, in degrees.
- [setRotationAnimated()](setrotationanimated.md): Changes the map’s rotation setting to the number of specified degrees.
- [visibleMapRect](visiblemaprect.md): The visible area of the map, in map units.
- [setVisibleMapRectAnimated()](setvisiblemaprectanimated.md): Changes the map’s visible map rectangle to the specified map rectangle.
- [cameraBoundary](cameraboundary.md): A constraint of the location of the center of the map.
- [setCameraBoundaryAnimated()](setcameraboundaryanimated.md): Changes the map’s camera boundary with an animated transition.
- [CameraBoundaryDescription](../cameraboundarydescription.md): An object literal that contains information defining an area on the map.
- [cameraDistance](cameradistance.md): The altitude of the camera relative to the elevation of the center of the map.
- [cameraZoomRange](camerazoomrange.md): The minimum and maximum distances of the camera from the map center.
- [setCameraZoomRangeAnimated()](setcamerazoomrangeanimated.md): Changes the map’s camera zoom range with an animated transition.
