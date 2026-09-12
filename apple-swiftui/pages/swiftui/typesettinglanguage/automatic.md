> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/typesettinglanguage/automatic](https://developer.apple.com/documentation/swiftui/typesettinglanguage/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Automatic language behavior.

## Declaration

```swift
static let automatic: TypesettingLanguage
```

<a id="discussion"></a>

## Discussion

When determining the language to use for typesetting the current UI language and preferred languages will be considered. For example, if the current UI locale is for English and Thai is included in the preferred languages then line heights will be taller to accommodate the taller glyphs used by Thai.

## See Also

### Getting language behavior

- [explicit(\_:)](explicit%28__%29.md): Use explicit language.
