> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/annotation/map

# map

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The map that the framework adds the annotation to.

## Declaration

```
get map(): Map | null;
set map(_: Map | null);
```

<a id="Discussion"></a>

## Discussion

This property is `null` before MapKit JS adds the annotation to a [Map](../map.md), and after MapKit JS removes the annotation from a `mapkit.Map`.

## See Also

### Getting the map and element

- [element](element.md): The annotation’s element in the DOM.
