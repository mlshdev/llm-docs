> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1632236-shadowblur](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1632236-shadowblur)

# shadowBlur

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 3.0+ · Safari Mobile 1.0+

A floating-point number that controls the degree of Gaussian blur applied to shadows.

## Declaration

```
attribute unrestricted float shadowBlur;
```

<a id="discussion"></a>

## Discussion

If shadows are enabled, each shadow has a Gaussian blur applied to its alpha value, with a standard deviation of `shadowBlur`. The `shadowBlur` value must be a positive number, and may be zero.

Shadows are cast if the value of the `shadowBlur` property is nonzero and the alpha value of `shadowColor` is nonzero.

## See Also

### Working with Shadows

- [clearShadow](1634057-clearshadow.md): Turns shadows off.
- [shadowColor](1629275-shadowcolor.md): A string that contains the RGBa color value of shadows.
- [shadowOffsetX](1632399-shadowoffsetx.md): A floating-point number that controls the horizontal offset of shadows from the elements casting the shadows.
- [shadowOffsetY](1633455-shadowoffsety.md): A floating-point number that controls the vertical offset of shadows from the elements casting the shadows.
