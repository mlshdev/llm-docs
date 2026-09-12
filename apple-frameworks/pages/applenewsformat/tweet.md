> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/tweet](https://developer.apple.com/documentation/applenewsformat/tweet)

# Tweet

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The component for adding a Tweet that was posted to Twitter.

## Declaration

```
object Tweet
```

## Properties

- `role` — `string` (required): Always `tweet` for this component.
  **Allowed values:** `tweet`
- `URL` — `uri` (required): The URL of the tweet you want to embed.

  Apple News supports the following URL formats for tweets:

  - `https://twitter.com/<userid>/status/<tweetId>?<id>=<value>`
  - `https://twitter.com/<userid>/statuses/<tweetId>?<id>=<value>`
  - `https://twitter.com/<userid>/status/<tweetId>/photo/<photoid>?<id>=<value>`
  - `https://x.com/<userid>/status/<tweetId>?<id>=<value>`
  - `https://x.com/<userid>/statuses/<tweetId>?<id>=<value>`
  - `https://x.com/<userid>/status/<tweetId>/photo/<photoid>?<id>=<value>`

  The query parameters are optional.
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

Use the `Tweet` object to include a Tweet from Twitter by specifying a URL for the tweet.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "title",
      "text": "Apple News App"
    },
    {
      "role": "body",
      "format": "html",
      "text": "Apple News Format allows publishers to craft beautiful editorial layouts. Galleries, audio, video, and fun interactions like animation make stories spring to life."
    },
    {
      "role": "heading2",
      "text": "Tweet"
    },
    {
      "role": "tweet",
      "URL": "https://twitter.com/AppleNews/status/1057007167679664128"
    }
  ]
}
```

## Relationships

### Inherits From

- [Component](component.md)

## See Also

### Related Documentation

- [Adding a Tweet](../applenews/adding-a-tweet.md): Include a tweet in an article.

### Social Media

- [Instagram](instagram.md): The component for adding an Instagram post.
- [FacebookPost](facebookpost.md): The component for adding a Facebook post.
- [TikTok](tiktok.md): The component for adding a TikTok post.
