> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchconstructoroptions/includequeries](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/includequeries)

# includeQueries

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.32.2+

A Boolean value that indicates whether the search results include queries.

## Declaration

```
includeQueries?: boolean;
```

<a id="Discussion"></a>

## Discussion

This option only applies to search autocomplete. For example, if you send *cof* to [autocomplete()](../search/autocomplete.md), the search returns only *coffee*. If you send *cof* to [autocomplete()](../search/autocomplete.md) while `includeQueries` is `false`, the search returns only addresses and points of interest (given that the setting for those options is `true`) related to *cof* and not necessarily related to *coffee*.

The default value is `true`.

## See Also

### Search filtering

- [includePhysicalFeatures](includephysicalfeatures.md): A Boolean value that indicates whether the search results include physical features, such as mountain ranges, rivers, and ocean basins.
- [limitToCountries](limittocountries.md): A string that constrains search results to within the provided countries.
- [regionPriority](regionpriority.md): A region priority value that controls whether results occur outside, or strictly within, the region.
