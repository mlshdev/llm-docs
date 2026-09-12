> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/distanceunitsystem](https://developer.apple.com/documentation/mapkitjs/distanceunitsystem)

# DistanceUnitSystem

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.13+

Constants that indicate the system of measurement that displays on the map.

## Declaration

```
const DistanceUnitSystem: Readonly<{
    readonly Adaptive: "adaptive";
    readonly Metric: "metric";
    readonly Imperial: "imperial";
}>
type DistanceUnitSystem =
    (typeof DistanceUnitSystem)[keyof typeof DistanceUnitSystem];
```

<a id="overview"></a>

## Overview

Use these constants with the map’s [distances](map/distances-data.property.md) property.

## Topics

### Distance values

- [Adaptive](distanceunitsystem/adaptive.md): A measurement system that adapts to the map’s language.
- [Metric](distanceunitsystem/metric.md): The metric measurement system.
- [Imperial](distanceunitsystem/imperial.md): The imperial measurement system.

## See Also

### Enumerations

- [AddressCategory](addresscategory.md): The categories of address components that users can search for with an address filter.
- [AnnotationCollisionMode](annotationcollisionmode.md): Constants that indicate the collision mode for an annotation.
- [AnnotationDisplayPriority](annotationdisplaypriority.md): Constants that indicate the priority for displaying annotations on the map.
- [ColorScheme](colorscheme.md): Constants that indicate the color scheme of the map or a place detail.
- [FeatureVisibility](featurevisibility.md): Constants indicating the visibility of different adaptive map features.
- [MapFeatureType](mapfeaturetype.md): Values that describe the feature type of a point of interest.
- [MapLoadPriority](maploadpriority.md): Constants that prioritize the visibility of specific map features during map loading.
- [MapType](maptype.md): Constants representing the type of map to display.
- [PointOfInterestCategory](pointofinterestcategory.md): Point-of-interest categories.
- [RegionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [TransportType](transporttype.md): The modes of transportation.
