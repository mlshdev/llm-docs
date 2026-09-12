> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvreadingoptions/escapecharacter](https://developer.apple.com/documentation/tabulardata/csvreadingoptions/escapecharacter)

# escapeCharacter

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The character that precedes other characters, such as quotation marks, so that the parser interprets them as literal characters instead of special ones.

## Declaration

```swift
var escapeCharacter: Character { get }
```

<a id="discussion"></a>

## Discussion

Defaults to backslash(`\`).
