> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapfeaturetype](https://developer.apple.com/documentation/mapkitjs/mapfeaturetype)

# MapFeatureType

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.74.1+

Values that describe the feature type of a point of interest.

## Declaration

```
const MapFeatureType: Readonly<{
    readonly PointOfInterest: "PointOfInterest";
    readonly Territory: "Territory";
    readonly PhysicalFeature: "PhysicalFeature";
}>
type MapFeatureType =
    (typeof MapFeatureType)[keyof typeof MapFeatureType];
```

## Topics

### Feature types

- [PhysicalFeature](mapfeaturetype/physicalfeature.md): A physical feature on the Earth such as a mountain range, river, or ocean basin.
- [PointOfInterest](mapfeaturetype/pointofinterest.md): A feature that describes a point of interest, such as a museum, park, or cafe.
- [Territory](mapfeaturetype/territory.md): A feature that describes a territory, such as a region or neighborhood.

## See Also

### Enumerations

- [AddressCategory](addresscategory.md): The categories of address components that users can search for with an address filter.
- [AnnotationCollisionMode](annotationcollisionmode.md): Constants that indicate the collision mode for an annotation.
- [AnnotationDisplayPriority](annotationdisplaypriority.md): Constants that indicate the priority for displaying annotations on the map.
- [ColorScheme](colorscheme.md): Constants that indicate the color scheme of the map or a place detail.
- [DistanceUnitSystem](distanceunitsystem.md): Constants that indicate the system of measurement that displays on the map.
- [FeatureVisibility](featurevisibility.md): Constants indicating the visibility of different adaptive map features.
- [MapLoadPriority](maploadpriority.md): Constants that prioritize the visibility of specific map features during map loading.
- [MapType](maptype.md): Constants representing the type of map to display.
- [PointOfInterestCategory](pointofinterestcategory.md): Point-of-interest categories.
- [RegionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [TransportType](transporttype.md): The modes of transportation.
