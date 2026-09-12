> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstringmarkdownsourceposition/initwithstartline:startcolumn:endline:endcolumn:](https://developer.apple.com/documentation/foundation/nsattributedstringmarkdownsourceposition/initwithstartline:startcolumn:endline:endcolumn:)

# initWithStartLine:startColumn:endLine:endColumn:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a Markdown source position instance from its start and end line and column.

## Declaration

```objectivec
- (instancetype) initWithStartLine:(NSInteger) startLine startColumn:(NSInteger) startColumn endLine:(NSInteger) endLine endColumn:(NSInteger) endColumn;
```

## Parameters

- `startLine`: The line number where text begins in the Markdown source. Specify a 1-based number. For example, the number for the first row is 1, for the second row is 2, and so on.
- `startColumn`: The column number where text begins in the Markdown source. Specify a 1-based number. For example, the number for the first column is 1, for the second column is 2, and so on. Columns represent UTF-8 indices; for multi-byte characters, the column indicates the first byte.
- `endLine`: The line number where the Markdown source ends. Specify a 1-based number.
- `endColumn`: The column number where the Markdown source ends. Specify a 1-based number.
