> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/conditionaldocumentstyle](https://developer.apple.com/documentation/applenewsformat/conditionaldocumentstyle)

# ConditionalDocumentStyle

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.10.1+

The object for defining conditional properties for a document style, and when the conditional properties are in effect.

## Declaration

```
object ConditionalDocumentStyle
```

## Properties

- `conditions` — `(Condition | [Condition])` (required): An instance or array of conditions that, when met, cause the conditional document style properties to take effect.
  **Allowed types:** `Condition`, `[Condition]`
- `backgroundColor` — `Color`: The document’s background color. The value defaults to white.

## Mentioned In

- [Supporting Dark Mode for Your Article](../applenews/supporting-dark-mode-for-your-article.md)

<a id="Discussion"></a>

## Discussion

Use the `ConditionalDocumentStyle` object to define an array of conditional document-style properties and the conditions under which to apply them. When a condition is met, the value of a property in `ConditionalDocumentStyle` overrides the value of the same property if defined in the parent `DocumentStyle` object. See [DocumentStyle](documentstyle.md).

<a id="Example"></a>

### Example

```json
{
  "documentStyle": {
    "backgroundColor": "#FFF",
    "conditional": [
      {
        "backgroundColor": "#000",
        "conditions": [
          {
            "preferredColorScheme": "dark"
          }
        ]
      }
    ]
  },
  "components": [
    {
      "role": "title",
      "text": "Apple News Format"
    },
    {
      "role": "body",
      "text": "Apple News Format allows publishers to craft beautiful editorial layouts. Galleries, audio, video, and fun interactions like animation make stories spring to life."
    },
    {
      "role": "photo",
      "URL": "bundle://image.jpg"
    }
  ]
}
```

## Relationships

### Inherits From

- [DocumentStyle](documentstyle.md)

## See Also

### Conditional Design Elements

- [Condition](condition.md): The object for defining a condition that, when met, causes conditional properties to go into effect.
- [ConditionalComponent](conditionalcomponent.md): The object for defining conditional properties for a component, and when the conditional properties are in effect.
- [ConditionalComponentLayout](conditionalcomponentlayout.md): The object for defining conditional properties for a component layout, and when the conditional properties are in effect.
- [ConditionalAutoPlacement](conditionalautoplacement.md): Deprecated. The object for defining conditional properties for an automatically placed component, and when the conditional properties are in effect.
- [ConditionalSection](conditionalsection.md): The object for defining conditional properties for a section component, and when the conditional properties are in effect.
- [ConditionalText](conditionaltext.md): The object for defining conditional properties for a text component, and when the conditional properties are in effect.
- [ConditionalTextStyle](conditionaltextstyle.md): The object for defining conditional properties for a text style, and when the conditional properties are in effect.
- [ConditionalComponentTextStyle](conditionalcomponenttextstyle.md): The object for defining conditional properties for a component text style, and when the conditional properties are in effect.
- [ConditionalComponentStyle](conditionalcomponentstyle.md): The object for defining conditional properties for a component style, and when the conditional properties are in effect.
- [ConditionalContainer](conditionalcontainer.md): The object for defining conditional properties for a container component, and when the conditional properties are in effect.
- [ConditionalDivider](conditionaldivider.md): The object for defining conditional properties for a divider component, and when the conditional properties are in effect.
- [ConditionalButton](conditionalbutton.md): The object for defining a button component’s conditional properties, and when the conditional properties are in effect.
