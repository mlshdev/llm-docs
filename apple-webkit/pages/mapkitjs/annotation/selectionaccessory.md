> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/annotation/selectionaccessory

# selectionAccessory

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.78.1+

An accessory that displays place information when a person selects a place.

## Declaration

```
get selectionAccessory(): PlaceSelectionAccessory | null;
set selectionAccessory(value: PlaceSelectionAccessory | null);
```

<a id="Discussion"></a>

## Discussion

You need to initialize an annotation with an instance of a [place](../annotationconstructoroptions/place.md) so that the accessory displays the correct place.

## See Also

### Managing selection accessories

- [selectionAccessoryOffset](selectionaccessoryoffset.md): An offset that changes the selection accessory’s default anchor point.
