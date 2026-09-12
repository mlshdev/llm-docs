> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/componentaddition](https://developer.apple.com/documentation/applenewsformat/componentaddition)

# ComponentAddition

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Object  
**Availability:** Apple News Format 1.7+

Properties that all types of component additions share.

## Declaration

```
object ComponentAddition
```

## Properties

- `type` — `string` (required): The type of component addition; for example [ComponentLink](componentlink.md).
  **Allowed values:** `link`, `calendar_event`

<a id="Discussion"></a>

## Discussion

Don’t use this object type directly; use only the objects that extend it, like [ComponentLink](componentlink.md).

## Relationships

### Inherited By

- [ComponentLink](componentlink.md)

## See Also

### Links

- [LinkAddition](linkaddition.md): The addition object for defining links in text components that don’t use HTML or Markdown formatting.
- [ComponentLink](componentlink.md): The component addition object for making a component interactive and opening a link to another location in News.
- [Addition](addition.md): Properties that all addition types share.
- [SupportedURLs](supportedurls.md): Links that go to Apple News, other Apple apps, and external sites.
- [SupportedInternalURLs](supportedinternalurls.md): Links that go to Apple News and other Apple apps.
