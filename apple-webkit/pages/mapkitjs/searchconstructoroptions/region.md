> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchconstructoroptions/region](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/region)

# region

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

A map region that provides a hint for the geographic area to search.

## Declaration

```
region?: CoordinateRegionData;
```

<a id="Discussion"></a>

## Discussion

This property specifies a region of a map in which to search. In a map application, this is typically the region displayed in the map.

```javascript
{ region: map.region }
```

## See Also

### Search Initialization

- [coordinate](coordinate.md): A map coordinate that provides a hint for the geographic area to search.
- [getsUserLocation](../serviceconstructoroptions/getsuserlocation.md): A Boolean value that indicates whether to limit the results to the user’s location, according to the web browser.
- [language](../serviceconstructoroptions/language.md): A language identifier that determines the language for the service results text.
