> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/backgroundparallax](https://developer.apple.com/documentation/applenewsformat/backgroundparallax)

# BackgroundParallax

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The behavior whereby the background of a component moves slightly slower than a person’s scroll speed.

## Declaration

```
object BackgroundParallax
```

## Properties

- `type` — `string` (required): This behavior always has the type `background_parallax`.
  **Allowed values:** `background_parallax`

## Mentioned In

- [About Component Behaviors](../applenews/about-component-behaviors.md)

<a id="Discussion"></a>

## Discussion

When you apply the `BackgroundParallax` behavior to a component, the background of the component moves slightly more slowly than a person’s scroll speed, as shown in [this video](https://developer.apple.com/apple-news/videos/background-parallax.mp4).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "container",
      "behavior": {
        "type": "background_parallax"
      },
      "style": {
        "fill": {
          "type": "image",
          "URL": "bundle://image.jpg",
          "fillMode": "cover",
          "verticalAlignment": "top"
        }
      },
      "layout": {
        "minimumHeight": "77.2cw"
      }
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
- [Motion](motion.md): The behavior whereby a component reacts to the motion of the person’s device.
- [Parallax](parallax.md): The behavior whereby a component moves at a speed different from the scroll speed.
- [Springy](springy.md): The behavior whereby a component acts as if it’s on a short spring.
