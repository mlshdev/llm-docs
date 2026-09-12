> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/componentstyle](https://developer.apple.com/documentation/applenewsformat/componentstyle)

# ComponentStyle

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The object for setting style properties for components, including background color and fill, borders, and table styles.

## Declaration

```
object ComponentStyle
```

## Properties

- `conditional` — `(ConditionalComponentStyle | [ConditionalComponentStyle])`: An instance or array of component style properties that you apply conditionally, and the conditions that cause Apple News to apply them.
  **Allowed types:** `ConditionalComponentStyle`, `[ConditionalComponentStyle]`
- `backgroundColor` — `(Color | string("none"))`: The component’s background color. The value defaults to transparent.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `Color`, `string("none")`
- `border` — `(Border | string("none"))`: The border for the component. Because the border is drawn inside the component, it affects the size of the content within the component. The bigger the border, the less available space for content.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `Border`, `string("none")`
- `fill` — `(Fill | string("none"))`: A `Fill` object, such as an [ImageFill](imagefill.md), that you apply on top of the specified `backgroundColor`.

  By default, Apple News doesn’t apply a Fill.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `Fill`, `string("none")`
- `mask` — `(CornerMask | string("none"))`: The object that defines a mask that clips the contents of the component to the specified masking behavior.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `CornerMask`, `string("none")`
- `opacity` — `number`: The opacity of the component, set as a float value between `0` (completely transparent) and `1` (completely opaque). The effects of the component’s opacity are inherited by the subcomponents. See [Nesting Components in an Article](../applenews/nesting-components-in-an-article.md).
  **Default:** `1`
- `tableStyle` — `(TableStyle | string("none"))`: The styling for the rows, columns, and cells of the component, if it’s a [DataTable](datatable.md) or [HTMLTable](htmltable.md) component.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `TableStyle`, `string("none")`
- `shadow` — `ComponentShadow`: The object that defines a component shadow.

## Mentioned In

- [Enhancing Your Articles with Styles](../applenews/enhancing-your-articles-with-styles.md)
- [Defining a Component Style](../applenews/defining-a-component-style.md)
- [Adding a JSON Table](../applenews/adding-a-json-table.md)
- [Adding an HTML Table](../applenews/adding-an-html-table.md)
- [Applying a Background to a Component](../applenews/applying-a-background-to-a-component.md)
- [Defining and Using Table Styles](../applenews/defining-and-using-table-styles.md)
- [Supporting Dark Mode for Your Article](../applenews/supporting-dark-mode-for-your-article.md)

<a id="Discussion"></a>

## Discussion

Use the `ComponentStyle` object to define the visual appearance of a component, including its background color, fill, opacity, borders, and table style.

You can use this object in [Component](component.md) and [ArticleDocument.componentStyles](articledocument/componentstyles-data.dictionary.md).

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "container",
      "style": "exampleComponentStyle",
      "components": [
        {
          "role": "title",
          "text": "Drought"
        }
      ]
    }
  ],
  "componentStyles": {
    "exampleComponentStyle": {
      "backgroundColor": "#FFFFFF",
      "opacity": 1,
      "border": {
        "all": {
          "width": 1,
          "color": "#333"
        },
        "left": false,
        "right": false
      }
    }
  }
}
```

## Relationships

### Inherited By

- [ConditionalComponentStyle](conditionalcomponentstyle.md)

## See Also

### Related Documentation

- [Giving the Article a Dark Color Scheme](../applenews/giving-the-article-a-dark-color-scheme.md): Apply a new color scheme to your article.

### Component Style Basics

- [Defining a Component Style](../applenews/defining-a-component-style.md): Set style options for the components in your article.
- [CornerMask](cornermask.md): The object for creating rounded corners.
- [Border](border.md): The object for setting borders for component sides or tables.
- [StrokeStyle](strokestyle.md): The object for defining the color, width, and style of a border or divider.
