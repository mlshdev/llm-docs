> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkitjs/webkitcssmatrix/1629980-setmatrixvalue

# setMatrixValue

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 4.0+ · Safari Mobile 2.0+

Sets the matrix values using a string representation.

## Declaration

```
void setMatrixValue(
    optional DOMString string
);
```

## Parameters

- `string`: A string returned by the [matrix3d](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/Functions.html#//apple_ref/css/func/matrix3d) transform function—typically returned by `window.getComputedStyle(element).webkitTransform()`.
