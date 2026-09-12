> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/tailindent](https://developer.apple.com/documentation/appkit/nsparagraphstyle/tailindent)

# tailIndent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The trailing indentation of the paragraph.

## Declaration

```swift
var tailIndent: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

If positive, this value is the distance from the leading margin (for example, the left margin in left-to-right text). If `0` or negative, it’s the distance from the trailing margin.

For example, a paragraph style designed to fit exactly in a two-inch wide container has a head indent of `0.0` and a tail indent of `0.0`. One designed to fit with a quarter-inch margin has a head indent of `0.25` and a tail indent of `–0.25`.

## See Also

### Accessing style information

- [alignment](alignment.md): The text alignment of the paragraph.
- [NSTextAlignment](../nstextalignment.md): Constants that specify text alignment.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [lineHeightMultiple](lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](paragraphspacing.md): Distance between the bottom of this paragraph and top of next.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.

# tailIndent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The trailing indentation of the paragraph.

## Declaration

```objectivec
@property (readonly) CGFloat tailIndent;
```

<a id="Discussion"></a>

## Discussion

If positive, this value is the distance from the leading margin (for example, the left margin in left-to-right text). If `0` or negative, it’s the distance from the trailing margin.

For example, a paragraph style designed to fit exactly in a two-inch wide container has a head indent of `0.0` and a tail indent of `0.0`. One designed to fit with a quarter-inch margin has a head indent of `0.25` and a tail indent of `–0.25`.

## See Also

### Accessing style information

- [alignment](alignment.md): The text alignment of the paragraph.
- [NSTextAlignment](../nstextalignment.md): Constants that specify text alignment.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [lineHeightMultiple](lineheightmultiple.md): The line height multiple.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](paragraphspacing.md): Distance between the bottom of this paragraph and top of next.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
