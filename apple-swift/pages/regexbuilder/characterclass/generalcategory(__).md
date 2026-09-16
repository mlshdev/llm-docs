> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/regexbuilder/characterclass/generalcategory(_:)

# generalCategory(\_:)

**Framework:** RegexBuilder  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a character class that matches any element with the given Unicode general category.

## Declaration

```swift
static func generalCategory(_ category: Unicode.GeneralCategory) -> CharacterClass
```

<a id="discussion"></a>

## Discussion

For example, when passed `.uppercaseLetter`, this method is equivalent to `/\p{Uppercase_Letter}/` or `/\p{Lu}/`.
