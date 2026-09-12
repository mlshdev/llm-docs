> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvreadingoptions/usesescaping](https://developer.apple.com/documentation/tabulardata/csvreadingoptions/usesescaping)

# usesEscaping

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether to enable escaping.

## Declaration

```swift
var usesEscaping: Bool
```

<a id="discussion"></a>

## Discussion

When `true`, you can escape special characters, such as the field delimiter, by prefixing them with the escape character, which is the backslash (`\`) by default. Defaults to `false`.
