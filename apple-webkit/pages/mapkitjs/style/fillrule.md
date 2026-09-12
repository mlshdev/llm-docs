> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/style/fillrule](https://developer.apple.com/documentation/mapkitjs/style/fillrule)

# fillRule

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A rule for determining whether a point is inside or outside a polygon.

## Declaration

```
get fillRule(): "evenodd" | "nonzero";
set fillRule(fillRule: "evenodd" | "nonzero");
```

<a id="Discussion"></a>

## Discussion

This can be either the nonzero winding rule (`nonzero`), or the even-odd rule (`evenodd`). The default fill rule is `nonzero`.

## See Also

### Styling fills

- [fillColor](fillcolor.md): The fill color of a shape.
- [fillOpacity](fillopacity.md): The opacity of the fill color.
