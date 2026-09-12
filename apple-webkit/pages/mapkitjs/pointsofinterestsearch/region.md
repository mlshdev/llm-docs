> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/pointsofinterestsearch/region](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearch/region)

# region

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.45+

The region that bounds the area in which to fetch points of interest.

## Declaration

```
get region(): CoordinateRegion | null;
set region(value: CoordinateRegionData | null);
```

<a id="Discussion"></a>

## Discussion

The system determines the region from the provided bounding box or derives the region from a box enclosing the circle specified by [center](../pointsofinterestsearchoptions/center.md) and [radius](../pointsofinterestsearchoptions/radius.md).

## See Also

### Creating a Points of Interest Search

- [PointsOfInterestSearch()](pointsofinterestsearchconstructor.md): Creates a search object for fetching points of interest.
- [PointsOfInterestSearchConstructorOptions](../pointsofinterestsearchconstructoroptions.md): Options that you provide when creating a points-of-interest search.
- [PointsOfInterestSearchOptions](../pointsofinterestsearchoptions.md): Options that you may provide when you create a points of interest search.
- [center](center.md): The center point of the request represented as latitude and longitude.
- [radius](radius.md): The distance provided in meters, or the longest distance derived from the center point to the region’s bounding box.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists points of interest categories to include or exclude.
- [language](../serviceconstructoroptions/language.md): A language identifier that determines the language for the service results text.
- [MaxRadius](maxradius.md): The maximum distance to use from the center of the region for fetching points of interest.
