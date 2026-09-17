> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/cameraboundary

# cameraBoundary

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.23+

The boundary of the area within which the map view’s center needs to remain.

## Declaration

```
cameraBoundary?: CoordinateRegionData | MapRectData | null;
```

<a id="Discussion"></a>

## Discussion

This property requires either a [CoordinateRegion](../coordinateregion.md) or a [MapRect](../maprect.md) instance as a value.
