> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v2/canvaszoom()](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v2/canvaszoom())

# canvasZoom() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Returns the zoom factor the user has set the canvas

## Declaration

```swift
func canvasZoom() -> Double
```

<a id="return-value"></a>

## Return Value

Returns the zoom factor the user has set for the canvas. The unit is a percentage.

## See Also

### Canvas Information

- [canvasPixelAspectRatio()](canvaspixelaspectratio%28%29.md): Returns the pixel aspect ratio of the canvas.
- [pixelAspectRatio()](pixelaspectratio%28%29.md): Returns the pixel aspect ratio for which the on-screen control applies.
- [objectBounds()](objectbounds%28%29.md): Returns the bounds of the object that the on-screen control applies to.
- [objectToScreenTransform()](objecttoscreentransform%28%29.md): Returns a 4x4 matrix describing the transformation from object normalized space

# canvasZoom (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the zoom factor the user has set the canvas

## Declaration

```objectivec
- (double) canvasZoom;
```

<a id="return-value"></a>

## Return Value

Returns the zoom factor the user has set for the canvas. The unit is a percentage.

## See Also

### Canvas Information

- [canvasPixelAspectRatio](canvaspixelaspectratio%28%29.md): Returns the pixel aspect ratio of the canvas.
- [pixelAspectRatio](pixelaspectratio%28%29.md): Returns the pixel aspect ratio for which the on-screen control applies.
- [objectBounds](objectbounds%28%29.md): Returns the bounds of the object that the on-screen control applies to.
- [objectToScreenTransform](objecttoscreentransform%28%29.md): Returns a 4x4 matrix describing the transformation from object normalized space
