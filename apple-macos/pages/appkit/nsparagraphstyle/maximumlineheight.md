> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/maximumlineheight](https://developer.apple.com/documentation/appkit/nsparagraphstyle/maximumlineheight)

# maximumLineHeight (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The paragraph’s maximum line height.

## Declaration

```swift
var maximumLineHeight: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the maximum height in points that any line in the receiver occupies, regardless of the font size or size of any attached graphic. This value is always nonnegative. The default value is `0`.

Glyphs and graphics exceeding this height overlaps neighboring lines; however, a maximum height of `0` implies no line height limit. Although this limit applies to the line itself, line spacing adds extra space between adjacent lines.

## See Also

### Accessing style information

- [alignment](alignment.md): The text alignment of the paragraph.
- [NSTextAlignment](../nstextalignment.md): Constants that specify text alignment.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](tailindent.md): The trailing indentation of the paragraph.
- [lineHeightMultiple](lineheightmultiple.md): The line height multiple.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](paragraphspacing.md): Distance between the bottom of this paragraph and top of next.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.

# maximumLineHeight (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The paragraph’s maximum line height.

## Declaration

```objectivec
@property (readonly) CGFloat maximumLineHeight;
```

<a id="Discussion"></a>

## Discussion

This property contains the maximum height in points that any line in the receiver occupies, regardless of the font size or size of any attached graphic. This value is always nonnegative. The default value is `0`.

Glyphs and graphics exceeding this height overlaps neighboring lines; however, a maximum height of `0` implies no line height limit. Although this limit applies to the line itself, line spacing adds extra space between adjacent lines.

## See Also

### Accessing style information

- [alignment](alignment.md): The text alignment of the paragraph.
- [NSTextAlignment](../nstextalignment.md): Constants that specify text alignment.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](tailindent.md): The trailing indentation of the paragraph.
- [lineHeightMultiple](lineheightmultiple.md): The line height multiple.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](paragraphspacing.md): Distance between the bottom of this paragraph and top of next.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
