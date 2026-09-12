> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1629275-shadowcolor](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1629275-shadowcolor)

# shadowColor

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 3.0+ · Safari Mobile 1.0+

A string that contains the RGBa color value of shadows.

## Declaration

```
attribute DOMString shadowColor;
```

<a id="discussion"></a>

## Discussion

The value may be any CSS color value. If the alpha value of `shadowColor` is nonzero, shadows are cast, provided that at least one of the three properties `shadowBlur`, `shadowOffsetX`, or `shadowOffsetY` is also nonzero.

## See Also

### Working with Shadows

- [clearShadow](1634057-clearshadow.md): Turns shadows off.
- [shadowBlur](1632236-shadowblur.md): A floating-point number that controls the degree of Gaussian blur applied to shadows.
- [shadowOffsetX](1632399-shadowoffsetx.md): A floating-point number that controls the horizontal offset of shadows from the elements casting the shadows.
- [shadowOffsetY](1633455-shadowoffsety.md): A floating-point number that controls the vertical offset of shadows from the elements casting the shadows.
