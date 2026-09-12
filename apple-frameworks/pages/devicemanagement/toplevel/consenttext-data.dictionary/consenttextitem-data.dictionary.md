> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/toplevel/consenttext-data.dictionary/consenttextitem-data.dictionary](https://developer.apple.com/documentation/devicemanagement/toplevel/consenttext-data.dictionary/consenttextitem-data.dictionary)

# TopLevel.ConsentText.ConsentTextItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A specific pairing of language code and consent text.

## Declaration

```
object TopLevel.ConsentText.ConsentTextItem
```

## Properties

- `ANY` — `string` (required): The key consisting of the IETF BCP 47 identifier for a language (for example, en or jp) and the value consisting of the agreement localized to that language.
