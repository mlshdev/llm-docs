> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotationdisplaypriority](https://developer.apple.com/documentation/mapkitjs/annotationdisplaypriority)

# AnnotationDisplayPriority

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.0+

Constants that indicate the priority for displaying annotations on the map.

## Declaration

```
const AnnotationDisplayPriority: Readonly<{
    readonly Low: 250;
    readonly High: 750;
    readonly Required: 1000;
}>
type AnnotationDisplayPriority =
    (typeof AnnotationDisplayPriority)[keyof typeof AnnotationDisplayPriority];
```

## Topics

### Display priority values

- [High](annotationdisplaypriority/high.md): A high display priority, with a preset value of 750 out of 1000.
- [Low](annotationdisplaypriority/low.md): A low display priority, with a preset value of 250 out of 1000.
- [Required](annotationdisplaypriority/required.md): The highest display priority, with a preset value of 1000 out of 1000.

## See Also

### Enumerations

- [AddressCategory](addresscategory.md): The categories of address components that users can search for with an address filter.
- [AnnotationCollisionMode](annotationcollisionmode.md): Constants that indicate the collision mode for an annotation.
- [ColorScheme](colorscheme.md): Constants that indicate the color scheme of the map or a place detail.
- [DistanceUnitSystem](distanceunitsystem.md): Constants that indicate the system of measurement that displays on the map.
- [FeatureVisibility](featurevisibility.md): Constants indicating the visibility of different adaptive map features.
- [MapFeatureType](mapfeaturetype.md): Values that describe the feature type of a point of interest.
- [MapLoadPriority](maploadpriority.md): Constants that prioritize the visibility of specific map features during map loading.
- [MapType](maptype.md): Constants representing the type of map to display.
- [PointOfInterestCategory](pointofinterestcategory.md): Point-of-interest categories.
- [RegionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [TransportType](transporttype.md): The modes of transportation.
