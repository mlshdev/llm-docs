> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1631404-globalalpha](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1631404-globalalpha)

# globalAlpha

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A floating-point number controlling the degree of opacity for all drawing operations.

## Declaration

```
attribute unrestricted float globalAlpha;
```

<a id="discussion"></a>

## Discussion

Set the `globalAlpha` to any value between 0 and 1, inclusive, to set the degree of opacity for all subsequent drawing operations, with 0 being completely transparent and 1 being completely opaque. Any pixels drawn subsequently have their alpha channel value multiplied by the `globalAlpha` value.

## See Also

### Compositing

- [globalCompositeOperation](1632770-globalcompositeoperation.md): A string representing the compositing method for drawing operations.
