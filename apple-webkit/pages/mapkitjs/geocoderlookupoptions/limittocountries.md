> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geocoderlookupoptions/limittocountries](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/limittocountries)

# limitToCountries

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

A list of countries for constraining the lookup results.

## Declaration

```
limitToCountries?: string;
```

<a id="Discussion"></a>

## Discussion

This property tells the geocoder to return results within a list of countries. Specify countries in the list using two-letter ISO country codes. For example, constrain the geocoder to return results in Australia and New Zealand with `{ limitToCountries: "AU, NZ" }`.

## See Also

### Options

- [coordinate](coordinate.md): Coordinates for constraining the lookup results.
- [language](language.md): The language to use when displaying the lookup results.
- [region](region.md): A region for constraining lookup results.
- [signal](signal.md): A signal object allowing you to cancel the request.
