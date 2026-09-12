> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/colorstop](https://developer.apple.com/documentation/applenewsformat/colorstop)

# ColorStop

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The object for specifying the color and location for a color stop in a gradient.

## Declaration

```
object ColorStop
```

## Properties

- `color` — `Color` (required): The color of this color stop.
- `location` — `number`: An optional location of the color stop within the gradient, as a percentage of the gradient size. If you omit `location`, Apple News calculates the length of the stop by first subtracting color stops with specified locations from the full length, then equally distributing the remaining length.
  **Minimum:** `0`  
  **Maximum:** `100`

<a id="Discussion"></a>

## Discussion

Use this object for gradients in a [LinearGradientFill](lineargradientfill.md) style definition.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "container",
      "layout": {
        "ignoreDocumentMargin": true,
        "minimumHeight": "50vh"
      },
      "style": {
        "fill": {
          "type": "linear_gradient",
          "angle": -10,
          "colorStops": [
            {
              "color": "#FFFFFF",
              "location": 0
            },
            {
              "color": "#FFFFFF",
              "location": 20
            },
            {
              "color": "#AAAAAA",
              "location": 50
            },
            {
              "color": "#333333",
              "location": 90
            },
            {
              "color": "#000000",
              "location": 100
            }
          ]
        }
      },
      "components": [
        {
          "role": "body",
          "textStyle": {
            "textColor": "#FFFFFF"
          },
          "text": "Fade to black."
        }
      ]
    }
  ]
}
```

## See Also

### Backgrounds for Components

- [Applying a Background to a Component](../applenews/applying-a-background-to-a-component.md): Change the appearance of the backgrounds in your article.
- [ImageFill](imagefill.md): The object for adding an image background fill to a component.
- [RepeatableImageFill](repeatableimagefill.md): The object for adding a background image that Apple News can repeat.
- [VideoFill](videofill.md): The object for adding a video background fill to a component.
- [LinearGradientFill](lineargradientfill.md): The object for displaying a linear gradient as a component background.
- [GradientFill](gradientfill.md): The properties all gradient fill types share.
- [Fill](fill.md): The object for setting a fill type and attachment for a component’s background fill.
