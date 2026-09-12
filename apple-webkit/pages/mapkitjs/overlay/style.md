> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/overlay/style](https://developer.apple.com/documentation/mapkitjs/overlay/style)

# style

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

Style properties to apply to the overlay.

## Declaration

```
get style(): Style;
set style(style: Style);
```

<a id="Discussion"></a>

## Discussion

The following example shows a new [style](style.md) object replacing the current style properties for a circle overlay:

```javascript
circleOverlay.style = new mapkit.Style({
    strokeColor: "#777",
    lineWidth: 3,
    fillColor: "#FFF",
    fillOpacity: .2
});
```

You can also change style properties individually, as this example shows:

```javascript
circleOverlay.style.fillOpacity = .33;
circleOverlay.style.lineWidth = 4;
```

## See Also

### Setting overlay options

- [data](data.md): Custom data to associate with the overlay.
- [visible](visible.md): A Boolean value that determines whether an overlay is visible.
- [enabled](enabled.md): A Boolean value that determines whether the overlay responds to user interaction.
- [selected](selected.md): A Boolean value that indicates whether the user selects the overlay.
- [map](map.md): The map you add the overlay to.
