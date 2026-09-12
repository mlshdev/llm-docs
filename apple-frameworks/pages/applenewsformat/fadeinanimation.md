> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/fadeinanimation](https://developer.apple.com/documentation/applenewsformat/fadeinanimation)

# FadeInAnimation

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The animation whereby a component fades into view.

## Declaration

```
object FadeInAnimation
```

## Properties

- `type` — `string` (required): This animation always has the type `fade_in`.
  **Allowed values:** `fade_in`
- `initialAlpha` — `number`: The initial transparency of the component (and the animation). Set `initialAlpha` to a value between `0` (completely transparent) and `1` (completely visible).
  **Default:** `0.3`  
  **Minimum:** `0`  
  **Maximum:** `1`
- `userControllable` — `boolean`: Indicates whether user action like scrolling controls the animation (`true`), or the animation happens when the component is within the visible area of the document (`false`).
  **Default:** `false`

## Mentioned In

- [About Component Animations](../applenews/about-component-animations.md)

<a id="Discussion"></a>

## Discussion

With this animation type the component fades in as it enters the person’s view. The initial transparency (alpha value) of the component is configurable. A `FadeInAnimation` with the `userControllable` property set to `true` is shown in [this video](https://developer.apple.com/apple-news/videos/fade-in-true.mp4).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "heading1",
      "text": "2. Unbeatable Heat"
    },
    {
      "role": "figure",
      "URL": "bundle://figure.jpg",
      "animation": {
        "type": "fade_in",
        "userControllable": false,
        "initialAlpha": 0
      }
    }
  ]
}
```

## Relationships

### Inherits From

- [ComponentAnimation](componentanimation.md)

## See Also

### Related Documentation

- [Adding Animations](../applenews/adding-animations.md): Use animations to affect how parts of your article come into view the first time they appear.

### Animations

- [About Component Animations](../applenews/about-component-animations.md): Learn how to affect the way in which components come into view.
- [ComponentAnimation](componentanimation.md): Properties that all types of animations share.
- [AppearAnimation](appearanimation.md): An animation type whereby a component appears on the screen.
- [MoveInAnimation](moveinanimation.md): The animation whereby a component moves in from the side of the screen.
- [ScaleFadeAnimation](scalefadeanimation.md): The animation in which a component scales up and fades into view.
