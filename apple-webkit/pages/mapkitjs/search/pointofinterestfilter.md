> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/search/pointofinterestfilter](https://developer.apple.com/documentation/mapkitjs/search/pointofinterestfilter)

# pointOfInterestFilter

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A filter to use to include or exclude point-of-interest categories.

## Declaration

```
get pointOfInterestFilter(): PointOfInterestFilter | null;
set pointOfInterestFilter(value: PointOfInterestFilter | null);
```

<a id="Discussion"></a>

## Discussion

If you provide a [PointOfInterestFilter](../pointofinterestfilter.md) and set [includePointsOfInterest](includepointsofinterest.md) to `false`, the filter takes precedence and MapKit JS ignores the Boolean.
