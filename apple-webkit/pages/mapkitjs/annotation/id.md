> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/annotation/id

# id

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The place ID that references a place or a map feature.

## Declaration

```
get id(): string | null;
```

<a id="Discussion"></a>

## Discussion

This value is only available when you initialize an annotation with a [Place](../place.md), or when the annotation is a [MapFeatureAnnotation](../mapfeatureannotation.md)that the framework creates when someone selects a map feature with a place ID available.
