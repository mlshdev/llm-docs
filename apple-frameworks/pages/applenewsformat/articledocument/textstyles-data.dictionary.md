> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/articledocument/textstyles-data.dictionary](https://developer.apple.com/documentation/applenewsformat/articledocument/textstyles-data.dictionary)

# ArticleDocument.textStyles

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

An object containing text style objects that components within this document can refer to inline in text.

## Declaration

```
object ArticleDocument.textStyles
```

## Properties

- `Any Key` — `TextStyle`: A text style, with a name you define that components within this document can refer to.

## Mentioned In

- [Enhancing Your Articles with Styles](../../applenews/enhancing-your-articles-with-styles.md)
- [Defining and Applying Text Styles](../../applenews/defining-and-applying-text-styles.md)
- [Using HTML with Apple News Format](../../applenews/using-html-with-apple-news-format.md)

<a id="Discussion"></a>

## Discussion

`Article Document.textStyles` is an object containing the text style objects that components in your article can refer to inline from their text, using HTML or Markdown. See [Using HTML with Apple News Format](../../applenews/using-html-with-apple-news-format.md) and [Using Markdown with Apple News Format](../../applenews/using-markdown-with-apple-news-format.md). You can also refer to these text style objects in an [InlineTextStyle](../inlinetextstyle.md) object within a component.

You provide each component layout object as a key-value pair. In each pair, you create a key that’s meaningful to you. The value of each pair is a [TextStyle](../textstyle.md) object.

<a id="Example"></a>

### Example

```json
{
  "title": "Article Title",
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
    "backgroundColor": "#FFF"
  },
  "components": [
    {
      "role": "section",
      "components": [
        {
          "role": "body",
          "format": "html",
          "text": "<span data-anf-textstyle='exampleStyle'>There is a moment in every dawn</span> when light floats, there is the possibility of magic. Creation holds its breath."
        }
      ]
    }
  ],
  "componentTextStyles": {},
  "textStyles": {
    "exampleStyle": {
      "fontFamily": "Gill Sans",
      "fontWeight": "bolder",
      "textColor": "#333333",
      "fontSize": 18,
      "textShadow": {
        "radius": 20,
        "opacity": 0.3,
        "color": "#99999930",
        "offset": {
          "x": -10,
          "y": 5
        }
      },
      "stroke": {
        "color": "#FFC800",
        "width": 1
      }
    }
  },
  "componentStyles": {},
  "componentLayouts": {}
}
```

## See Also

### Objects

- [ArticleDocument.componentLayouts](componentlayouts-data.dictionary.md): An object containing component layout objects that components in the article can refer to.
- [ArticleDocument.componentStyles](componentstyles-data.dictionary.md): An object containing component style objects that components in the article can refer to.
- [ArticleDocument.componentTextStyles](componenttextstyles-data.dictionary.md): An object containing component text style defaults as well as component text styles that components in the article can use.
- [ArticleDocument.colorScheme](colorscheme-data.dictionary.md): The object that contains information about the color scheme of the document, including Dark Mode behavior.
