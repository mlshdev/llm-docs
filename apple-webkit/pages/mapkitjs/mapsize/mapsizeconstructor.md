> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapsize/mapsizeconstructor](https://developer.apple.com/documentation/mapkitjs/mapsize/mapsizeconstructor)

# new MapSize(width, height)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates an object containing the width and height of a projected coordinate span.

## Declaration

```
constructor(width?: number, height?: number);
```

## Parameters

- `width`: The distance in map units along the east-west axis of the map projection.
- `height`: The distance in map units along the north-south axis of the map projection.

<a id="Discussion"></a>

## Discussion

The following example demonstrates how to create a `mapkit.MapSize` instance from map units:

```javascript
const mapSize = new mapkit.MapSize(0.3, 0.4);
const width = mapSize.width; // 0.3
const height = mapSize.height; // 0.4
```

## See Also

### Creating a map size

- [MapSizeData](../mapsizedata.md): A plain object representation of dimensions in map units.
