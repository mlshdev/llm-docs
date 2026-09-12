> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/documentstyle](https://developer.apple.com/documentation/applenewsformat/documentstyle)

# DocumentStyle

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The object for setting the background color for your article.

## Declaration

```
object DocumentStyle
```

## Properties

- `backgroundColor` — `Color`: The article’s background color. The value defaults to white.
- `conditional` — `(ConditionalDocumentStyle | [ConditionalDocumentStyle])`: An instance or array of document style properties that you can apply conditionally, and the conditions that cause Apple News to apply them.
  **Allowed types:** `ConditionalDocumentStyle`, `[ConditionalDocumentStyle]`

## Mentioned In

- [Supporting Dark Mode for Your Article](../applenews/supporting-dark-mode-for-your-article.md)

<a id="Discussion"></a>

## Discussion

Use the `DocumentStyle` object to set the background color for the entire article.

You can use this object in [ArticleDocument](articledocument.md).

<a id="Example"></a>

### Example

```json
{
  "documentStyle": {
    "backgroundColor": "#F7F7F7"
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

### Inherited By

- [ConditionalDocumentStyle](conditionaldocumentstyle.md)

## See Also

### Styles

- [Enhancing Your Articles with Styles](../applenews/enhancing-your-articles-with-styles.md): Improve the appearance of the text and components in your article by using Apple News Format styles.
- [Supporting Dark Mode for Your Article](../applenews/supporting-dark-mode-for-your-article.md): Update your article template so that your article adapts when Dark Mode is active.
- [Text Styles](../applenews/text-styles.md): Learn about text styles and how to apply them to your text and text components.
- [Component Styles](../applenews/component-styles.md): Learn to use component styles to add borders, set background colors, and apply background images to components and to set the styling for tables.
- [Supported Color Names](../applenews/supported-color-names.md): Learn the color names supported in Apple News Format.
- [Color](color.md): The strings for defining colors in Apple News Format.
