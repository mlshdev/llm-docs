> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/overlay/visible](https://developer.apple.com/documentation/mapkitjs/overlay/visible)

# visible

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that determines whether an overlay is visible.

## Declaration

```
get visible(): boolean;
set visible(visible: boolean);
```

## Mentioned In

- [Adding interactivity to overlays](../adding-interactivity-to-overlays.md)

<a id="Discussion"></a>

## Discussion

Set this property to `false` to temporarily hide an overlay. The default value is `true`.

## See Also

### Setting overlay options

- [data](data.md): Custom data to associate with the overlay.
- [enabled](enabled.md): A Boolean value that determines whether the overlay responds to user interaction.
- [selected](selected.md): A Boolean value that indicates whether the user selects the overlay.
- [style](style.md): Style properties to apply to the overlay.
- [map](map.md): The map you add the overlay to.
