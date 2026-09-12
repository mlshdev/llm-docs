> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/pointofinterestfilter](https://developer.apple.com/documentation/mapkitjs/map/pointofinterestfilter)

# pointOfInterestFilter

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.32.2+

The filter that determines the points of interest that display on the map.

## Declaration

```
get pointOfInterestFilter(): PointOfInterestFilter | null;
set pointOfInterestFilter(filter: PointOfInterestFilter | null);
```

<a id="Discussion"></a>

## Discussion

The filter specifies point-of-interest categories to include or exclude in a map. The default filter shows all points of interest.

## See Also

### Configuring the map’s appearance

- [colorScheme](colorscheme.md): The map’s color scheme when displaying standard or muted standard map types.
- [distances](distances-data.property.md): The system of measurement that displays on the map.
- [mapType](maptype.md): The type of data that the map displays.
- [padding](padding.md): The map’s inset margins.
- [showsPointsOfInterest](showspointsofinterest.md): A Boolean value that determines whether the map displays points of interest.
- [showItems()](showitems.md): Adjusts the map’s visible region to bring the specified overlays and annotations into view.
- [MapShowItemsOptions](../mapshowitemsoptions.md): Options that determine the map parameters to use when showing items.
- [tintColor](tintcolor.md): The CSS color that MapKit JS uses for user interface controls on the map.
