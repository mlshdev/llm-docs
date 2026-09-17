> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/mapevent/pointonpage

# pointOnPage

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.18+

A DOM point with the coordinate of the event on the page.

## Declaration

```
readonly pointOnPage: DOMPoint;
```

<a id="Discussion"></a>

## Discussion

You can use this property — which is an `(x, y)` coordinate — to derive a latitude and longitude coordinate on the map using [convertPointOnPageToCoordinate()](../map/convertpointonpagetocoordinate.md).
