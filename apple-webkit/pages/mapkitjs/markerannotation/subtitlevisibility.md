> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/markerannotation/subtitlevisibility](https://developer.apple.com/documentation/mapkitjs/markerannotation/subtitlevisibility)

# subtitleVisibility

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A value that determines the behavior of the subtitle’s visibility.

## Declaration

```
get subtitleVisibility(): FeatureVisibility;
set subtitleVisibility(value: FeatureVisibility);
```

<a id="Discussion"></a>

## Discussion

The subtitle visibility controls the subtitle that renders below the balloon part of the marker. The default value is [Adaptive](../featurevisibility/adaptive.md).

For adaptive visibility, the subtitle is always hidden in the normal state, by default. In the selected state, the subtitle follows the same rules as the title.

## See Also

### Setting visibility

- [titleVisibility](titlevisibility.md): A value that determines the behavior of the title’s visibility.
