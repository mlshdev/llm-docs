> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/fadingstickyheader](https://developer.apple.com/documentation/applenewsformat/fadingstickyheader)

# FadingStickyHeader

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The scene that briefly keeps a header at the top of the screen as the person scrolls through the article.

## Declaration

```
object FadingStickyHeader
```

## Properties

- `fadeColor` — `Color`: The color the header background fades to, defined as a 3- to 8-character hexadecimal string or a color name string.

  Default value: `#000000` (black)
- `type` — `string` (required): Always `fading_sticky_header` for this scene type.
  **Allowed values:** `fading_sticky_header`

## Mentioned In

- [Adding a Scene to a Chapter or a Section Header](../applenews/adding-a-scene-to-a-chapter-or-a-section-header.md)

<a id="Discussion"></a>

## Discussion

In the `FadingStickyHeader` scene, the header briefly “sticks” to the top of the screen as the person scrolls down through the article (away from the header) as shown in [this video](https://developer.apple.com/apple-news/videos/fading-sticky-header.mp4).

You can use a `fading_sticky_header` with a [Section](section.md) or [Chapter](chapter.md) component that has a child `header` component. (The `section` or `chapter` component must contain a component with a `role` of `header`.) The header fades to the color you define in the `fadeColor` property of the `fading_sticky_header` scene.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "section",
      "scene": {
        "type": "fading_sticky_header",
        "fadeColor": "#FFFFFF"
      },
      "components": [
        {
          "role": "header",
          "style": {
            "fill": {
              "type": "image",
              "URL": "bundle://header.jpg",
              "fillMode": "cover",
              "verticalAlignment": "top",
              "horizontalAlignment": "center"
            }
          },
          "layout": {
            "minimumHeight": "75cw"
          },
          "components": [
            {
              "role": "title",
              "text": "Article Title",
              "textStyle": {
                "textAlignment": "center"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

## Relationships

### Inherits From

- [Scene](scene.md)

## See Also

### Scene Types

- [Scene](scene.md): A combination of animations and behaviors to use in sections and chapters that have headers.
- [ParallaxScaleHeader](parallaxscaleheader.md): The scene that gives the impression of a parallax effect by zooming out and scrolling slightly more slowly than the person’s action.
