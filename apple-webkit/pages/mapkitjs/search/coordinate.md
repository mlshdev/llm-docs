> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/search/coordinate](https://developer.apple.com/documentation/mapkitjs/search/coordinate)

# coordinate

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A map coordinate that provides a hint for the geographic area to search.

## Declaration

```
get coordinate(): Coordinate | null;
set coordinate(value: CoordinateData | null);
```

<a id="Discussion"></a>

## Discussion

This property supplies coordinates as a reference for a search, for example the coordinates of San Francisco City Hall in San Francisco, CA.

```javascript
{ coordinate: new mapkit.Coordinate(37.779268, -122.419248) }
```
