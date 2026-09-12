> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchoptions/pointofinterestfilter](https://developer.apple.com/documentation/mapkitjs/searchoptions/pointofinterestfilter)

# pointOfInterestFilter

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.32.2+

A filter for including or excluding point-of-interest categories in search results.

## Declaration

```
pointOfInterestFilter?: PointOfInterestFilter;
```

<a id="Discussion"></a>

## Discussion

If you provide a [PointOfInterestFilter](../pointofinterestfilter.md) and set [includePointsOfInterest](../searchconstructoroptions/includepointsofinterest.md) to `false` in the constructor, the filter overrides the Boolean and the search returns points of interest allowed by the filter.

To include or exclude all points of interest use [filterIncludingAllCategories](../mapkit/filterincludingallcategories.md) or [filterExcludingAllCategories](../mapkit/filterexcludingallcategories.md), respectively.
