> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/imagemarkup/init(image:frame:rotation:opacity:contentsbounds:accessibilitydescription:allowedinteractions:id:)-8y6o9](https://developer.apple.com/documentation/paperkit/imagemarkup/init(image:frame:rotation:opacity:contentsbounds:accessibilitydescription:allowedinteractions:id:)-8y6o9)

# init(image:frame:rotation:opacity:contentsBounds:accessibilityDescription:allowedInteractions:id:)

**Framework:** PaperKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Initializes and returns a new image markup from the specified parameters.

## Declaration

```swift
init?(image: UIImage, frame: CGRect, rotation: CGFloat = 0.0, opacity: CGFloat = 1.0, contentsBounds: CGRect = CGRect(x: 0, y: 0, width: 1, height: 1), accessibilityDescription: String? = nil, allowedInteractions: MarkupInteractions = .all, id: MarkupID<ImageMarkup> = MarkupID())
```

## Parameters

- `image`: The image content to display.
- `frame`: The frame of the image.
- `rotation`: The rotation in radians of the image. Defaults to `0.0` (no rotation).
- `opacity`: The opacity of the image, ranging from `0.0` (fully transparent) to `1.0` (fully opaque). Defaults to `1.0`.
- `contentsBounds`: The portion of the image to display, in normalized coordinates from `0.0` to `1.0`. Defaults to `CGRect(x: 0, y: 0, width: 1, height: 1)` (full image).
- `accessibilityDescription`: The accessibility description of the image for assistive technologies. Defaults to `nil`.
- `allowedInteractions`: The flags controlling the interactions users can perform. Defaults to `.all`.
- `id`: The identity of the image. Defaults to a unique id.

<a id="discussion"></a>

## Discussion

Image content is shown scaled to fill.

## See Also

### Creating an image markup

- [init(image:frame:rotation:orientation:opacity:contentsBounds:accessibilityDescription:allowedInteractions:id:)](init%28image_frame_rotation_orientation_opacity_contentsbounds_accessibilitydescription_allowedinteractions_id_%29.md): Initializes and returns a new image markup from the specified parameters.
- [init(image:frame:rotation:opacity:contentsBounds:accessibilityDescription:allowedInteractions:id:)](init%28image_frame_rotation_opacity_contentsbounds_accessibilitydescription_allowedinteractions_id_%29-1ggjv.md): Initializes and returns a new image markup from the specified parameters.
