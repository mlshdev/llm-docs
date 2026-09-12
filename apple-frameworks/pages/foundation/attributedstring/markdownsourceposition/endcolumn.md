> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownsourceposition/endcolumn](https://developer.apple.com/documentation/foundation/attributedstring/markdownsourceposition/endcolumn)

# endColumn

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The column where the text ends in the Markdown source.

## Declaration

```swift
let endColumn: Int
```

<a id="Discussion"></a>

## Discussion

This property uses `1`-based counting. Columns represent UTF-8 indices; for multi-byte characters, the column indicates the first byte.

## See Also

### Inspecting Markdown Source Position Properties

- [startLine](startline.md): The line where the text begins in the Markdown source.
- [startColumn](startcolumn.md): The column where the text begins in the Markdown source.
- [endLine](endline.md): The line where the text ends in the Markdown source.
