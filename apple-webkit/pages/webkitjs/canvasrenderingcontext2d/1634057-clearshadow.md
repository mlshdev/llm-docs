> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1634057-clearshadow](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1634057-clearshadow)

# clearShadow

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 3.0+ · Safari Mobile 1.0+

Turns shadows off.

## Declaration

```
void clearShadow();
```

<a id="discussion"></a>

## Discussion

When you set a shadow color or shadow blur, and a shadow offset, all subsequent drawing operations include a shadow of the current color and blur, at the specified offset. The `clearShadow` method is a convenient way to turn shadows off.

> **Note**

> The `clearShadow()` method is not currently part of the HTML5 specification. It is supported in Safari and other Webkit-based browsers.

## See Also

### Working with Shadows

- [shadowBlur](1632236-shadowblur.md): A floating-point number that controls the degree of Gaussian blur applied to shadows.
- [shadowColor](1629275-shadowcolor.md): A string that contains the RGBa color value of shadows.
- [shadowOffsetX](1632399-shadowoffsetx.md): A floating-point number that controls the horizontal offset of shadows from the elements casting the shadows.
- [shadowOffsetY](1633455-shadowoffsety.md): A floating-point number that controls the vertical offset of shadows from the elements casting the shadows.
