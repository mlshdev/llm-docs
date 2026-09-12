> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1632770-globalcompositeoperation](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1632770-globalcompositeoperation)

# globalCompositeOperation

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A string representing the compositing method for drawing operations.

## Declaration

```
attribute DOMString globalCompositeOperation;
```

<a id="discussion"></a>

## Discussion

By default, drawings layer on top of one another in drawing order, with opaque areas obscuring existing layers and transparent or translucent areas being blended with existing layers according to their alpha value. Set the `globalCompositeOperation` property to one of the `globalCompositeOperation` constants to override the default compositing method. The allowed values are `source-atop`, `source-in`, `source-out`, `source-over`, `destination-atop`, `destination-in`, `destination-out`, `destination-over`, `lighter`, `copy`, and `xor`. See [Global Compositing Operation Constants](global_compositing_operation_constants.md) for details.

## See Also

### Compositing

- [globalAlpha](1631404-globalalpha.md): A floating-point number controlling the degree of opacity for all drawing operations.
