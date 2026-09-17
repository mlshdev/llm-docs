> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/language

# language

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

A language ID that determines the language for the search results text.

## Declaration

```
language?: string;
```

<a id="Discussion"></a>

## Discussion

If you set a language ID, the search returns addresses in the selected language, if available, such as, `fr-CA` or `en-GB`. If you don’t provide a language ID, the search object uses the language ID the system provides to the [init()](../mapkit/init.md) call.
