> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/placeannotation/glyphcolor

# glyphColor

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.78.1+

The selected glyph color for the place.

## Declaration

```
get glyphColor(): string;
```

<a id="Discussion"></a>

## Discussion

Not all places have a glyph color. This property returns a default color when the place doesn’t have a glyph color. You can’t set the glyph color property of the place annotation.
