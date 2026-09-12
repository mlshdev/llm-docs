> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/collation-swift.struct/searchrules](https://developer.apple.com/documentation/foundation/locale/collation-swift.struct/searchrules)

# searchRules

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A collation used for string search.

## Declaration

```swift
static let searchRules: Locale.Collation
```

<a id="Discussion"></a>

## Discussion

Use this collation only for determining whether to consider two strings as equivalent. Using this collation may modify the string for search purposes. For example, this colloation supresses the contractions in Thai and Lao.

Don’t use this collation to determine the relative order of two strings.

## See Also

### Using special-purpose collations

- [standard](standard.md): A collation that provides the default ordering for each language.
