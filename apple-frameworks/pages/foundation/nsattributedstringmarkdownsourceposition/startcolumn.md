> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstringmarkdownsourceposition/startcolumn](https://developer.apple.com/documentation/foundation/nsattributedstringmarkdownsourceposition/startcolumn)

# startColumn

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The column where the text begins in the Markdown source.

## Declaration

```objectivec
@property (readonly) NSInteger startColumn;
```

<a id="Discussion"></a>

## Discussion

This property uses `1`-based counting. Columns represent UTF-8 indices; for multi-byte characters, the column indicates the first byte.

## See Also

### Getting Markdown Source Position Properties

- [startLine](startline.md): The line where the text begins in the Markdown source.
- [endLine](endline.md): The line where the text ends in the Markdown source.
- [endColumn](endcolumn.md): The column where the text ends in the Markdown source.
