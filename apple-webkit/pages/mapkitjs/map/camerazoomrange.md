> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/camerazoomrange](https://developer.apple.com/documentation/mapkitjs/map/camerazoomrange)

# cameraZoomRange

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.23+

The minimum and maximum distances of the camera from the map center.

## Declaration

```
get cameraZoomRange(): CameraZoomRange | undefined;
set cameraZoomRange(value: CameraZoomRangeData | undefined | null);
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

Get or set this property with a [CameraZoomRange](../camerazoomrange.md) instance, which is an object containing [minCameraDistance](../camerazoomrange/mincameradistance.md) and [maxCameraDistance](../camerazoomrange/maxcameradistance.md) properties.

## Topics

### Defining a Zoom Range

- [CameraZoomRange](../camerazoomrange.md): A minimum and maximum camera distance, in meters, from the center of the map.

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
- [setCameraDistanceAnimated()](setcameradistanceanimated.md): Changes the map’s camera distance with an animated transition.
- [setCameraZoomRangeAnimated()](setcamerazoomrangeanimated.md): Changes the map’s camera zoom range with an animated transition.
