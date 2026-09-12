> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/tintcolor](https://developer.apple.com/documentation/mapkitjs/map/tintcolor)

# tintColor

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The CSS color that MapKit JS uses for user interface controls on the map.

## Declaration

```
get tintColor(): string;
set tintColor(value: string);
```

<a id="Discussion"></a>

## Discussion

Use `tintColor` to color the outline of the controls, text, and glyphs. The tint color can be any valid [CSS color value or standard color name](https://drafts.csswg.org/css-color/#named-colors).

## See Also

### Configuring the map’s appearance

- [colorScheme](colorscheme.md): The map’s color scheme when displaying standard or muted standard map types.
- [distances](distances-data.property.md): The system of measurement that displays on the map.
- [mapType](maptype.md): The type of data that the map displays.
- [padding](padding.md): The map’s inset margins.
- [pointOfInterestFilter](pointofinterestfilter.md): The filter that determines the points of interest that display on the map.
- [showsPointsOfInterest](showspointsofinterest.md): A Boolean value that determines whether the map displays points of interest.
- [showItems()](showitems.md): Adjusts the map’s visible region to bring the specified overlays and annotations into view.
- [MapShowItemsOptions](../mapshowitemsoptions.md): Options that determine the map parameters to use when showing items.
