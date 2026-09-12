> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/motion](https://developer.apple.com/documentation/applenewsformat/motion)

# Motion

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The behavior whereby a component reacts to the motion of the person’s device.

## Declaration

```
object Motion
```

## Properties

- `type` — `string` (required): This behavior always has the type `motion`.
  **Allowed values:** `motion`

## Mentioned In

- [About Component Behaviors](../applenews/about-component-behaviors.md)

<a id="Discussion"></a>

## Discussion

When you apply the `Motion` behavior to a component, the component reacts to the movement of the device. For example, when the user tilts the device, the component moves in the same direction. [This video](https://developer.apple.com/apple-news/videos/motion.mp4) shows an example of the `motion` behavior.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "figure",
      "behavior": {
        "type": "motion"
      },
      "URL": "bundle://figure.jpg"
    }
  ]
}
```

## Relationships

### Inherits From

- [Behavior](behavior.md)

## See Also

### Behaviors

- [About Component Behaviors](../applenews/about-component-behaviors.md): Learn how to affect components’ reactions to device motion and scrolling.
- [Behavior](behavior.md): Properties shared by all the behaviors you can use to affect how components react to device motion and scrolling.
- [BackgroundMotion](backgroundmotion.md): The behavior whereby the background of a component moves in the opposite direction from the motion of the device.
- [BackgroundParallax](backgroundparallax.md): The behavior whereby the background of a component moves slightly slower than a person’s scroll speed.
- [Parallax](parallax.md): The behavior whereby a component moves at a speed different from the scroll speed.
- [Springy](springy.md): The behavior whereby a component acts as if it’s on a short spring.
