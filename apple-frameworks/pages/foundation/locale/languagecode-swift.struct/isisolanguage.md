> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/languagecode-swift.struct/isisolanguage](https://developer.apple.com/documentation/foundation/locale/languagecode-swift.struct/isisolanguage)

# isISOLanguage

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether this language code is in the list of ISO-defined languages.

## Declaration

```swift
var isISOLanguage: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The following code snippet illustrates use of the [isISOLanguage](isisolanguage.md) value.

```swift
let enIsISO = Locale.LanguageCode("en").isISOLanguage // true
let gibberishIsISO = Locale.LanguageCode("gibberish").isISOLanguage // false
```

## See Also

### Examining language code properties

- [identifier](identifier.md): The identifier used to create the language code.
