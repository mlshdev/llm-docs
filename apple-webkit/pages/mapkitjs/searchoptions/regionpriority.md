> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchoptions/regionpriority](https://developer.apple.com/documentation/mapkitjs/searchoptions/regionpriority)

# regionPriority

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.78.1+

A region priority value that controls whether results occur outside, or strictly within, the region.

## Declaration

```
regionPriority?: RegionPriority;
```

<a id="Discussion"></a>

## Discussion

Use this property to filter places that exist outside the bounds of a region that may have the same name.

## See Also

### Autocomplete search filtering

- [includePhysicalFeatures](includephysicalfeatures.md): A Boolean value that indicates whether the search results include physical features, such as mountain ranges, rivers, and ocean basins.
- [includePointsOfInterest](includepointsofinterest.md): A Boolean value that indicates whether the search results should include points of interest.
- [includeQueries](../searchautocompleteoptions/includequeries.md): A Boolean value that indicates whether the search results include queries.
- [limitToCountries](limittocountries.md): A string that constrains search results to within the provided countries.
