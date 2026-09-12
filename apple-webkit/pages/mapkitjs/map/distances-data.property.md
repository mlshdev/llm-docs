> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/distances-data.property](https://developer.apple.com/documentation/mapkitjs/map/distances-data.property)

# distances

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.12+

The system of measurement that displays on the map.

## Declaration

```
get distances(): DistanceUnitSystem;
set distances(distances: DistanceUnitSystem);
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

Sets the system of measurement for displaying map distances. See [DistanceUnitSystem](../distanceunitsystem.md) for accepted values.

This property applies to the scale, if it displays. The default value is [Adaptive](../distanceunitsystem/adaptive.md), which means that the measurement system depends on the map’s set [language](../mapkitinitializationoptions/language.md). This property affects displayed distances only; it doesn’t affect data that returns from a service, such as [Directions](../directions.md).

## Topics

### Distances

- [DistanceUnitSystem](../distanceunitsystem.md): Constants that indicate the system of measurement that displays on the map.

## See Also

### Configuring the map’s appearance

- [colorScheme](colorscheme.md): The map’s color scheme when displaying standard or muted standard map types.
- [mapType](maptype.md): The type of data that the map displays.
- [padding](padding.md): The map’s inset margins.
- [pointOfInterestFilter](pointofinterestfilter.md): The filter that determines the points of interest that display on the map.
- [showsPointsOfInterest](showspointsofinterest.md): A Boolean value that determines whether the map displays points of interest.
- [showItems()](showitems.md): Adjusts the map’s visible region to bring the specified overlays and annotations into view.
- [MapShowItemsOptions](../mapshowitemsoptions.md): Options that determine the map parameters to use when showing items.
- [tintColor](tintcolor.md): The CSS color that MapKit JS uses for user interface controls on the map.
