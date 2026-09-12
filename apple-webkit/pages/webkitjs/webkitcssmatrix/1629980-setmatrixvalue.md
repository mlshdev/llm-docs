> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/webkitcssmatrix/1629980-setmatrixvalue](https://developer.apple.com/documentation/webkitjs/webkitcssmatrix/1629980-setmatrixvalue)

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
