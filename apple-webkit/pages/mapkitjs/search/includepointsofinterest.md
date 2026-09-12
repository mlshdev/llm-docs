> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/search/includepointsofinterest](https://developer.apple.com/documentation/mapkitjs/search/includepointsofinterest)

# includePointsOfInterest

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that indicates whether the search results should include points of interest.

## Declaration

```
get includePointsOfInterest(): boolean;
set includePointsOfInterest(value: boolean);
```

<a id="Discussion"></a>

## Discussion

If you set this value to `false` and include a [pointOfInterestFilter](pointofinterestfilter.md), the filter takes precedence and MapKit JS ignores the `false` value. The default value is `true`.
