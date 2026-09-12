> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/annotation/callout](https://developer.apple.com/documentation/mapkitjs/annotation/callout)

# callout

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A delegate that enables you to customize the annotation’s callout.

## Declaration

```
get callout(): AnnotationCalloutDelegate | null;
set callout(callout: AnnotationCalloutDelegate | null);
```

<a id="Discussion"></a>

## Discussion

The [callout](callout.md) delegate is an optional object that implements methods for customizing the appearance, content, and animations of the callout that appear when selecting the annotation.

See [AnnotationCalloutDelegate](../annotationcalloutdelegate.md) for details.

## See Also

### Managing callouts

- [calloutEnabled](calloutenabled.md): A Boolean value that determines whether the map shows an annotation’s callout.
- [calloutOffset](calloutoffset.md): An offset that changes the annotation callout’s default placement.
