> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchconstructoroptions/pointofinterestfilter](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/pointofinterestfilter)

# pointOfInterestFilter

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.32.2+

A filter used to include or exclude point-of-interest categories.

## Declaration

```
pointOfInterestFilter?: PointOfInterestFilter;
```

<a id="Discussion"></a>

## Discussion

If you provide a [PointOfInterestFilter](../pointofinterestfilter.md) and set [includePointsOfInterest](includepointsofinterest.md) to `false`, the filter takes precedence and MapKit JS ignores the Boolean.

## See Also

### Points of Interest

- [includePointsOfInterest](includepointsofinterest.md): A Boolean value that indicates whether the search results should include points of interest.
