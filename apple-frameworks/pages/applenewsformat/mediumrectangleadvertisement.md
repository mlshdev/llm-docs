> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/mediumrectangleadvertisement](https://developer.apple.com/documentation/applenewsformat/mediumrectangleadvertisement)

# MediumRectangleAdvertisement

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+ (deprecated in 1.17)

The component for adding a medium, fixed-size rectangle ad.

> Manual ads are no longer supported in Apple News. Use [AutoPlacement](autoplacement.md) instead.

## Declaration

```
object MediumRectangleAdvertisement
```

## Properties

- `role` — `string` (required): Always `medium_rectangle_advertisement` for this component.
  **Allowed values:** `medium_rectangle_advertisement`
- `anchor` — `Anchor`: An object that defines vertical alignment with another component.
- `animation` — `(ComponentAnimation | string("none"))`: An object that defines an animation the component applies

  Use the none value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentAnimation`, `string("none")`
- `behavior` — `(Behavior | string("none"))`: An object that defines behavior for a component, like [Parallax](parallax.md) or [Springy](springy.md).

  The `none` value is used for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `Behavior`, `string("none")`
- `conditional` — `(ConditionalComponent | [ConditionalComponent])`: An instance or array of component properties that can be applied conditionally, and the conditions that cause them to be applied.
  **Allowed types:** `ConditionalComponent`, `[ConditionalComponent]`
- `hidden` — `boolean`: A boolean value that determines whether the component is hidden.
  **Default:** `false`
- `identifier` — `string`: An optional unique identifier for this component. If used, this `identifier` must be unique across the entire document. You will need an `identifier` for your component if you want to anchor other components to it.
- `layout` — `(ComponentLayout | string)`: An inline `ComponentLayout` object that contains layout information, or a string reference to a `ComponentLayout` object that is defined at the top level of the document.

  If `layout` is not defined, size and position will be based on various factors, such as the device type, the length of the content, and the `role` of this component.  
  **Allowed types:** `ComponentLayout`, `string`
- `style` — `(ComponentStyle | string | string("none"))`: An inline [ComponentStyle](componentstyle.md) object that defines the appearance of this component, or a string reference to a `ComponentStyle` object that is defined at the top level of the document.

  The `none` value is used for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentStyle`, `string`, `string("none")`

## Mentioned In

- [Apple News Format Release Notes](../applenews/apple-news-format-release-notes.md)

<a id="Discussion"></a>

## Discussion

The `MediumRectangleAdvertisement` object has a fixed size of 300 x 250 points. You can embed this component within the text content or at the end of your article. (Medium rectangle advertisements can appear inside a [Container](container.md) only if the container is full-width.)

Keep these points in mind when including medium rectangle ads in your article:

- Do not apply animations, scenes, or behaviors to ad components.
- Ads placed on the first “screen” of an article will not be rendered.
- The dimensions of visible areas vary with screen size and text size.
- If two or more ad components are placed on the same screen, News renders only the first component.
- Do not position ads immediately before or after an image.

For advertisements that span the full width of the display, see [BannerAdvertisement](banneradvertisement.md).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "medium_rectangle_advertisement"
    }
  ]
}
```

## Relationships

### Inherits From

- [Component](component.md)

## See Also

### Advertisements

- [BannerAdvertisement](banneradvertisement.md): Deprecated. The component for adding a full-width banner ad.
