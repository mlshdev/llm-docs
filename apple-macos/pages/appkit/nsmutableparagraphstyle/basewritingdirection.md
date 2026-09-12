> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle/basewritingdirection](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/basewritingdirection)

# baseWritingDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The base writing direction for the paragraph.

## Declaration

```swift
var baseWritingDirection: NSWritingDirection { get set }
```

<a id="Discussion"></a>

## Discussion

If you specify [NSWritingDirection.natural](../nswritingdirection/natural.md), the receiver resolves the writing direction to either [NSWritingDirection.leftToRight](../nswritingdirection/lefttoright.md) or [NSWritingDirection.rightToLeft](../nswritingdirection/righttoleft.md), depending on the direction for the user’s language preference setting.

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
- [paragraphSpacing](paragraphspacing.md): The space after the end of the paragraph.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.

# baseWritingDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The base writing direction for the paragraph.

## Declaration

```objectivec
@property NSWritingDirection baseWritingDirection;
```

<a id="Discussion"></a>

## Discussion

If you specify [NSWritingDirectionNatural](../nswritingdirection/natural.md), the receiver resolves the writing direction to either [NSWritingDirectionLeftToRight](../nswritingdirection/lefttoright.md) or [NSWritingDirectionRightToLeft](../nswritingdirection/righttoleft.md), depending on the direction for the user’s language preference setting.

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
- [paragraphSpacing](paragraphspacing.md): The space after the end of the paragraph.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
