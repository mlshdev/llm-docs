> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchconstructoroptions/coordinate](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/coordinate)

# coordinate

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

A map coordinate that provides a hint for the geographic area to search.

## Declaration

```
coordinate?: CoordinateData;
```

<a id="Discussion"></a>

## Discussion

This property supplies coordinates as a reference for a search.

```javascript
{ coordinate: new mapkit.Coordinate(37.37, -122.04) }
```

## See Also

### Search Initialization

- [getsUserLocation](../serviceconstructoroptions/getsuserlocation.md): A Boolean value that indicates whether to limit the results to the user’s location, according to the web browser.
- [language](../serviceconstructoroptions/language.md): A language identifier that determines the language for the service results text.
- [region](region.md): A map region that provides a hint for the geographic area to search.
