> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchconstructoroptions/limittocountries](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/limittocountries)

# limitToCountries

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.49+

A string that constrains search results to within the provided countries.

## Declaration

```
limitToCountries?: string;
```

<a id="Discussion"></a>

## Discussion

The string is a comma-separated list of two-digit ISO 3166-2 country and region codes. For example, to limit search results to Germany, Belgium, and France specify `de,be,fr`.

## See Also

### Search filtering

- [includePhysicalFeatures](includephysicalfeatures.md): A Boolean value that indicates whether the search results include physical features, such as mountain ranges, rivers, and ocean basins.
- [includeQueries](includequeries.md): A Boolean value that indicates whether the search results include queries.
- [regionPriority](regionpriority.md): A region priority value that controls whether results occur outside, or strictly within, the region.
