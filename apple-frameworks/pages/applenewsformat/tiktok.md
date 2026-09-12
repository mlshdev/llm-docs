> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/tiktok](https://developer.apple.com/documentation/applenewsformat/tiktok)

# TikTok

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.18+

The component for adding a TikTok post.

## Declaration

```
object TikTok
```

## Properties

- `role` — `string` (required): Always `tiktok` for this component.
  **Allowed values:** `tiktok`
- `URL` — `uri` (required): The URL of the TikTok post you want to embed.

  Apple News supports the following URL format for TikTok:

  `https://www.tiktok.com/{userId}/video/{videoId}`
- `anchor` — `Anchor`: An object that defines vertical alignment with another component.
- `animation` — `(ComponentAnimation | string("none"))`: An object that defines an animation you apply to the component.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentAnimation`, `string("none")`
- `behavior` — `(Behavior | string("none"))`: An object that defines behavior for a component, like [Parallax](parallax.md) or [Springy](springy.md).

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `Behavior`, `string("none")`
- `conditional` — `(ConditionalComponent | [ConditionalComponent])`: An instance or array of component properties that you can apply conditionally, and the conditions that cause Apple News Format to apply them.
  **Allowed types:** `ConditionalComponent`, `[ConditionalComponent]`
- `hidden` — `boolean`: A Boolean value that determines whether the component is hidden.
  **Default:** `false`
- `identifier` — `string`: An optional unique identifier for this component. If you use `identifier`, it must be unique across the entire document. You need an identifier for your component if you want to anchor other components to it.
- `layout` — `(ComponentLayout | string)`: An inline `ComponentLayout` object that contains layout information, or a string reference to a `ComponentLayout` object that you define at the top level of the document.

  If you don’t define `layout`, size and position are based on various factors, such as the device type, the length of the content, and the role of this component.  
  **Allowed types:** `ComponentLayout`, `string`
- `style` — `(ComponentStyle | string | string("none"))`: An inline `ComponentStyle` object that defines the appearance of this component, or a string reference to a `ComponentStyle` object that you define at the top level of the document.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentStyle`, `string`, `string("none")`

<a id="Discussion"></a>

## Discussion

Use the `tiktok` object to include a TikTok post by specifying a URL for the post.

> **Note**

>  You can use the `TiktTok` object in ANF version 1.7 and later.

```json
{
  "components": [
    {
      "role": "tiktok",
      "URL": "https://www.tiktok.com/@applemusic/video/6564018881122276367"
    }
  ]
}
```

.

## Relationships

### Inherits From

- [Component](component.md)

## See Also

### Social Media

- [Instagram](instagram.md): The component for adding an Instagram post.
- [FacebookPost](facebookpost.md): The component for adding a Facebook post.
- [Tweet](tweet.md): The component for adding a Tweet that was posted to Twitter.
