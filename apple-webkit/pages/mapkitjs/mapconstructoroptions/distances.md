> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapconstructoroptions/distances](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/distances)

# distances

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.13+

The system of measurement that displays on the map.

## Declaration

```
distances?: DistanceUnitSystem;
```

<a id="Discussion"></a>

## Discussion

Sets the system of measurement for displaying map distances. See [DistanceUnitSystem](../distanceunitsystem.md) for accepted values.

This property applies to the scale, if it displays. The default value is [Adaptive](../distanceunitsystem/adaptive.md), which means that the measurement system depends on the map’s set [language](../mapkitinitializationoptions/language.md). This property affects displayed distances only; it doesn’t affect data that returns from a service, such as [Directions](../directions.md).
