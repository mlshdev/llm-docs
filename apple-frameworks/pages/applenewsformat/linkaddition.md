> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/linkaddition](https://developer.apple.com/documentation/applenewsformat/linkaddition)

# LinkAddition

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.11+

The addition object for defining links in text components that don’t use HTML or Markdown formatting.

## Declaration

```
object LinkAddition
```

## Properties

- `rangeLength` — `integer` (required): The number of text characters to highlight as the link.
- `rangeStart` — `integer` (required): The starting character index for the link addition. A range starts at `0` for the first character.

  If you specify `rangeStart`, you must also specify `rangeLength`.
- `type` — `string` (required): The type of addition. Use `link`.
  **Allowed values:** `link`
- `URL` — `SupportedURLs` (required): The URL to open when a person interacts with the range of text specified in the addition.

<a id="Discussion"></a>

## Discussion

Use a `Link` addition to add a link in a text component. You can link to an anchor in the same document, to another document in News, or to an external site.

<a id="Example"></a>

### Example

```json
{
  "components": [
    {
      "role": "body",
      "text": "This is an example of a link addition",
      "additions": [
        {
          "type": "link",
          "URL": "http://www.apple.com",
          "rangeStart": 0,
          "rangeLength": 20
        }
      ]
    }
  ]
}
```

## Relationships

### Inherits From

- [Addition](addition.md)

## See Also

### Links

- [ComponentLink](componentlink.md): The component addition object for making a component interactive and opening a link to another location in News.
- [Addition](addition.md): Properties that all addition types share.
- [ComponentAddition](componentaddition.md): Properties that all types of component additions share.
- [SupportedURLs](supportedurls.md): Links that go to Apple News, other Apple apps, and external sites.
- [SupportedInternalURLs](supportedinternalurls.md): Links that go to Apple News and other Apple apps.
