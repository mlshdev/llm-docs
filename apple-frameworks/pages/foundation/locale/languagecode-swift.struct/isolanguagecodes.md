> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/locale/languagecode-swift.struct/isolanguagecodes

# isoLanguageCodes

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns an array of ISO-defined language codes.

## Declaration

```swift
static var isoLanguageCodes: [Locale.LanguageCode] { get }
```

<a id="Discussion"></a>

## Discussion

The returned array contains two-letter codes defined by ISO 639, as well as three-letter codes without a two-letter equivalent.
