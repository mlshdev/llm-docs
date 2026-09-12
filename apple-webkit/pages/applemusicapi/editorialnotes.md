> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/editorialnotes](https://developer.apple.com/documentation/applemusicapi/editorialnotes)

# EditorialNotes

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

An object that represents a notes attribute.

## Declaration

```
object EditorialNotes
```

## Properties

- `short` — `string`: Abbreviated notes shown inline or when the content appears alongside other content.
- `standard` — `string`: Notes shown when the content is prominently displayed.
- `name` — `string`: Name for the editorial notes.
- `tagline` — `string`: The tag line for the editorial notes.

<a id="Discussion"></a>

## Discussion

Notes may include XML tags for formatting (`<b>` for bold, `<i>` for italic, or `<br>` for line break) and special characters (`&amp;` for `&`, `&lt;` for `<`, `&gt;` for `>`, `&apos;` for `‘`, and `&quot;` for `“`).
