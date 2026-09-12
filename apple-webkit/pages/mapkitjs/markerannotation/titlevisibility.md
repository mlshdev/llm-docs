> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/markerannotation/titlevisibility](https://developer.apple.com/documentation/mapkitjs/markerannotation/titlevisibility)

# titleVisibility

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A value that determines the behavior of the title’s visibility.

## Declaration

```
get titleVisibility(): FeatureVisibility;
set titleVisibility(value: FeatureVisibility);
```

<a id="Discussion"></a>

## Discussion

The title visibility controls the title that renders below the balloon part of the marker. The default value is [Adaptive](../featurevisibility/adaptive.md).

For adaptive visibility, the title is always visible in the normal state, by default. When the user selects the marker, the title is visible unless the marker’s selected state requires a callout.

## See Also

### Setting visibility

- [subtitleVisibility](subtitlevisibility.md): A value that determines the behavior of the subtitle’s visibility.
