> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkit/language](https://developer.apple.com/documentation/mapkitjs/mapkit/language)

# language

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A language ID indicating the selected language.

## Declaration

```
get language(): string;
set language(language: string);
```

## Mentioned In

- [MapKit JS 5](../mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

The ID of the language you pass as an initialization option, or according to the user’s browser preference. You can change the language property dynamically, which no longer requires that you reload the containing page. If the language choice isn’t available, MapKit JS picks the best match.

For more information about language IDs, see [Internationalization and Localization Guide](https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html).

## See Also

### Version and language

- [build](build.md): The build string.
- [version](version.md): The version of MapKit JS.
