> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/appearanimation](https://developer.apple.com/documentation/applenewsformat/appearanimation)

# AppearAnimation

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

An animation type whereby a component appears on the screen.

## Declaration

```
object AppearAnimation
```

## Properties

- `type` — `string` (required): This animation always has the type `appear`.
  **Allowed values:** `appear`

## Mentioned In

- [About Component Animations](../applenews/about-component-animations.md)

<a id="Discussion"></a>

## Discussion

With this animation type, the component starts out invisible and then appears. As the component enters the person’s view, it appears with a slight fade-in as shown in [this video](https://developer.apple.com/apple-news/videos/appear.mp4).

See also [FadeInAnimation](fadeinanimation.md), where you can set the initial appearance of the component.

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
        "type": "appear"
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
- [FadeInAnimation](fadeinanimation.md): The animation whereby a component fades into view.
- [MoveInAnimation](moveinanimation.md): The animation whereby a component moves in from the side of the screen.
- [ScaleFadeAnimation](scalefadeanimation.md): The animation in which a component scales up and fades into view.
