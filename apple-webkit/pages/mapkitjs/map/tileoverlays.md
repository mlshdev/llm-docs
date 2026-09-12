> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/tileoverlays](https://developer.apple.com/documentation/mapkitjs/map/tileoverlays)

# tileOverlays

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

An array of all of the map’s tile overlays.

## Declaration

```
get tileOverlays(): TileOverlay[];
set tileOverlays(tileOverlays: TileOverlay[]);
```

<a id="Discussion"></a>

## Discussion

You can set this attribute to a new (possibly empty) array of tile overlays, to update or remove all the tile overlays on the map.

## See Also

### Adding and removing tile overlays

- [addTileOverlay()](addtileoverlay.md): Adds a tile overlay to the map.
- [addTileOverlays()](addtileoverlays.md): Adds an array of tile overlays to the map.
- [removeTileOverlay()](removetileoverlay.md): Removes a tile overlay from the map.
- [removeTileOverlays()](removetileoverlays.md): Removes an array of tile overlays from the map.
