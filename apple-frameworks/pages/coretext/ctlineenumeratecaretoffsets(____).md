> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlineenumeratecaretoffsets(_:_:)](https://developer.apple.com/documentation/coretext/ctlineenumeratecaretoffsets(_:_:))

# CTLineEnumerateCaretOffsets(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enumerates caret offsets for characters in a line.

## Declaration

```swift
func CTLineEnumerateCaretOffsets(_ line: CTLine, _ block: @escaping (Double, CFIndex, Bool, UnsafeMutablePointer<Bool>) -> Void)
```

## Parameters

- `line`: The line to enumerate.
- `block`: The block to invoke once for each logical caret edge in the line, in left-to-right visual order. The block’s `offset` parameter is relative to the line origin. The block’s `leadingEdge` parameter specifies logical order.

## See Also

### Getting Line Positioning

- [CTLineGetStringIndexForPosition(\_:\_:)](ctlinegetstringindexforposition%28____%29.md): Performs hit testing.
- [CTLineGetOffsetForStringIndex(\_:\_:\_:)](ctlinegetoffsetforstringindex%28______%29.md): Determines the graphical offset or offsets for a string index.

# CTLineEnumerateCaretOffsets (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enumerates caret offsets for characters in a line.

## Declaration

```objectivec
extern void CTLineEnumerateCaretOffsets(CTLineRef line, void (^block)(double offset, CFIndex charIndex, bool leadingEdge, bool *stop));
```

## Parameters

- `line`: The line to enumerate.
- `block`: The block to invoke once for each logical caret edge in the line, in left-to-right visual order. The block’s `offset` parameter is relative to the line origin. The block’s `leadingEdge` parameter specifies logical order.

## See Also

### Getting Line Positioning

- [CTLineGetStringIndexForPosition](ctlinegetstringindexforposition%28____%29.md): Performs hit testing.
- [CTLineGetOffsetForStringIndex](ctlinegetoffsetforstringindex%28______%29.md): Determines the graphical offset or offsets for a string index.
