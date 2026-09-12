> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/toplevel/consenttext-data.dictionary](https://developer.apple.com/documentation/devicemanagement/toplevel/consenttext-data.dictionary)

# TopLevel.ConsentText

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The dictionary of consent agreements per language.

## Declaration

```
object TopLevel.ConsentText
```

## Properties

- `ConsentTextItem` — `TopLevel.ConsentText.ConsentTextItem` (required): The dictionary containing a key that consists of the IETF BCP 47 identifier for a language (for example, en or jp) and a value that consists of the agreement localized to that language.

## Topics

### Objects

- [TopLevel.ConsentText.ConsentTextItem](consenttext-data.dictionary/consenttextitem-data.dictionary.md): A specific pairing of language code and consent text.

## See Also

### Objects

- [TopLevel.PayloadContentItem](payloadcontentitem.md): The payload-specific content for this profile.
