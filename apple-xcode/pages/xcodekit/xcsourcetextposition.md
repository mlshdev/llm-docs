> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourcetextposition](https://developer.apple.com/documentation/xcodekit/xcsourcetextposition)

# XCSourceTextPosition (Swift)

**Framework:** XcodeKit  
**Kind:** Structure  
**Availability:** macOS 10.12+

A zero-based position in a source editor, defined by a line number and column number.

## Declaration

```swift
struct XCSourceTextPosition
```

## Topics

### Creating Source Text Positions

- [init()](xcsourcetextposition/init%28%29.md): Creates a new source text position at the beginning of the source text.
- [init(line:column:)](xcsourcetextposition/init%28line_column_%29.md): Creates a source text position at the specified line and column.

### Inspecting Source Text Positions

- [column](xcsourcetextposition/column.md): The horizontal component of a source text position.
- [line](xcsourcetextposition/line.md): The vertical component of a source text position.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Source Text

- [XCSourceTextBuffer](xcsourcetextbuffer.md): A buffer you use to access and modify the text contents and text selections in a source editor.
- [XCSourceTextRange](xcsourcetextrange.md): A half-open range of text in a buffer you use to select text or specify the insertion point for new text.

# XCSourceTextPosition (Objective-C)

**Framework:** XcodeKit  
**Kind:** Structure  
**Availability:** macOS 10.12+

A zero-based position in a source editor, defined by a line number and column number.

## Declaration

```objectivec
typedef struct { ... } XCSourceTextPosition;
```

## Topics

### Creating Source Text Positions

- [XCSourceTextPositionMake](xcsourcetextpositionmake.md): Creates a new text position for a specified line and column.

### Inspecting Source Text Positions

- [column](xcsourcetextposition/column.md): The horizontal component of a source text position.
- [line](xcsourcetextposition/line.md): The vertical component of a source text position.

## See Also

### Source Text

- [XCSourceTextBuffer](xcsourcetextbuffer.md): A buffer you use to access and modify the text contents and text selections in a source editor.
- [XCSourceTextRange](xcsourcetextrange.md): A half-open range of text in a buffer you use to select text or specify the insertion point for new text.
