> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/padding](https://developer.apple.com/documentation/mapkitjs/map/padding)

# padding

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The map’s inset margins.

## Declaration

```
get padding(): Padding;
set padding(padding: PaddingData);
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

The padding affects the map’s controls layout. The map computes the region it draws to fit within the inset frame that the padding specifies.

MapKit JS computes the [visibleMapRect](visiblemaprect.md) to fit within the inset frame with the constraint that the entire, noninset frame needs to be able to contain map data as well. Using the [showItems()](showitems.md) method ensures that all annotations and overlays are visible within the inset frame. The map modifies the region when displaying an annotation’s callout to ensure it’s entirely visible within the inset frame.

## See Also

### Configuring the map’s appearance

- [colorScheme](colorscheme.md): The map’s color scheme when displaying standard or muted standard map types.
- [distances](distances-data.property.md): The system of measurement that displays on the map.
- [mapType](maptype.md): The type of data that the map displays.
- [pointOfInterestFilter](pointofinterestfilter.md): The filter that determines the points of interest that display on the map.
- [showsPointsOfInterest](showspointsofinterest.md): A Boolean value that determines whether the map displays points of interest.
- [showItems()](showitems.md): Adjusts the map’s visible region to bring the specified overlays and annotations into view.
- [MapShowItemsOptions](../mapshowitemsoptions.md): Options that determine the map parameters to use when showing items.
- [tintColor](tintcolor.md): The CSS color that MapKit JS uses for user interface controls on the map.
