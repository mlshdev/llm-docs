> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/moveinanimation](https://developer.apple.com/documentation/applenewsformat/moveinanimation)

# MoveInAnimation

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The animation whereby a component moves in from the side of the screen.

## Declaration

```
object MoveInAnimation
```

## Properties

- `type` — `string` (required): This animation always has the type `move_in`.
  **Allowed values:** `move_in`
- `preferredStartingPosition` — `string`: Indicates which side of the screen is the starting point of the animation. Valid values:

  - `left`: Move the component in from the left side of the screen.
  - `right`: Move the component in from the right side of the screen.

  By default, the animation starts on the side that’s closest to the component.  
  **Allowed values:** `left`, `right`
- `userControllable` — `boolean`: Indicates whether the animation happens in response to user action (`true`) or happens automatically (`false`).
  **Default:** `false`

## Mentioned In

- [About Component Animations](../applenews/about-component-animations.md)

<a id="Discussion"></a>

## Discussion

With this animation type the component moves into view from the left or right side of the screen. Initially, the component is out of view as shown in [this video](https://developer.apple.com/apple-news/videos/move-in.mp4).

You can configure a preferred starting position, but the position is not guaranteed. For example, if another component is blocking the preferred position, the `MoveInAnimation` attempts to start from the opposite side. If both sides are covered by other components, Apple News doesn’t apply the `MoveInAnimation`.

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
        "type": "move_in",
        "preferredStartingPosition": "left"
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
- [FadeInAnimation](fadeinanimation.md): The animation whereby a component fades into view.
- [ScaleFadeAnimation](scalefadeanimation.md): The animation in which a component scales up and fades into view.
