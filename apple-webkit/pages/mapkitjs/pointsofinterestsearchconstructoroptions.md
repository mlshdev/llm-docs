> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/pointsofinterestsearchconstructoroptions](https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchconstructoroptions)

# PointsOfInterestSearchConstructorOptions

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface  
**Availability:** MapKit JS 5.45+

Options that you provide when creating a points-of-interest search.

## Declaration

```
interface PointsOfInterestSearchConstructorOptions
    extends ServiceConstructorOptions
```

## Topics

### Configuring fetch options

- [region](pointsofinterestsearchconstructoroptions/region.md): Sets the region that bounds the area in which to fetch points of interest.
- [center](pointsofinterestsearchconstructoroptions/center.md): Sets the center point of the request represented as latitude and longitude.
- [radius](pointsofinterestsearchconstructoroptions/radius.md): Sets the distance provided in meters, or the longest distance derived from the center point to the region’s bounding box.
- [pointOfInterestFilter](pointsofinterestsearchconstructoroptions/pointofinterestfilter.md): Sets a filter that lists points of interest categories to include or exclude.
- [language](serviceconstructoroptions/language.md): A language identifier that determines the language for the service results text.

## Relationships

### Inherits From

- [ServiceConstructorOptions](serviceconstructoroptions.md)

## See Also

### Creating a Points of Interest Search

- [PointsOfInterestSearch()](pointsofinterestsearch/pointsofinterestsearchconstructor.md): Creates a search object for fetching points of interest.
- [PointsOfInterestSearchOptions](pointsofinterestsearchoptions.md): Options that you may provide when you create a points of interest search.
- [region](pointsofinterestsearch/region.md): The region that bounds the area in which to fetch points of interest.
- [center](pointsofinterestsearch/center.md): The center point of the request represented as latitude and longitude.
- [radius](pointsofinterestsearch/radius.md): The distance provided in meters, or the longest distance derived from the center point to the region’s bounding box.
- [pointOfInterestFilter](pointsofinterestsearch/pointofinterestfilter.md): A filter that lists points of interest categories to include or exclude.
- [language](serviceconstructoroptions/language.md): A language identifier that determines the language for the service results text.
- [MaxRadius](pointsofinterestsearch/maxradius.md): The maximum distance to use from the center of the region for fetching points of interest.
