> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationcollisionmode](https://developer.apple.com/documentation/mapkitjs/annotationcollisionmode)

# AnnotationCollisionMode

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.0+

Constants that indicate the collision mode for an annotation.

## Declaration

```
const AnnotationCollisionMode: Readonly<{
    readonly Rectangle: "rectangle";
    readonly Circle: "circle";
    readonly None: "none";
}>
type AnnotationCollisionMode =
    (typeof AnnotationCollisionMode)[keyof typeof AnnotationCollisionMode];
```

## Topics

### Collision modes

- [Rectangle](annotationcollisionmode/rectangle.md): Uses the full collision frame rectangle to detect collisions.
- [Circle](annotationcollisionmode/circle.md): Uses a circle inscribed in the collision frame rectangle to detect collisions.
- [None](annotationcollisionmode/none.md): A collision mode in which the annotation doesn’t collide with other annotations.

## See Also

### Enumerations

- [AddressCategory](addresscategory.md): The categories of address components that users can search for with an address filter.
- [AnnotationDisplayPriority](annotationdisplaypriority.md): Constants that indicate the priority for displaying annotations on the map.
- [ColorScheme](colorscheme.md): Constants that indicate the color scheme of the map or a place detail.
- [DistanceUnitSystem](distanceunitsystem.md): Constants that indicate the system of measurement that displays on the map.
- [FeatureVisibility](featurevisibility.md): Constants indicating the visibility of different adaptive map features.
- [MapFeatureType](mapfeaturetype.md): Values that describe the feature type of a point of interest.
- [MapLoadPriority](maploadpriority.md): Constants that prioritize the visibility of specific map features during map loading.
- [MapType](maptype.md): Constants representing the type of map to display.
- [PointOfInterestCategory](pointofinterestcategory.md): Point-of-interest categories.
- [RegionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [TransportType](transporttype.md): The modes of transportation.
