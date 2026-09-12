> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsparagraphstyle/paragraphspacing](https://developer.apple.com/documentation/uikit/nsparagraphstyle/paragraphspacing)

# paragraphSpacing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Distance between the bottom of this paragraph and top of next.

## Declaration

```swift
var paragraphSpacing: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the space (measured in points) between paragraphs. This value is always nonnegative. The framework determines the space between paragraphs by adding the previous paragraph’s `paragraphSpacing` and the current paragraph’s [paragraphSpacingBefore](paragraphspacingbefore.md).

## See Also

### Accessing style information

- [alignment](alignment.md): The text alignment of the paragraph.
- [NSTextAlignment](../nstextalignment.md): Constants that specify text alignment.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](tailindent.md): The trailing indentation of the paragraph.
- [lineHeightMultiple](lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.

# paragraphSpacing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Distance between the bottom of this paragraph and top of next.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat paragraphSpacing;
```

<a id="Discussion"></a>

## Discussion

This property contains the space (measured in points) between paragraphs. This value is always nonnegative. The framework determines the space between paragraphs by adding the previous paragraph’s `paragraphSpacing` and the current paragraph’s [paragraphSpacingBefore](paragraphspacingbefore.md).

## See Also

### Accessing style information

- [alignment](alignment.md): The text alignment of the paragraph.
- [NSTextAlignment](../nstextalignment.md): Constants that specify text alignment.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](tailindent.md): The trailing indentation of the paragraph.
- [lineHeightMultiple](lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
