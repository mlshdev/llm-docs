> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/springy](https://developer.apple.com/documentation/applenewsformat/springy)

# Springy

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The behavior whereby a component acts as if it’s on a short spring.

## Declaration

```
object Springy
```

## Properties

- `type` — `string` (required): This behavior always has the type `springy`.
  **Allowed values:** `springy`

## Mentioned In

- [About Component Behaviors](../applenews/about-component-behaviors.md)

<a id="Discussion"></a>

## Discussion

When you apply the `Springy` behavior to a component, the component behaves as if it’s held in place with a short spring, as shown in [this video](https://developer.apple.com/apple-news/videos/springy.mp4).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "figure",
      "behavior": {
        "type": "springy"
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
- [Motion](motion.md): The behavior whereby a component reacts to the motion of the person’s device.
- [Parallax](parallax.md): The behavior whereby a component moves at a speed different from the scroll speed.
