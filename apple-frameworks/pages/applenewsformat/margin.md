> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/margin](https://developer.apple.com/documentation/applenewsformat/margin)

# Margin

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The object for defining the space above and below a component.

## Declaration

```
object Margin
```

## Properties

- `bottom` — `(SupportedUnits | number)`: The bottom margin in `points`, or with any of the units of measure for components. See [Specifying Measurements for Components](../applenews/specifying-measurements-for-components.md).
  **Allowed types:** `SupportedUnits`, `number`
- `top` — `(SupportedUnits | number)`: The top margin in `points`, or with any of the units of measure for components. See [Specifying Measurements for Components](../applenews/specifying-measurements-for-components.md).
  **Allowed types:** `SupportedUnits`, `number`

## Mentioned In

- [Positioning the Content in Your Article](../applenews/positioning-the-content-in-your-article.md)

<a id="Discussion"></a>

## Discussion

Use the `margin` object to specify top and bottom margins to designate space above and below a component. For information on the units, see [Specifying Measurements for Components](../applenews/specifying-measurements-for-components.md).

You can use this object in [ComponentLayout](componentlayout.md) and [AutoPlacementLayout](autoplacementlayout.md).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "header",
      "layout": "headerLayout",
      "components": [
        {
          "role": "title",
          "text": "Article Title"
        }
      ]
    }
  ],
  "componentLayouts": {
    "headerLayout": {
      "margin": {
        "top": 50,
        "bottom": 50
      }
    }
  }
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
- [AutoPlacementLayout](autoplacementlayout.md): Deprecated. The object for defining the margin above and below advertising components.
- [AdvertisingLayout](advertisinglayout.md): Deprecated. The object for defining the margin above and below advertising components.
