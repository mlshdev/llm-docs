> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle/paragraphspacing](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/paragraphspacing)

# paragraphSpacing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The space after the end of the paragraph.

## Declaration

```swift
var paragraphSpacing: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the space (measured in points) added at the end of the paragraph to separate it from the following paragraph. This value must be nonnegative. The space between paragraphs is determined by adding the previous paragraph’s `paragraphSpacing` and the current paragraph’s [paragraphSpacingBefore](paragraphspacingbefore.md).

## See Also

### Setting style information

- [setParagraphStyle(\_:)](setparagraphstyle%28__%29.md): Replaces the subattributes of the paragraph with those in the specified paragraph style object.
- [alignment](alignment.md): The text alignment of the paragraph.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](tailindent.md): The trailing indentation of the paragraph.
- [lineHeightMultiple](lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [baseWritingDirection](basewritingdirection.md): The base writing direction for the paragraph.

# paragraphSpacing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The space after the end of the paragraph.

## Declaration

```objectivec
@property CGFloat paragraphSpacing;
```

<a id="Discussion"></a>

## Discussion

This property contains the space (measured in points) added at the end of the paragraph to separate it from the following paragraph. This value must be nonnegative. The space between paragraphs is determined by adding the previous paragraph’s `paragraphSpacing` and the current paragraph’s [paragraphSpacingBefore](paragraphspacingbefore.md).

## See Also

### Setting style information

- [setParagraphStyle:](setparagraphstyle%28__%29.md): Replaces the subattributes of the paragraph with those in the specified paragraph style object.
- [alignment](alignment.md): The text alignment of the paragraph.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](tailindent.md): The trailing indentation of the paragraph.
- [lineHeightMultiple](lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [baseWritingDirection](basewritingdirection.md): The base writing direction for the paragraph.
