> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/autoplacementlayout](https://developer.apple.com/documentation/applenewsformat/autoplacementlayout)

# AutoPlacementLayout

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.9+ (deprecated in 1.25)

The object for defining the margin above and below advertising components.

## Declaration

```
object AutoPlacementLayout
```

## Properties

- `margin` — `(Margin | integer)`: The top and bottom margin in points, or in any other unit of measure for components. See [Specifying Measurements for Components](../applenews/specifying-measurements-for-components.md).
  **Allowed types:** `Margin`, `integer`

## Mentioned In

- [Apple News Format Release Notes](../applenews/apple-news-format-release-notes.md)

<a id="Discussion"></a>

## Discussion

Use the `AutoPlacementLayout` object to define the margins for ad components that are inserted automatically. This object is different from the [ComponentLayout](componentlayout.md) object and supports only one property, `margin`.

This object can be used in [AdvertisementAutoPlacement](advertisementautoplacement.md).

<a id="Example"></a>

### Example

```json
{
  "version": "1.9",
  "identifier": "SampleArticle",
  "language": "en",
  "title": "Apple News",
  "layout": {
    "columns": 20,
    "width": 1024,
    "margin": 60,
    "gutter": 20
  },
  "autoplacement": {
    "advertisement": {
      "enabled": true,
      "bannerType": "any",
      "distanceFromMedia": "10vh",
      "frequency": 10,
      "layout": {
        "margin": 10
      }
    }
  },
  …
}
```

## See Also

### Article Layout

- [Planning the Layout for Your Article](../applenews/planning-the-layout-for-your-article.md): Define a layout that supports the look you want for your article.
- [Positioning the Content in Your Article](../applenews/positioning-the-content-in-your-article.md): Align article components with columns in your layout.
- [Wrapping Text Around a Component](../applenews/wrapping-text-around-a-component.md): Define the layout of a text component to wrap around another component.
- [Layout](layout.md): The object for defining columns, gutters, and margins for your article’s designed width.
- [ComponentLayout](componentlayout.md): The object for defining the positioning for a specific component within the article’s column system.
- [Anchor](anchor.md): The object for anchoring one component to another component in your article’s layout.
- [Margin](margin.md): The object for defining the space above and below a component.
- [AdvertisingLayout](advertisinglayout.md): Deprecated. The object for defining the margin above and below advertising components.
