> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/regionpriority](https://developer.apple.com/documentation/mapkitjs/regionpriority)

# RegionPriority

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.78.1+

A value that indicates the importance of the configured region.

## Declaration

```
const RegionPriority: Readonly<{
    readonly Default: "default";
    readonly Required: "required";
}>
type RegionPriority = (typeof RegionPriority)[keyof typeof RegionPriority];
```

## Topics

### Setting the region priority

- [Default](regionpriority/default.md): A value indicating that the results can originate from outside the specified region.
- [Required](regionpriority/required.md): A value indicating that no results can originate from outside the specified region.

## See Also

### Enumerations

- [AddressCategory](addresscategory.md): The categories of address components that users can search for with an address filter.
- [AnnotationCollisionMode](annotationcollisionmode.md): Constants that indicate the collision mode for an annotation.
- [AnnotationDisplayPriority](annotationdisplaypriority.md): Constants that indicate the priority for displaying annotations on the map.
- [ColorScheme](colorscheme.md): Constants that indicate the color scheme of the map or a place detail.
- [DistanceUnitSystem](distanceunitsystem.md): Constants that indicate the system of measurement that displays on the map.
- [FeatureVisibility](featurevisibility.md): Constants indicating the visibility of different adaptive map features.
- [MapFeatureType](mapfeaturetype.md): Values that describe the feature type of a point of interest.
- [MapLoadPriority](maploadpriority.md): Constants that prioritize the visibility of specific map features during map loading.
- [MapType](maptype.md): Constants representing the type of map to display.
- [PointOfInterestCategory](pointofinterestcategory.md): Point-of-interest categories.
- [TransportType](transporttype.md): The modes of transportation.
