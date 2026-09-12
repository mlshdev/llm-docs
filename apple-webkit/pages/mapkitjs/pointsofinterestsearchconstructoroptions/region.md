> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/pointsofinterestsearchconstructoroptions/region](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions/region)

# region

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.45+

Sets the region that bounds the area in which to fetch points of interest.

## Declaration

```
region?: CoordinateRegionData;
```

<a id="Discussion"></a>

## Discussion

The system determines the region from the provided bounding box or derives the region from a box that encloses the circle specified by [center](center.md) and [radius](radius.md).

## See Also

### Configuring fetch options

- [center](center.md): Sets the center point of the request represented as latitude and longitude.
- [radius](radius.md): Sets the distance provided in meters, or the longest distance derived from the center point to the region’s bounding box.
- [pointOfInterestFilter](pointofinterestfilter.md): Sets a filter that lists points of interest categories to include or exclude.
- [language](../serviceconstructoroptions/language.md): A language identifier that determines the language for the service results text.
