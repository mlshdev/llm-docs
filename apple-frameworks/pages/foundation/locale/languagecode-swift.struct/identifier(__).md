> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/languagecode-swift.struct/identifier(_:)](https://developer.apple.com/documentation/foundation/locale/languagecode-swift.struct/identifier(_:))

# identifier(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the ISO code of the given identifier type. Returns nil if the language isn’t a valid ISO language, or if the specified identifier type isn’t available to the language.

## Declaration

```swift
func identifier(_ type: Locale.LanguageCode.IdentifierType) -> String?
```
