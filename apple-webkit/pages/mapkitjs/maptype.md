> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/maptype](https://developer.apple.com/documentation/mapkitjs/maptype)

# MapType

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.0+

Constants representing the type of map to display.

## Declaration

```
const MapType: Readonly<{
    readonly Satellite: "satellite";
    readonly Hybrid: "hybrid";
    readonly MutedStandard: "mutedStandard";
    readonly Standard: "standard";
}>
type MapType = (typeof MapType)[keyof typeof MapType];
```

## Mentioned In

- [MapKit JS 6](mapkit-js-6.md)

## Topics

### Map type values

- [Hybrid](maptype/hybrid.md): A satellite image of the area with road and road name layers on top.
- [MutedStandard](maptype/mutedstandard.md): A street map that emphasizes your data over the underlying map details.
- [Satellite](maptype/satellite.md): A satellite image of the area.
- [Standard](maptype/standard.md): A street map that shows the position of all roads and some road names.

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
- [PointOfInterestCategory](pointofinterestcategory.md): Point-of-interest categories.
- [RegionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [TransportType](transporttype.md): The modes of transportation.
