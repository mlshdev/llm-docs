> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/calloutenabled](https://developer.apple.com/documentation/mapkitjs/annotation/calloutenabled)

# calloutEnabled

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A Boolean value that determines whether the map shows an annotation’s callout.

## Declaration

```
get calloutEnabled(): boolean;
set calloutEnabled(value: boolean);
```

<a id="Discussion"></a>

## Discussion

If the [title](title.md) is empty, the framework can’t show the standard callout even if this property is `true`.

## See Also

### Managing callouts

- [callout](callout.md): A delegate that enables you to customize the annotation’s callout.
- [calloutOffset](calloutoffset.md): An offset that changes the annotation callout’s default placement.
