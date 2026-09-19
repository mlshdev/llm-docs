> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsattributedstringmarkdownsourceposition/endcolumn

# endColumn

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The column where the text ends in the Markdown source.

## Declaration

```objectivec
@property (readonly) NSInteger endColumn;
```

<a id="Discussion"></a>

## Discussion

This property uses `1`-based counting. Columns represent UTF-8 indices; for multi-byte characters, the column indicates the first byte.

## See Also

### Getting Markdown Source Position Properties

- [startLine](startline.md): The line where the text begins in the Markdown source.
- [startColumn](startcolumn.md): The column where the text begins in the Markdown source.
- [endLine](endline.md): The line where the text ends in the Markdown source.
