> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/transporttype](https://developer.apple.com/documentation/mapkitjs/transporttype)

# TransportType

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.0+

The modes of transportation.

## Declaration

```
const TransportType: Readonly<{
    readonly Automobile: "AUTOMOBILE";
    readonly Walking: "WALKING";
    readonly Cycling: "CYCLING";
}>
type TransportType = (typeof TransportType)[keyof typeof TransportType];
```

## Mentioned In

- [MapKit JS 5](mapkit-js-5.md)

<a id="overview"></a>

## Overview

Constants that describe the mode of transportation in [DirectionsRequest](directionsrequest.md) and [DirectionsResponse](directionsresponse.md).

## Topics

### Transport types

- [Walking](transporttype/walking.md): A constant identifying the mode of transportation as walking.
- [Automobile](transporttype/automobile.md): A constant identifying the mode of transportation as driving.
- [Cycling](transporttype/cycling.md): A constant identifying the mode of transportation as cycling.

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
- [RegionPriority](regionpriority.md): A value that indicates the importance of the configured region.
