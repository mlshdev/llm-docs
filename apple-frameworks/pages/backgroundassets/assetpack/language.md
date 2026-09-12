> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpack/language](https://developer.apple.com/documentation/backgroundassets/assetpack/language)

# language

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The language for which this asset pack is localized.

## Declaration

```swift
let language: Locale.Language?
```

<a id="discussion"></a>

## Discussion

This property is `nil` if the asset pack isn’t localized and therefore isn’t language-specific.

## See Also

### Accessing asset language

- [Locale.Language](../../foundation/locale/language-swift.struct.md): A type that represents a language, as used in a locale.
