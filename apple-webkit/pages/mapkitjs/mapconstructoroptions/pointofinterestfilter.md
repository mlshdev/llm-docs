> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapconstructoroptions/pointofinterestfilter](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/pointofinterestfilter)

# pointOfInterestFilter

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.32.2+

The filter that determines the points of interest that display on the map.

## Declaration

```
pointOfInterestFilter?: PointOfInterestFilter;
```

<a id="Discussion"></a>

## Discussion

The filter specifies point-of-interest categories to include or exclude in a map. If not specified, MapKit JS creates a default filter that shows all points of interest.

## See Also

### Configuring map overlays

- [overlays](overlays.md): An array that contains all of the map’s overlays.
- [selectedOverlay](selectedoverlay.md): The selected overlay on the map.
- [showsPointsOfInterest](showspointsofinterest.md): A Boolean value that determines whether the map displays points of interest.
