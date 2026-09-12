> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v2/objecttoscreentransform()](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v2/objecttoscreentransform())

# objectToScreenTransform() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Returns a 4x4 matrix describing the transformation from object normalized space

## Declaration

```swift
func objectToScreenTransform() -> FxMatrix44!
```

<a id="return-value"></a>

## Return Value

An Raw Matrix Data Format describing the transformation from object normalized space (0-1 in both width and height) to screen space.

## See Also

### Canvas Information

- [canvasZoom()](canvaszoom%28%29.md): Returns the zoom factor the user has set the canvas
- [canvasPixelAspectRatio()](canvaspixelaspectratio%28%29.md): Returns the pixel aspect ratio of the canvas.
- [pixelAspectRatio()](pixelaspectratio%28%29.md): Returns the pixel aspect ratio for which the on-screen control applies.
- [objectBounds()](objectbounds%28%29.md): Returns the bounds of the object that the on-screen control applies to.

# objectToScreenTransform (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns a 4x4 matrix describing the transformation from object normalized space

## Declaration

```objectivec
- (FxMatrix44 *) objectToScreenTransform;
```

<a id="return-value"></a>

## Return Value

An Raw Matrix Data Format describing the transformation from object normalized space (0-1 in both width and height) to screen space.

## See Also

### Canvas Information

- [canvasZoom](canvaszoom%28%29.md): Returns the zoom factor the user has set the canvas
- [canvasPixelAspectRatio](canvaspixelaspectratio%28%29.md): Returns the pixel aspect ratio of the canvas.
- [pixelAspectRatio](pixelaspectratio%28%29.md): Returns the pixel aspect ratio for which the on-screen control applies.
- [objectBounds](objectbounds%28%29.md): Returns the bounds of the object that the on-screen control applies to.
