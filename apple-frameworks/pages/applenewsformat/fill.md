> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/fill](https://developer.apple.com/documentation/applenewsformat/fill)

# Fill

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The object for setting a fill type and attachment for a component’s background fill.

## Declaration

```
object Fill
```

## Properties

- `type` — `string` (required): The type of fill to apply.
  **Allowed values:** `linear_gradient`, `image`, `repeatable_image`, `video`
- `attachment` — `string`: Indicates how the fill behaves when a person scrolls.

  Valid values:

  - `scroll` (default): The fill scrolls along with its component.
  - `fixed`: The fill stays at a fixed position within the viewport.  
  **Default:** `scroll`  
  **Allowed values:** `fixed`, `scroll`

## Mentioned In

- [Nesting Components in an Article](../applenews/nesting-components-in-an-article.md)

<a id="Discussion"></a>

## Discussion

This is an abstract definition. Don’t use this object type directly; use only the objects that extend `Fill,` for example [GradientFill](gradientfill.md), [ImageFill](imagefill.md), `and` [VideoFill](videofill.md).

## Relationships

### Inherited By

- [GradientFill](gradientfill.md)
- [ImageFill](imagefill.md)
- [RepeatableImageFill](repeatableimagefill.md)
- [VideoFill](videofill.md)

## See Also

### Backgrounds for Components

- [Applying a Background to a Component](../applenews/applying-a-background-to-a-component.md): Change the appearance of the backgrounds in your article.
- [ImageFill](imagefill.md): The object for adding an image background fill to a component.
- [RepeatableImageFill](repeatableimagefill.md): The object for adding a background image that Apple News can repeat.
- [VideoFill](videofill.md): The object for adding a video background fill to a component.
- [LinearGradientFill](lineargradientfill.md): The object for displaying a linear gradient as a component background.
- [GradientFill](gradientfill.md): The properties all gradient fill types share.
- [ColorStop](colorstop.md): The object for specifying the color and location for a color stop in a gradient.
