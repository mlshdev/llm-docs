> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/conditionalautoplacement](https://developer.apple.com/documentation/applenewsformat/conditionalautoplacement)

# ConditionalAutoPlacement

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.9+ (deprecated in 1.25)

The object for defining conditional properties for an automatically placed component, and when the conditional properties are in effect.

## Declaration

```
object ConditionalAutoPlacement
```

## Properties

- `conditions` — `(Condition | [Condition])` (required): An instance or array of conditions that, when met, cause the conditional automatic placement properties to take effect.
  **Allowed types:** `Condition`, `[Condition]`
- `enabled` — `boolean`: A Boolean that defines whether placement of advertisements is enabled.
  **Default:** `false`
- `layout` — `AutoPlacementLayout`: A value that defines the layout properties for the automatically inserted components.

## Mentioned In

- [Apple News Format Release Notes](../applenews/apple-news-format-release-notes.md)

<a id="Discussion"></a>

## Discussion

Use the `ConditionalAutoPlacement` object to define an array of conditional automatic placement properties and the conditions under which to apply them. When a condition is met, the value of a property in `ConditionalAutoPlacement` overrides the value of the same property if defined in the parent `AdvertisementAutoPlacement` object. See [AdvertisementAutoPlacement](advertisementautoplacement.md).

<a id="Example"></a>

### Example

```json
{
  "version": "1.9",
  "identifier": "SampleArticle",
  "language": "en",
  "title": "Apple News",
  "layout": {
    "columns": 7,
    "width": 1024,
    "margin": 75,
    "gutter": 20
  },
  "autoplacement": {
    "advertisement": {
      "enabled": true,
      "bannerType": "any",
      "distanceFromMedia": "50vh",
      "frequency": 10,
      "layout": {
        "margin": 10
      },
      "conditional": [
        {
          "enabled": false,
          "conditions": [
            {
              "verticalSizeClass": "compact"
            }
          ]
        }
      ]
    }
  },
  …
}
```

## See Also

### Conditional Design Elements

- [Condition](condition.md): The object for defining a condition that, when met, causes conditional properties to go into effect.
- [ConditionalComponent](conditionalcomponent.md): The object for defining conditional properties for a component, and when the conditional properties are in effect.
- [ConditionalComponentLayout](conditionalcomponentlayout.md): The object for defining conditional properties for a component layout, and when the conditional properties are in effect.
- [ConditionalSection](conditionalsection.md): The object for defining conditional properties for a section component, and when the conditional properties are in effect.
- [ConditionalDocumentStyle](conditionaldocumentstyle.md): The object for defining conditional properties for a document style, and when the conditional properties are in effect.
- [ConditionalText](conditionaltext.md): The object for defining conditional properties for a text component, and when the conditional properties are in effect.
- [ConditionalTextStyle](conditionaltextstyle.md): The object for defining conditional properties for a text style, and when the conditional properties are in effect.
- [ConditionalComponentTextStyle](conditionalcomponenttextstyle.md): The object for defining conditional properties for a component text style, and when the conditional properties are in effect.
- [ConditionalComponentStyle](conditionalcomponentstyle.md): The object for defining conditional properties for a component style, and when the conditional properties are in effect.
- [ConditionalContainer](conditionalcontainer.md): The object for defining conditional properties for a container component, and when the conditional properties are in effect.
- [ConditionalDivider](conditionaldivider.md): The object for defining conditional properties for a divider component, and when the conditional properties are in effect.
- [ConditionalButton](conditionalbutton.md): The object for defining a button component’s conditional properties, and when the conditional properties are in effect.
