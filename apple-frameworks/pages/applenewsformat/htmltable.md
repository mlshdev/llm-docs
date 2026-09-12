> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/htmltable](https://developer.apple.com/documentation/applenewsformat/htmltable)

# HTMLTable

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The component for adding tables with HTML data.

## Declaration

```
object HTMLTable
```

## Properties

- `html` — `string` (required): The HTML for the table. This HTML must begin with `<table>` and end with `</table>`.
- `role` — `string` (required): Always `htmltable` for this component.
  **Allowed values:** `htmltable`
- `anchor` — `Anchor`: An object that defines vertical alignment with another component.
- `animation` — `(ComponentAnimation | string("none"))`: An object that defines an animation to be applied to the component.

  The `none` value is used for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentAnimation`, `string("none")`
- `behavior` — `(Behavior | string("none"))`: An object that defines behavior for a component, like [Parallax](parallax.md) or [Springy](springy.md).

  The `none` value is used for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `Behavior`, `string("none")`
- `conditional` — `(ConditionalComponent | [ConditionalComponent])`: An instance or array of component properties that can be applied conditionally.
  **Allowed types:** `ConditionalComponent`, `[ConditionalComponent]`
- `hidden` — `boolean`: A Boolean value that determines whether the component is hidden.
  **Default:** `false`
- `identifier` — `string`: An optional unique identifier for this component. If used, this `identifier` must be unique across the entire document. You will need an `identifier` for your component if you want to anchor other components to it.
- `layout` — `(ComponentLayout | string)`: An inline `ComponentLayout` object that contains layout information, or a string reference to a `ComponentLayout` object that is defined at the top level of the document.

  If `layout` is not defined, size and position will be based on various factors, such as the device type, the length of the content, and the role of this component.  
  **Allowed types:** `ComponentLayout`, `string`
- `style` — `(ComponentStyle | string | string("none"))`: An inline `ComponentStyle` object that defines the appearance of this component, or a string reference to a `ComponentStyle` object that is defined at the top level of the document.

  The `none` value is used for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentStyle`, `string`, `string("none")`

<a id="Discussion"></a>

## Discussion

To add a table with HTML data, create a component with a `role` of `htmltable`. The required `html` property holds all the data and tags for an HTML table.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "htmltable",
      "html": "<table><tr><th>Name</th><th>Occupation</th></tr><tr><td><strong>Grace Hopper</strong></td><td>Computer Scientist</td></tr><tr><td><strong>Amelia Earhart</strong></td><td>Pilot</td></tr></table>",
      "style": {
        "tableStyle": {
          "rows": {
            "backgroundColor": "#fff",
            "conditional": [
              {
                "selectors": [
                  {
                    "odd": true
                  }
                ],
                "backgroundColor": "#f7f7f7"
              }
            ]
          }
        }
      }
    }
  ]
}
```

## Relationships

### Inherits From

- [Component](component.md)

## See Also

### Tables with HTML Data

- [Adding an HTML Table](../applenews/adding-an-html-table.md): Add a table formatted in HTML to your article.
