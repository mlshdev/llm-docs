> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/heading](https://developer.apple.com/documentation/applenewsformat/heading)

# Heading

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

The text component for adding a heading.

## Declaration

```
object Heading
```

## Properties

- `role` — `string` (required): Always one of these roles for this component: `heading`, `heading1`, `heading2`, `heading3`, `heading4`, `heading5`, or `heading6`.
  **Allowed values:** `heading`, `heading1`, `heading2`, `heading3`, `heading4`, `heading5`, `heading6`
- `text` — `string` (required): The text to display in the article, including any formatting tags depending on the `format` property.

  You can also use a subset of HTML tags or Markdown syntax by setting `format` to `html` or `markdown`, respectively. See [Using HTML with Apple News Format](../applenews/using-html-with-apple-news-format.md). Alternatively, you can style ranges of text individually using the [InlineTextStyle](inlinetextstyle.md) object.
- `additions` — `[Addition]`: An array of all the additions that you apply to ranges of the component’s text.

  If you set `format` to `html` or `markdown`, Apple News Format doesnʼt support `Additions` or `InlineTextStyles`.
- `anchor` — `Anchor`: An object that defines vertical alignment with another component.
- `animation` — `(ComponentAnimation | string("none"))`: An object that defines an animation you apply to the component.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentAnimation`, `string("none")`
- `behavior` — `(Behavior | string("none"))`: An object that defines behavior for a component, like [Parallax](parallax.md) or [Springy](springy.md).

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `Behavior`, `string("none")`
- `conditional` — `(ConditionalText | [ConditionalText])`: An instance or array of text components that you can apply conditionally, and the conditions that cause Apple News Format to apply them.
  **Allowed types:** `ConditionalText`, `[ConditionalText]`
- `format` — `string`: The formatting or markup method applied to the text.

  If you set format to `htm`l or `markdown`, Apple News Format doesn’t support `Additions` or `InlineTextStyles`.  
  **Default:** `none`  
  **Allowed values:** `markdown`, `html`, `none`
- `hidden` — `boolean`: A Boolean value that determines whether the component is hidden.
  **Default:** `false`
- `identifier` — `string`: An optional unique identifier for this component. If you use `identifier`, it must be unique across the entire document. You need an `identifier` for your component if you want to anchor other components to it.
- `inlineTextStyles` — `([InlineTextStyle] | string("none"))`: An array of `InlineTextStyle` objects that you can use to apply different text styles to ranges of text. For each `InlineTextStyle`, you should supply a `rangeStart`, a `rangeLength`, and either a `TextStyle` object or the `identifier` of a `TextStyle` that you define at the top level of the document.

  Apple News Format ignores inline text styles when `format` is set to `markdown` or `html`.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `[InlineTextStyle]`, `string("none")`
- `layout` — `(ComponentLayout | string)`: An inline `ComponentLayout` object that contains layout information, or a string reference to a `ComponentLayout` object that you define at the top level of the document.

  If you don’t define `layout`, size and position are based on various factors, such as the device type, the length of the content, and the `role` of this component.  
  **Allowed types:** `ComponentLayout`, `string`
- `style` — `(ComponentStyle | string | string("none"))`: An inline `ComponentStyle` object that defines the appearance of this component, or a string reference to a `ComponentStyle` object that you define at the top level of the document.

  Use the `none` value for conditional design elements. Adding it here has no effect.  
  **Allowed types:** `ComponentStyle`, `string`, `string("none")`
- `textStyle` — `(ComponentTextStyle | string)`: An inline `ComponentTextStyle` object that contains styling information, or a string reference to a `ComponentTextStyle` object that you define at the top level of the document.
  **Allowed types:** `ComponentTextStyle`, `string`

## Mentioned In

- [Defining and Applying Text Styles](../applenews/defining-and-applying-text-styles.md)
- [Using HTML with Apple News Format](../applenews/using-html-with-apple-news-format.md)
- [Using Markdown with Apple News Format](../applenews/using-markdown-with-apple-news-format.md)

<a id="Discussion"></a>

## Discussion

Use a `Heading` component to define a heading. There are six levels of headings. The `role` strings for the supported heading levels are `heading`, `heading1`, `heading2`, `heading3`, `heading4`, `heading5`, and `heading6`.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "heading",
      "text": "Not only on Mars"
    }
  ]
}
```

## Relationships

### Inherits From

- [Text](text.md)

## See Also

### Text

- [Using HTML with Apple News Format](../applenews/using-html-with-apple-news-format.md): Use HTML formatting for text components.
- [Using Markdown with Apple News Format](../applenews/using-markdown-with-apple-news-format.md): Use Markdown formatting for text components.
- [Body](body.md): The component for adding body text.
- [Title](title.md): The component for adding an article title.
- [Intro](intro.md): The component for adding introductory text.
- [Caption](caption.md): The component for adding caption text.
- [Author](author.md): The component for adding the name of the author.
- [Byline](byline.md): The component for adding the publication date or contributor credits, especially for articles with multiple contributors.
- [Illustrator](illustrator.md): The component for adding illustrator credit.
- [Photographer](photographer.md): The component for adding a photographer credit.
- [Quote](quote.md): The component for including a quote.
- [PullQuote](pullquote.md): The component for including a pull quote.
- [Text](text.md): Properties shared by all text component types.
