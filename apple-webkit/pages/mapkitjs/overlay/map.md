> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/overlay/map](https://developer.apple.com/documentation/mapkitjs/overlay/map)

# map

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The map you add the overlay to.

## Declaration

```
get map(): Map | null;
set map(_: Map | null);
```

<a id="Discussion"></a>

## Discussion

This property is `null` if you don’t add the overlay to a map, or if you remove it from a map.

## See Also

### Setting overlay options

- [data](data.md): Custom data to associate with the overlay.
- [visible](visible.md): A Boolean value that determines whether an overlay is visible.
- [enabled](enabled.md): A Boolean value that determines whether the overlay responds to user interaction.
- [selected](selected.md): A Boolean value that indicates whether the user selects the overlay.
- [style](style.md): Style properties to apply to the overlay.
