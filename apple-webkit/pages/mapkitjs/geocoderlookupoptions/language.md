> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geocoderlookupoptions/language](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/language)

# language

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

The language to use when displaying the lookup results.

## Declaration

```
language?: string;
```

<a id="Discussion"></a>

## Discussion

Tell the geocoder to return results in this language. For example, setting the option `{ language: 'fr-CA' }` tells the server to send results localized to Canadian French. If you set it, this option overrides the language you provide in the [Geocoder](../geocoder.md) constructor.

## See Also

### Options

- [coordinate](coordinate.md): Coordinates for constraining the lookup results.
- [limitToCountries](limittocountries.md): A list of countries for constraining the lookup results.
- [region](region.md): A region for constraining lookup results.
- [signal](signal.md): A signal object allowing you to cancel the request.
