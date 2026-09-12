> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchconstructoroptions/includepointsofinterest](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/includepointsofinterest)

# includePointsOfInterest

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.32.2+

A Boolean value that indicates whether the search results should include points of interest.

## Declaration

```
includePointsOfInterest?: boolean;
```

<a id="Discussion"></a>

## Discussion

If you set this value to `false` and include a [pointOfInterestFilter](../searchoptions/pointofinterestfilter.md), the filter takes precedence and MapKit JS ignores the `false` value. The default value is `true`.

## See Also

### Points of Interest

- [pointOfInterestFilter](pointofinterestfilter.md): A filter used to include or exclude point-of-interest categories.
