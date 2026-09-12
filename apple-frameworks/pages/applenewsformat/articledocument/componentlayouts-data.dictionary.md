> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/articledocument/componentlayouts-data.dictionary](https://developer.apple.com/documentation/applenewsformat/articledocument/componentlayouts-data.dictionary)

# ArticleDocument.componentLayouts

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

An object containing component layout objects that components in the article can refer to.

## Declaration

```
object ArticleDocument.componentLayouts
```

## Properties

- `Any Key` — `ComponentLayout`: A component layout, with a name you define that components within this document can refer to.

## Mentioned In

- [Positioning the Content in Your Article](../../applenews/positioning-the-content-in-your-article.md)

<a id="Discussion"></a>

## Discussion

`ArticleDocument.componentLayouts` is an object containing the component layout objects that components in your article can use. You provide each component layout object as a key-value pair. In each pair, you create a key that’s meaningful to you. The value of each pair is a [ComponentLayout](../componentlayout.md) object.

<a id="Example"></a>

### Example

```json
{
  "title": "Sample Article",
  "identifier": "sample",
  "version": "1.8",
  "language": "en",
  "layout": {
    "columns": 20,
    "width": 1024,
    "margin": 60,
    "gutter": 20
  },
  "documentStyle": {
    "backgroundColor": "#F7F7F7"
  },
  "components": [
    {
      "role": "body",
      "format": "html",
      "layout": "exampleLayout",
      "text": "<p>There is a moment in every dawn when light floats, there is the possibility of magic.</p>"
    }
  ],
  "componentTextStyles": {},
  "textStyles": {},
  "componentStyles": {},
  "componentLayouts": {
    "exampleLayout": {
      "columnStart": 0,
      "columnSpan": 3,
      "margin": {
        "top": 50,
        "bottom": 50
      }
    }
  }
}
```

## See Also

### Objects

- [ArticleDocument.componentStyles](componentstyles-data.dictionary.md): An object containing component style objects that components in the article can refer to.
- [ArticleDocument.componentTextStyles](componenttextstyles-data.dictionary.md): An object containing component text style defaults as well as component text styles that components in the article can use.
- [ArticleDocument.textStyles](textstyles-data.dictionary.md): An object containing text style objects that components within this document can refer to inline in text.
- [ArticleDocument.colorScheme](colorscheme-data.dictionary.md): The object that contains information about the color scheme of the document, including Dark Mode behavior.
