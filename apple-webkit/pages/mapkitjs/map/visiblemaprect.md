> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/visiblemaprect](https://developer.apple.com/documentation/mapkitjs/map/visiblemaprect)

# visibleMapRect

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The visible area of the map, in map units.

## Declaration

```
get visibleMapRect(): MapRect;
set visibleMapRect(visibleMapRect: MapRectData);
```

## Mentioned In

- [Migrating from Version 5 to Version 6](../migrating-from-version-5-to-version-6.md)

## See Also

### Manipulating the visible portion of the map

- [center](center.md): The map coordinate at the center of the map view.
- [setCenterAnimated()](setcenteranimated.md): Centers the map to the provided coordinate, with optional animation.
- [region](region.md): The area the map is displaying.
- [setRegionAnimated()](setregionanimated.md): Changes the map’s region to the provided region, with optional animation.
- [rotation](rotation.md): The map’s rotation, in degrees.
- [setRotationAnimated()](setrotationanimated.md): Changes the map’s rotation setting to the number of specified degrees.
- [setVisibleMapRectAnimated()](setvisiblemaprectanimated.md): Changes the map’s visible map rectangle to the specified map rectangle.
- [cameraBoundary](cameraboundary.md): A constraint of the location of the center of the map.
- [setCameraBoundaryAnimated()](setcameraboundaryanimated.md): Changes the map’s camera boundary with an animated transition.
- [CameraBoundaryDescription](../cameraboundarydescription.md): An object literal that contains information defining an area on the map.
- [cameraDistance](cameradistance.md): The altitude of the camera relative to the elevation of the center of the map.
- [setCameraDistanceAnimated()](setcameradistanceanimated.md): Changes the map’s camera distance with an animated transition.
- [cameraZoomRange](camerazoomrange.md): The minimum and maximum distances of the camera from the map center.
- [setCameraZoomRangeAnimated()](setcamerazoomrangeanimated.md): Changes the map’s camera zoom range with an animated transition.
