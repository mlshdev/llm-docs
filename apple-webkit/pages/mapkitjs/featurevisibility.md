> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/featurevisibility](https://developer.apple.com/documentation/mapkitjs/featurevisibility)

# FeatureVisibility

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.0+

Constants indicating the visibility of different adaptive map features.

## Declaration

```
const FeatureVisibility: Readonly<{
    readonly Adaptive: "adaptive";
    readonly Hidden: "hidden";
    readonly Visible: "visible";
}>
type FeatureVisibility =
    (typeof FeatureVisibility)[keyof typeof FeatureVisibility];
```

<a id="overview"></a>

## Overview

Indicates whether the map shows adaptive features like the scale, compass, and annotation title and subtitle text. The display of an adaptive feature depends on the current map state. You can show or hide controls that aren’t adaptive, such as the map type control or zoom controls, by setting map properties to `true` or `false`, respectively.

The following example shows the compass only when the map rotation is changing, and hides the zoom controls:

```javascript
// Create a map.
const map = new mapkit.Map("my-map-element-id");

// Show the compass only when the rotation is actively changing.
map.showsCompass = mapkit.FeatureVisibility.Adaptive;

// Hide the zoom controls.
map.showsZoomControl = false;
```

## Topics

### Feature visibility values

- [Adaptive](featurevisibility/adaptive.md): A constant indicating that feature visibility adapts to the current map state.
- [Hidden](featurevisibility/hidden.md): A constant indicating that the feature is always hidden.
- [Visible](featurevisibility/visible.md): A constant indicating that the feature is always visible.

## See Also

### Enumerations

- [AddressCategory](addresscategory.md): The categories of address components that users can search for with an address filter.
- [AnnotationCollisionMode](annotationcollisionmode.md): Constants that indicate the collision mode for an annotation.
- [AnnotationDisplayPriority](annotationdisplaypriority.md): Constants that indicate the priority for displaying annotations on the map.
- [ColorScheme](colorscheme.md): Constants that indicate the color scheme of the map or a place detail.
- [DistanceUnitSystem](distanceunitsystem.md): Constants that indicate the system of measurement that displays on the map.
- [MapFeatureType](mapfeaturetype.md): Values that describe the feature type of a point of interest.
- [MapLoadPriority](maploadpriority.md): Constants that prioritize the visibility of specific map features during map loading.
- [MapType](maptype.md): Constants representing the type of map to display.
- [PointOfInterestCategory](pointofinterestcategory.md): Point-of-interest categories.
- [RegionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [TransportType](transporttype.md): The modes of transportation.
