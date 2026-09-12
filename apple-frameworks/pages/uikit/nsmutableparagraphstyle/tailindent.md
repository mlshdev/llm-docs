> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsmutableparagraphstyle/tailindent](https://developer.apple.com/documentation/uikit/nsmutableparagraphstyle/tailindent)

# tailIndent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The trailing indentation of the paragraph.

## Declaration

```swift
var tailIndent: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If positive, this value is the distance from the leading margin (for example, the left margin in left-to-right text). If 0 or negative, it’s the distance from the trailing margin.

For example, a paragraph style designed to fit exactly in a 2-inch wide container has a head indent of 0.0 and a tail indent of 0.0. One designed to fit with a quarter-inch margin has a head indent of 0.25 and a tail indent of –0.25.

## See Also

### Setting style information

- [setParagraphStyle(\_:)](setparagraphstyle%28__%29.md): Replaces the subattributes of the paragraph with those in the specified paragraph style object.
- [alignment](alignment.md): The text alignment of the paragraph.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [lineHeightMultiple](lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](paragraphspacing.md): The space after the end of the paragraph.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [baseWritingDirection](basewritingdirection.md): The base writing direction for the paragraph.

# tailIndent (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The trailing indentation of the paragraph.

## Declaration

```objectivec
@property (nonatomic) CGFloat tailIndent;
```

<a id="Discussion"></a>

## Discussion

If positive, this value is the distance from the leading margin (for example, the left margin in left-to-right text). If 0 or negative, it’s the distance from the trailing margin.

For example, a paragraph style designed to fit exactly in a 2-inch wide container has a head indent of 0.0 and a tail indent of 0.0. One designed to fit with a quarter-inch margin has a head indent of 0.25 and a tail indent of –0.25.

## See Also

### Setting style information

- [setParagraphStyle:](setparagraphstyle%28__%29.md): Replaces the subattributes of the paragraph with those in the specified paragraph style object.
- [alignment](alignment.md): The text alignment of the paragraph.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [lineHeightMultiple](lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](paragraphspacing.md): The space after the end of the paragraph.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
- [baseWritingDirection](basewritingdirection.md): The base writing direction for the paragraph.
