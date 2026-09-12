> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/componentanimation](https://developer.apple.com/documentation/applenewsformat/componentanimation)

# ComponentAnimation

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

Properties that all types of animations share.

## Declaration

```
object ComponentAnimation
```

## Properties

- `type` — `string` (required): The type of animation; for example, `move_in` for a Move-In Animation.
  **Allowed values:** `appear`, `fade_in`, `move_in`, `scale_fade`

<a id="Discussion"></a>

## Discussion

Apply an animation to a component to add movement and interest to your article.

> **Note**

>  Don’t use this object type directly. Instead, use objects (such as [AppearAnimation](appearanimation.md), [FadeInAnimation](fadeinanimation.md), [MoveInAnimation](moveinanimation.md), and [ScaleFadeAnimation](scalefadeanimation.md)) that extend animation.

Apple News Format applies a `ComponentAnimation` just once each time someone views your article. (Compare that with component behaviors whose effects are persistent and happen every time someone sees the component in your article.)

A person can control some animations with an optional `userControllable` property.

You can use this object in [Component](component.md).

## Relationships

### Inherited By

- [AppearAnimation](appearanimation.md)
- [FadeInAnimation](fadeinanimation.md)
- [MoveInAnimation](moveinanimation.md)
- [ScaleFadeAnimation](scalefadeanimation.md)

## See Also

### Related Documentation

- [Adding Animations](../applenews/adding-animations.md): Use animations to affect how parts of your article come into view the first time they appear.

### Animations

- [About Component Animations](../applenews/about-component-animations.md): Learn how to affect the way in which components come into view.
- [AppearAnimation](appearanimation.md): An animation type whereby a component appears on the screen.
- [FadeInAnimation](fadeinanimation.md): The animation whereby a component fades into view.
- [MoveInAnimation](moveinanimation.md): The animation whereby a component moves in from the side of the screen.
- [ScaleFadeAnimation](scalefadeanimation.md): The animation in which a component scales up and fades into view.
