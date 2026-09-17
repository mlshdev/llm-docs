> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/search/pointofinterestfilter

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
