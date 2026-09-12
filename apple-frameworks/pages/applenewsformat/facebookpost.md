> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/facebookpost](https://developer.apple.com/documentation/applenewsformat/facebookpost)

# FacebookPost

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The component for adding a Facebook post.

## Declaration

```
object FacebookPost
```

## Properties

- `role` — `string` (required): Always `facebook_post` for this component.
  **Allowed values:** `facebook_post`
- `URL` — `uri` (required): The URL of the Facebook post you want to embed. URLs for Facebook posts must include the identifier for the post.

  The following is an example of a Facebook post URL:

  `https://www.facebook.com/applemusic/posts/1372231696125877`

  Apple News supports the following URL formats for Facebook posts:

  - `https://www.facebook.com/{page-name}/posts/{post-id}`
  - `https://www.facebook.com/{username}/posts/{post-id}`
  - `https://www.facebook.com/{username}/activity/{activity-id}`
  - `https://www.facebook.com/photo.php?fbid={photo-id}`
  - `https://www.facebook.com/{username}/photos/{photo-id}`
  - `https://www.facebook.com/photos/{photo-id}`
  - `https://www.facebook.com/permalink.php?story_fbid={post-id}`
  - `https://www.facebook.com/{page-name}/videos/{video-id}`
  - `https://www.facebook.com/{username}/videos/{video-id}`
  - `https://www.facebook.com/photo?fbid={photo-id}`
  - `https://www.facebook.com/watch/?v={photo-id}`
  - `https://www.facebook.com/reel/{reel-id}`
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

## Mentioned In

- [Apple News Format Release Notes](../applenews/apple-news-format-release-notes.md)

<a id="Discussion"></a>

## Discussion

Use the `facebook_post` object to include a facebook post in an article by specifying a URL of a publicly available Facebook post.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "title",
      "text": "Apple Music"
    },
    {
      "role": "body",
      "text": "Lose yourself in 50 million songs."
    },
    {
      "role": "heading2",
      "text": "Facebook"
    },
    {
      "role": "facebook_post",
      "URL": "https://www.facebook.com/applemusic/posts/2678727315476302"
    }
  ]
}
```

## Relationships

### Inherits From

- [Component](component.md)

## See Also

### Social Media

- [Instagram](instagram.md): The component for adding an Instagram post.
- [TikTok](tiktok.md): The component for adding a TikTok post.
- [Tweet](tweet.md): The component for adding a Tweet that was posted to Twitter.
