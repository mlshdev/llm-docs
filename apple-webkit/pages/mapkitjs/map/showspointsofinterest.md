> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/showspointsofinterest](https://developer.apple.com/documentation/mapkitjs/map/showspointsofinterest)

# showsPointsOfInterest

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that determines whether the map displays points of interest.

## Declaration

```
get showsPointsOfInterest(): boolean;
set showsPointsOfInterest(showsPointsOfInterest: boolean);
```

<a id="Discussion"></a>

## Discussion

This property determines whether the map shows points of interest in standard and hybrid modes. A point of interest can be an airport, park, museum, hospital, and so on. The map represents a point of interest with its name and a color-coded icon.

## See Also

### Configuring the map’s appearance

- [colorScheme](colorscheme.md): The map’s color scheme when displaying standard or muted standard map types.
- [distances](distances-data.property.md): The system of measurement that displays on the map.
- [mapType](maptype.md): The type of data that the map displays.
- [padding](padding.md): The map’s inset margins.
- [pointOfInterestFilter](pointofinterestfilter.md): The filter that determines the points of interest that display on the map.
- [showItems()](showitems.md): Adjusts the map’s visible region to bring the specified overlays and annotations into view.
- [MapShowItemsOptions](../mapshowitemsoptions.md): Options that determine the map parameters to use when showing items.
- [tintColor](tintcolor.md): The CSS color that MapKit JS uses for user interface controls on the map.
