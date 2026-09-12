> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/additems](https://developer.apple.com/documentation/mapkitjs/map/additems)

# addItems(items)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+

Adds a collection of annotations, overlays, or other item collections to the map.

## Declaration

```
addItems(items: (Overlay | Annotation)[]): (Annotation | Overlay)[];
```

## Parameters

- `items`: An array of annotations, overlays, or the data returned from [importGeoJSON()](../mapkit/importgeojson.md) to display on the map.

<a id="return-value"></a>

## Return Value

Returns an array of items added to the map.

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

Use [addItems()](additems.md) to add elements to the map after importing them from [importGeoJSON()](../mapkit/importgeojson.md).

This method doesn’t change the map’s visible region. Use [showItems()](showitems.md) with the list of items to change the map’s view.

## See Also

### Adding and removing geographical features

- [removeItems()](removeitems.md): Removes a collection of annotations, overlays, or other item collections from the map.
