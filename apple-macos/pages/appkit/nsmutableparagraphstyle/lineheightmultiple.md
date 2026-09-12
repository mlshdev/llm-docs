> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutableparagraphstyle/lineheightmultiple](https://developer.apple.com/documentation/appkit/nsmutableparagraphstyle/lineheightmultiple)

# lineHeightMultiple (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The line height multiple.

## Declaration

```swift
var lineHeightMultiple: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The natural line height of the receiver is multiplied by this factor (if positive) before being constrained by minimum and maximum line height. The default value of this property is 0.0.

## See Also

### Setting style information

- [setParagraphStyle(\_:)](setparagraphstyle%28__%29.md): Replaces the subattributes of the paragraph with those in the specified paragraph style object.
- [alignment](alignment.md): The text alignment of the paragraph.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](tailindent.md): The trailing indentation of the paragraph.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](paragraphspacing.md): The space after the end of the paragraph.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [baseWritingDirection](basewritingdirection.md): The base writing direction for the paragraph.

# lineHeightMultiple (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The line height multiple.

## Declaration

```objectivec
@property CGFloat lineHeightMultiple;
```

<a id="Discussion"></a>

## Discussion

The natural line height of the receiver is multiplied by this factor (if positive) before being constrained by minimum and maximum line height. The default value of this property is 0.0.

## See Also

### Setting style information

- [setParagraphStyle:](setparagraphstyle%28__%29.md): Replaces the subattributes of the paragraph with those in the specified paragraph style object.
- [alignment](alignment.md): The text alignment of the paragraph.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](tailindent.md): The trailing indentation of the paragraph.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](paragraphspacing.md): The space after the end of the paragraph.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [baseWritingDirection](basewritingdirection.md): The base writing direction for the paragraph.
