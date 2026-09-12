> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/colorscheme](https://developer.apple.com/documentation/mapkitjs/colorscheme)

# ColorScheme

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.13+

Constants that indicate the color scheme of the map or a place detail.

## Declaration

```
const ColorScheme: Readonly<{
    readonly Dark: "dark";
    readonly Light: "light";
    readonly Adaptive: "adaptive";
}>
type ColorScheme = (typeof ColorScheme)[keyof typeof ColorScheme];
```

<a id="overview"></a>

## Overview

Color schemes apply to maps that have a [Standard](maptype/standard.md) or [MutedStandard](maptype/mutedstandard.md) map type. Use these constants with the map’s [colorScheme](map/colorscheme.md) property.

## Topics

### Color scheme values

- [Adaptive](colorscheme/adaptive.md): A constant indicating a color scheme that follows the current system setting.
- [Light](colorscheme/light.md): A constant indicating a light color scheme.
- [Dark](colorscheme/dark.md): A constant indicating a dark color scheme.

## See Also

### Enumerations

- [AddressCategory](addresscategory.md): The categories of address components that users can search for with an address filter.
- [AnnotationCollisionMode](annotationcollisionmode.md): Constants that indicate the collision mode for an annotation.
- [AnnotationDisplayPriority](annotationdisplaypriority.md): Constants that indicate the priority for displaying annotations on the map.
- [DistanceUnitSystem](distanceunitsystem.md): Constants that indicate the system of measurement that displays on the map.
- [FeatureVisibility](featurevisibility.md): Constants indicating the visibility of different adaptive map features.
- [MapFeatureType](mapfeaturetype.md): Values that describe the feature type of a point of interest.
- [MapLoadPriority](maploadpriority.md): Constants that prioritize the visibility of specific map features during map loading.
- [MapType](maptype.md): Constants representing the type of map to display.
- [PointOfInterestCategory](pointofinterestcategory.md): Point-of-interest categories.
- [RegionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [TransportType](transporttype.md): The modes of transportation.
