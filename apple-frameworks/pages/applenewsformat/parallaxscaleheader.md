> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/parallaxscaleheader](https://developer.apple.com/documentation/applenewsformat/parallaxscaleheader)

# ParallaxScaleHeader

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The scene that gives the impression of a parallax effect by zooming out and scrolling slightly more slowly than the person’s action.

## Declaration

```
object ParallaxScaleHeader
```

## Properties

- `type` — `string` (required): This scene always has the type `parallax_scale`.

  Version 1.0  
  **Allowed values:** `parallax_scale`

## Mentioned In

- [Adding a Scene to a Chapter or a Section Header](../applenews/adding-a-scene-to-a-chapter-or-a-section-header.md)

<a id="Discussion"></a>

## Discussion

In the `ParallaxScale` scene, as the person scrolls down (away from the header), the background of the `header` component zooms out and scrolls slightly slower than the person, giving the impression of a parallax effect, as shown in [this video](https://developer.apple.com/apple-news/videos/parallax-scale.mp4).

You can use a `parallax_scale` scene with a s`ection` or c`hapter` component that has a child `header` component. (The `section` or `chapter` component must contain a component with a `role` of `header`.)

> **Tip**

>  When you use parallax behavior, you might notice text becoming illegible as it covers an image. You can fix this easily, and create a cleaner, more legible article, by adding a background color.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "section",
      "scene": {
        "type": "parallax_scale"
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
- [FadingStickyHeader](fadingstickyheader.md): The scene that briefly keeps a header at the top of the screen as the person scrolls through the article.
