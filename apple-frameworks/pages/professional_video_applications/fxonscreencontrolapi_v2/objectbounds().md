> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v2/objectbounds()](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v2/objectbounds())

# objectBounds() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Returns the bounds of the object that the on-screen control applies to.

## Declaration

```swift
func objectBounds() -> NSRect
```

<a id="return-value"></a>

## Return Value

The rectangle of the on-screen control.

## See Also

### Canvas Information

- [canvasZoom()](canvaszoom%28%29.md): Returns the zoom factor the user has set the canvas
- [canvasPixelAspectRatio()](canvaspixelaspectratio%28%29.md): Returns the pixel aspect ratio of the canvas.
- [pixelAspectRatio()](pixelaspectratio%28%29.md): Returns the pixel aspect ratio for which the on-screen control applies.
- [objectToScreenTransform()](objecttoscreentransform%28%29.md): Returns a 4x4 matrix describing the transformation from object normalized space

# objectBounds (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the bounds of the object that the on-screen control applies to.

## Declaration

```objectivec
- (NSRect) objectBounds;
```

<a id="return-value"></a>

## Return Value

The rectangle of the on-screen control.

## See Also

### Canvas Information

- [canvasZoom](canvaszoom%28%29.md): Returns the zoom factor the user has set the canvas
- [canvasPixelAspectRatio](canvaspixelaspectratio%28%29.md): Returns the pixel aspect ratio of the canvas.
- [pixelAspectRatio](pixelaspectratio%28%29.md): Returns the pixel aspect ratio for which the on-screen control applies.
- [objectToScreenTransform](objecttoscreentransform%28%29.md): Returns a 4x4 matrix describing the transformation from object normalized space
