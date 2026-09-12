> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1632399-shadowoffsetx](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1632399-shadowoffsetx)

# shadowOffsetX

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 3.0+ · Safari Mobile 1.0+

A floating-point number that controls the horizontal offset of shadows from the elements casting the shadows.

## Declaration

```
attribute unrestricted float shadowOffsetX;
```

<a id="discussion"></a>

## Discussion

Shadows are cast `shadowOffsetX` pixels to the right, regardless of the canvas rotation, scale, or transformation. If `shadowOffsetX` is negative, shadows are cast to the left.

Shadows are cast if `shadowOffsetX` is nonzero and the alpha value of `shadowColor` is nonzero.

## See Also

### Working with Shadows

- [clearShadow](1634057-clearshadow.md): Turns shadows off.
- [shadowBlur](1632236-shadowblur.md): A floating-point number that controls the degree of Gaussian blur applied to shadows.
- [shadowColor](1629275-shadowcolor.md): A string that contains the RGBa color value of shadows.
- [shadowOffsetY](1633455-shadowoffsety.md): A floating-point number that controls the vertical offset of shadows from the elements casting the shadows.
