> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v2/pixelaspectratio()](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v2/pixelaspectratio())

# pixelAspectRatio() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Returns the pixel aspect ratio for which the on-screen control applies.

## Declaration

```swift
func pixelAspectRatio() -> Double
```

<a id="return-value"></a>

## Return Value

The pixel aspect ratio of the on-screen control.

## See Also

### Canvas Information

- [canvasZoom()](canvaszoom%28%29.md): Returns the zoom factor the user has set the canvas
- [canvasPixelAspectRatio()](canvaspixelaspectratio%28%29.md): Returns the pixel aspect ratio of the canvas.
- [objectBounds()](objectbounds%28%29.md): Returns the bounds of the object that the on-screen control applies to.
- [objectToScreenTransform()](objecttoscreentransform%28%29.md): Returns a 4x4 matrix describing the transformation from object normalized space

# pixelAspectRatio (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the pixel aspect ratio for which the on-screen control applies.

## Declaration

```objectivec
- (double) pixelAspectRatio;
```

<a id="return-value"></a>

## Return Value

The pixel aspect ratio of the on-screen control.

## See Also

### Canvas Information

- [canvasZoom](canvaszoom%28%29.md): Returns the zoom factor the user has set the canvas
- [canvasPixelAspectRatio](canvaspixelaspectratio%28%29.md): Returns the pixel aspect ratio of the canvas.
- [objectBounds](objectbounds%28%29.md): Returns the bounds of the object that the on-screen control applies to.
- [objectToScreenTransform](objecttoscreentransform%28%29.md): Returns a 4x4 matrix describing the transformation from object normalized space
