> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/featurevisibility/adaptive](https://developer.apple.com/documentation/mapkitjs/featurevisibility/adaptive)

# Adaptive

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration Case  
**Availability:** MapKit JS 5.0+

A constant indicating that feature visibility adapts to the current map state.

## Declaration

```
readonly Adaptive: "adaptive";
```

<a id="Discussion"></a>

## Discussion

Use `mapkit.FeatureVisibility.Adaptive` to show adaptive controls only when the map is in a given state. You can show or hide controls that aren’t adaptive by setting map properties to `true` or `false`, respectively.

The following example sets the adaptive visibility for the compass and scale, and hides the map type and zoom controls:

```javascript
// Create a map.
const map = new mapkit.Map("my-map-element-id");

// Show the compass only when the rotation is actively changing.
map.showsCompass = mapkit.FeatureVisibility.Adaptive;

// Show the scale only when the zoom level is actively changing.
map.showsScale = mapkit.FeatureVisibility.Adaptive;

// Hide the map type and zoom controls.
map.showsMapTypeControl = false;
map.showsZoomControl = false;
```

## See Also

### Feature visibility values

- [Hidden](hidden.md): A constant indicating that the feature is always hidden.
- [Visible](visible.md): A constant indicating that the feature is always visible.
