> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapconstructoroptions/visiblemaprect](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/visiblemaprect)

# visibleMapRect

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

The visible area of the map, in map units.

## Declaration

```
visibleMapRect?: MapRectData;
```

<a id="Discussion"></a>

## Discussion

The default value is `new mapkit.MapRect(0, 0, 1, 1).`

## See Also

### Controlling the visible portion of the map

- [region](region.md): The area the map is displaying.
- [center](center.md): The map coordinate at the center of the map view.
- [rotation](rotation.md): The map’s rotation, in degrees.
- [tintColor](tintcolor.md): The CSS color that MapKit JS uses for the user interface controls on the map.
