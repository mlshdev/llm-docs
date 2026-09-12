> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/style/fillopacity](https://developer.apple.com/documentation/mapkitjs/style/fillopacity)

# fillOpacity

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The opacity of the fill color.

## Declaration

```
get fillOpacity(): number;
set fillOpacity(fillOpacity: number);
```

## Mentioned In

- [Adding interactivity to overlays](../adding-interactivity-to-overlays.md)

<a id="Discussion"></a>

## Discussion

The value of this property can be in the range of `0` (fully transparent) to `1` (fully opaque). The default fill opacity is `0.1`.

## See Also

### Styling fills

- [fillColor](fillcolor.md): The fill color of a shape.
- [fillRule](fillrule.md): A rule for determining whether a point is inside or outside a polygon.
