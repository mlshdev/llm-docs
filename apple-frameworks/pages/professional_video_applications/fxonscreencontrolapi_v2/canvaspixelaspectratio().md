> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v2/canvaspixelaspectratio()](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v2/canvaspixelaspectratio())

# canvasPixelAspectRatio() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Returns the pixel aspect ratio of the canvas.

## Declaration

```swift
func canvasPixelAspectRatio() -> Double
```

<a id="return-value"></a>

## Return Value

The pixel aspect ratio of the canvas.

<a id="discussion"></a>

## Discussion

This can change if the user sets the canvas to be viewed with or without pixel aspect ratio correction, so do not cache this value.

## See Also

### Canvas Information

- [canvasZoom()](canvaszoom%28%29.md): Returns the zoom factor the user has set the canvas
- [pixelAspectRatio()](pixelaspectratio%28%29.md): Returns the pixel aspect ratio for which the on-screen control applies.
- [objectBounds()](objectbounds%28%29.md): Returns the bounds of the object that the on-screen control applies to.
- [objectToScreenTransform()](objecttoscreentransform%28%29.md): Returns a 4x4 matrix describing the transformation from object normalized space

# canvasPixelAspectRatio (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the pixel aspect ratio of the canvas.

## Declaration

```objectivec
- (double) canvasPixelAspectRatio;
```

<a id="return-value"></a>

## Return Value

The pixel aspect ratio of the canvas.

<a id="discussion"></a>

## Discussion

This can change if the user sets the canvas to be viewed with or without pixel aspect ratio correction, so do not cache this value.

## See Also

### Canvas Information

- [canvasZoom](canvaszoom%28%29.md): Returns the zoom factor the user has set the canvas
- [pixelAspectRatio](pixelaspectratio%28%29.md): Returns the pixel aspect ratio for which the on-screen control applies.
- [objectBounds](objectbounds%28%29.md): Returns the bounds of the object that the on-screen control applies to.
- [objectToScreenTransform](objecttoscreentransform%28%29.md): Returns a 4x4 matrix describing the transformation from object normalized space
