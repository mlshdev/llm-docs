> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawing-swift.struct/image(from:scale:)-6p3zc](https://developer.apple.com/documentation/pencilkit/pkdrawing-swift.struct/image(from:scale:)-6p3zc)

# image(from:scale:)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns an image object that contains the specified portion of the drawing.

## Declaration

```swift
func image(from rect: CGRect, scale: CGFloat) -> NSImage
```

## Parameters

- `rect`: The portion of the drawing that you want to capture. Specify a rectangle in the canvas’ coordinate system.
- `scale`: The scale factor at which to create the image. Specifying scale factors greater than `1.0` creates an image with more detail. For example, you might specify a scale factor of `2.0` or `3.0` when displaying the image on a Retina display.

<a id="return-value"></a>

## Return Value

A new image object that contains the rendered content.

<a id="Discussion"></a>

## Discussion

This method creates a new image and renders content from the canvas into that image at the specified scale factor.

## See Also

### Generating an image

- [image(from:scale:)](image%28from_scale_%29-220d0.md): Returns an image object that contains the specified portion of the drawing.
