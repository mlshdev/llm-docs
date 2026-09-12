> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/gradientfill](https://developer.apple.com/documentation/applenewsformat/gradientfill)

# GradientFill

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The properties all gradient fill types share.

## Declaration

```
object GradientFill
```

## Properties

- `colorStops` — `[ColorStop]` (required): An array of color stops. Each stop sets a color and location along the gradient.

  Provide at least 2 `colorStop` items.
- `type` — `string` (required): The type of gradient; for example `linear_gradient`.
- `attachment` — `string`: A string that indicates how `fill` behaves when a person scrolls.

  Valid values:

  - `scroll` (default). The fill scrolls along with its component.
  - `fixed`. The fill stays at a fixed position within the viewport.  
  **Default:** `scroll`  
  **Allowed values:** `fixed`, `scroll`

## Mentioned In

- [Supporting Dark Mode for Your Article](../applenews/supporting-dark-mode-for-your-article.md)

<a id="Discussion"></a>

## Discussion

This is an abstract definition. Don’t use this object type directly; use only the object that extends it, such as [LinearGradientFill](lineargradientfill.md).

You can use this object in [ComponentStyle](componentstyle.md).

## Relationships

### Inherits From

- [Fill](fill.md)

### Inherited By

- [LinearGradientFill](lineargradientfill.md)

## See Also

### Backgrounds for Components

- [Applying a Background to a Component](../applenews/applying-a-background-to-a-component.md): Change the appearance of the backgrounds in your article.
- [ImageFill](imagefill.md): The object for adding an image background fill to a component.
- [RepeatableImageFill](repeatableimagefill.md): The object for adding a background image that Apple News can repeat.
- [VideoFill](videofill.md): The object for adding a video background fill to a component.
- [LinearGradientFill](lineargradientfill.md): The object for displaying a linear gradient as a component background.
- [Fill](fill.md): The object for setting a fill type and attachment for a component’s background fill.
- [ColorStop](colorstop.md): The object for specifying the color and location for a color stop in a gradient.
