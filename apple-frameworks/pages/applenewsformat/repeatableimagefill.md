> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/repeatableimagefill](https://developer.apple.com/documentation/applenewsformat/repeatableimagefill)

# RepeatableImageFill

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.9+

The object for adding a background image that Apple News can repeat.

## Declaration

```
object RepeatableImageFill
```

## Properties

- `type` — `string` (required): Always `repeatable_image` for this object.
  **Allowed values:** `repeatable_image`
- `URL` — `uri` (required): The URL of the image file to use for filling the component.

  Image URLs can begin with `http://`, `https://`, or `bundle://`. If the image URL begins with `bundle://`, the referenced image file must be in the same directory as the document.

  Encode image filenames as URLs.

  See [Preparing Image, Video, Audio, Music, and ARKit Assets](../applenews/preparing-image-video-audio-music-and-arkit-assets.md).
- `attachment` — `string`: A string that indicates how the fill behaves when someone scrolls.

  Valid values:

  - `scroll` (default). The fill scrolls along with its component.
  - `fixed`. The fill stays at a fixed position within the viewport.  
  **Default:** `scroll`  
  **Allowed values:** `fixed`, `scroll`
- `height` — `(SupportedUnits | number)`: The height of the image as it’s repeated. When you omit the height, Apple News uses the width property  to determine the size based on the aspect ratio of the provided image.
  **Allowed types:** `SupportedUnits`, `number`
- `horizontalAlignment` — `string`: A string that sets the horizontal alignment of the image fill within its component.

  Valid values:

  - `left`. Aligns the left edge of the fill with the left edge of the component.
  - `center` (default). Aligns the horizontal center of the fill with the center of the component.
  - `right`. Aligns the right edge of the fill with the right edge of the component.  
  **Default:** `center`  
  **Allowed values:** `left`, `center`, `right`
- `repeat` — `string`: A string that defines the direction in which Apple News repeats the background image.

  Valid values:

  - `none`. Apple News doesn’t repeat the background image.
  - `x`. Apple News repeats the image horizontally based on the original size of the image.
  - `y`. Apple News repeats the image vertically based on the original size of the image.
  - `both` (default). The image is repeated horizontally and vertically based on the original size of the image.  
  **Default:** `both`  
  **Allowed values:** `none`, `x`, `y`, `both`
- `verticalAlignment` — `string`: The vertical alignment of the repeatable image fill within its component.

  Valid values:

  - `top`. Aligns the top of the fill with the top edge of the component.
  - `center` (default). Aligns the vertical center of the fill with the center of the component.
  - `bottom`. Aligns the bottom of the fill with the bottom edge of the component.

  This property has no effect when the `repeat` property is set to `both` or `y`.  
  **Default:** `center`  
  **Allowed values:** `top`, `center`, `bottom`
- `width` — `(SupportedUnits | number)`: The width of the image as it’s repeated. When you omit `width`, Apple News uses the `height` property to determine the size based on the aspect ratio of the provided image.
  **Allowed types:** `SupportedUnits`, `number`

## Mentioned In

- [Applying a Background to a Component](../applenews/applying-a-background-to-a-component.md)
- [Preparing Image, Video, Audio, Music, and ARKit Assets](../applenews/preparing-image-video-audio-music-and-arkit-assets.md)

<a id="Discussion"></a>

## Discussion

Use the `RepeatableImage` fill type object to add a repeatable image on components.

The recommended dimensions for a repeatable image are as follows:

- Minimum dimensions: 3 x 6 or 6 x 3 pixels
- Maximum dimensions: 3000 x 3000 pixels

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "container",
      "layout": {
        "minimumHeight": 300
      },
      "style": {
        "fill": {
          "type": "repeatable_image",
          "URL": "bundle://myimage.jpg",
          "repeat": "x",
          "width": 30,
          "height": 30,
          "verticalAlignment": "center"
        }
      }
    }
  ]
}
```

## Relationships

### Inherits From

- [Fill](fill.md)

## See Also

### Backgrounds for Components

- [Applying a Background to a Component](../applenews/applying-a-background-to-a-component.md): Change the appearance of the backgrounds in your article.
- [ImageFill](imagefill.md): The object for adding an image background fill to a component.
- [VideoFill](videofill.md): The object for adding a video background fill to a component.
- [LinearGradientFill](lineargradientfill.md): The object for displaying a linear gradient as a component background.
- [GradientFill](gradientfill.md): The properties all gradient fill types share.
- [Fill](fill.md): The object for setting a fill type and attachment for a component’s background fill.
- [ColorStop](colorstop.md): The object for specifying the color and location for a color stop in a gradient.
