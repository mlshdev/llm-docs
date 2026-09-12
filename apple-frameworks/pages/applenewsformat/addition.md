> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/addition](https://developer.apple.com/documentation/applenewsformat/addition)

# Addition

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

Properties that all addition types share.

## Declaration

```
object Addition
```

## Properties

- `type` — `string` (required): The type of addition. For example, [LinkAddition](linkaddition.md).
  **Allowed values:** `link`, `calendar_event`
- `rangeLength` — `integer`: The number of text characters to highlight in the link.
- `rangeStart` — `integer`: The starting character index for which the addition is meant. A range starts at `0` for the first character.

  If you specify `rangeStart`, you must also specify `rangeLength`.

<a id="Discussion"></a>

## Discussion

This is an abstract definition. Don’t use this object type directly; use only the objects that extend it, such as [LinkAddition](linkaddition.md).

## Relationships

### Inherited By

- [LinkAddition](linkaddition.md)

## See Also

### Links

- [LinkAddition](linkaddition.md): The addition object for defining links in text components that don’t use HTML or Markdown formatting.
- [ComponentLink](componentlink.md): The component addition object for making a component interactive and opening a link to another location in News.
- [ComponentAddition](componentaddition.md): Properties that all types of component additions share.
- [SupportedURLs](supportedurls.md): Links that go to Apple News, other Apple apps, and external sites.
- [SupportedInternalURLs](supportedinternalurls.md): Links that go to Apple News and other Apple apps.
