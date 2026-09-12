> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/geocoderlookupoptions/coordinate](https://developer.apple.com/documentation/mapkitjs/geocoderlookupoptions/coordinate)

# coordinate

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

Coordinates for constraining the lookup results.

## Declaration

```
coordinate?: CoordinateData;
```

<a id="Discussion"></a>

## Discussion

Tell the geocoder to return results around this coordinate. For example, constrain the geocoder to return results around the coordinate 37.37, -122.04 with `{ coordinate: new mapkit.Coordinate(37.37, -122.04) }`.

## See Also

### Options

- [language](language.md): The language to use when displaying the lookup results.
- [limitToCountries](limittocountries.md): A list of countries for constraining the lookup results.
- [region](region.md): A region for constraining lookup results.
- [signal](signal.md): A signal object allowing you to cancel the request.
