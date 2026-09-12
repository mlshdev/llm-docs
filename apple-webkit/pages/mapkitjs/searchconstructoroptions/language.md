> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/searchconstructoroptions/language](https://developer.apple.com/documentation/mapkitjs/searchconstructoroptions/language)

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
