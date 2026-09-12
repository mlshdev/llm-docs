> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/removeitems](https://developer.apple.com/documentation/mapkitjs/map/removeitems)

# removeItems(items)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Removes a collection of annotations, overlays, or other item collections from the map.

## Declaration

```
removeItems(items: (Overlay | Annotation)[]): (Annotation | Overlay)[];
```

## Parameters

- `items`: An array of annotations, overlays, or the data returned from [importGeoJSON()](../mapkit/importgeojson.md) to display on the map.

<a id="return-value"></a>

## Return Value

Returns an array of items removed from the map.

<a id="Discussion"></a>

## Discussion

This method doesn’t change the map’s visible region. Use [showItems()](showitems.md) with a list of items to focus on to update the map’s view.

## See Also

### Adding and removing geographical features

- [addItems()](additems.md): Adds a collection of annotations, overlays, or other item collections to the map.
