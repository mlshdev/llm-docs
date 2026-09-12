> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/addtileoverlay](https://developer.apple.com/documentation/mapkitjs/map/addtileoverlay)

# addTileOverlay(tileOverlay)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Adds a tile overlay to the map.

## Declaration

```
addTileOverlay(tileOverlay: TileOverlay): TileOverlay;
```

## Parameters

- `tileOverlay`: The tile overlay to add.

<a id="return-value"></a>

## Return Value

Returns the tile overlay.

<a id="Discussion"></a>

## Discussion

MapKit JS adds this overlay to the end of the map’s [tileOverlays](tileoverlays.md) array.

## See Also

### Adding and removing tile overlays

- [tileOverlays](tileoverlays.md): An array of all of the map’s tile overlays.
- [addTileOverlays()](addtileoverlays.md): Adds an array of tile overlays to the map.
- [removeTileOverlay()](removetileoverlay.md): Removes a tile overlay from the map.
- [removeTileOverlays()](removetileoverlays.md): Removes an array of tile overlays from the map.
