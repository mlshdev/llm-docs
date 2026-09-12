> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsparagraphstyle/lineheightmultiple](https://developer.apple.com/documentation/appkit/nsparagraphstyle/lineheightmultiple)

# lineHeightMultiple (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The line height multiple.

## Declaration

```swift
var lineHeightMultiple: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The framework multiplies the natural line height of the receiver by this factor (if positive), and constrains the resulting value by the minimum and maximum line height. The default value of this property is `0.0`.

## See Also

### Accessing style information

- [alignment](alignment.md): The text alignment of the paragraph.
- [NSTextAlignment](../nstextalignment.md): Constants that specify text alignment.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](tailindent.md): The trailing indentation of the paragraph.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](paragraphspacing.md): Distance between the bottom of this paragraph and top of next.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.

# lineHeightMultiple (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The line height multiple.

## Declaration

```objectivec
@property (readonly) CGFloat lineHeightMultiple;
```

<a id="Discussion"></a>

## Discussion

The framework multiplies the natural line height of the receiver by this factor (if positive), and constrains the resulting value by the minimum and maximum line height. The default value of this property is `0.0`.

## See Also

### Accessing style information

- [alignment](alignment.md): The text alignment of the paragraph.
- [NSTextAlignment](../nstextalignment.md): Constants that specify text alignment.
- [firstLineHeadIndent](firstlineheadindent.md): The indentation of the first line of the paragraph.
- [headIndent](headindent.md): The indentation of the paragraph’s lines other than the first.
- [tailIndent](tailindent.md): The trailing indentation of the paragraph.
- [maximumLineHeight](maximumlineheight.md): The paragraph’s maximum line height.
- [minimumLineHeight](minimumlineheight.md): The paragraph’s minimum line height.
- [lineSpacing](linespacing.md): The distance in points between the bottom of one line fragment and the top of the next.
- [paragraphSpacing](paragraphspacing.md): Distance between the bottom of this paragraph and top of next.
- [paragraphSpacingBefore](paragraphspacingbefore.md): The distance between the paragraph’s top and the beginning of its text content.
