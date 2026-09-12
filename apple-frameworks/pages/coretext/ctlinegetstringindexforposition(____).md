> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinegetstringindexforposition(_:_:)](https://developer.apple.com/documentation/coretext/ctlinegetstringindexforposition(_:_:))

# CTLineGetStringIndexForPosition(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs hit testing.

## Declaration

```swift
func CTLineGetStringIndexForPosition(_ line: CTLine, _ position: CGPoint) -> CFIndex
```

## Parameters

- `line`: The line being examined.
- `position`: The location of the mouse click relative to the line’s origin.

<a id="return-value"></a>

## Return Value

The string index for the position, or if the line does not support string access, [kCFNotFound](../corefoundation/kcfnotfound.md). Relative to the line’s string range, this value can be no less than the first string index and no greater than the last string index plus 1.

<a id="Discussion"></a>

## Discussion

This function can be used to determine the string index for a mouse click or other event. This string index corresponds to the character before which the next character should be inserted. This determination is made by analyzing the string from which a typesetter was created and the corresponding glyphs as embodied by a particular line.

## See Also

### Getting Line Positioning

- [CTLineGetOffsetForStringIndex(\_:\_:\_:)](ctlinegetoffsetforstringindex%28______%29.md): Determines the graphical offset or offsets for a string index.
- [CTLineEnumerateCaretOffsets(\_:\_:)](ctlineenumeratecaretoffsets%28____%29.md): Enumerates caret offsets for characters in a line.

# CTLineGetStringIndexForPosition (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs hit testing.

## Declaration

```objectivec
extern CFIndex CTLineGetStringIndexForPosition(CTLineRef line, CGPoint position);
```

## Parameters

- `line`: The line being examined.
- `position`: The location of the mouse click relative to the line’s origin.

<a id="return-value"></a>

## Return Value

The string index for the position, or if the line does not support string access, [kCFNotFound](../corefoundation/kcfnotfound.md). Relative to the line’s string range, this value can be no less than the first string index and no greater than the last string index plus 1.

<a id="Discussion"></a>

## Discussion

This function can be used to determine the string index for a mouse click or other event. This string index corresponds to the character before which the next character should be inserted. This determination is made by analyzing the string from which a typesetter was created and the corresponding glyphs as embodied by a particular line.

## See Also

### Getting Line Positioning

- [CTLineGetOffsetForStringIndex](ctlinegetoffsetforstringindex%28______%29.md): Determines the graphical offset or offsets for a string index.
- [CTLineEnumerateCaretOffsets](ctlineenumeratecaretoffsets%28____%29.md): Enumerates caret offsets for characters in a line.
