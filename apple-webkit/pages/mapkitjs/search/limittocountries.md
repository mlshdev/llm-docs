> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/search/limittocountries](https://developer.apple.com/documentation/mapkitjs/search/limittocountries)

# limitToCountries

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A string that constrains search results to be within the provided countries.

## Declaration

```
get limitToCountries(): string | null;
set limitToCountries(value: string | null);
```

<a id="Discussion"></a>

## Discussion

The string is a comma-separated list of two-digit ISO 3166-2 country and region codes. For example, to limit search results to Germany, Belgium, and France specify `de,be,fr`.
