> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/enumeratetextsegments(in:type:options:using:)](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/enumeratetextsegments(in:type:options:using:))

# enumerateTextSegments(in:type:options:using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Enumerates text segments of a specific type and in the text range you provide.

## Declaration

```swift
func enumerateTextSegments(in textRange: NSTextRange, type: NSTextLayoutManager.SegmentType, options: NSTextLayoutManager.SegmentOptions = [], using block: (NSTextRange?, CGRect, CGFloat, NSTextContainer) -> Bool)
```

## Parameters

- `textRange`: The range as an [NSTextRange](../nstextrange.md).
- `type`: One of the available [NSTextLayoutManager.SegmentType](segmenttype.md) values.
- `options`: One or more of the [NSTextLayoutManager.SegmentOptions](segmentoptions.md) options.
- `block`: A closure you provide to determine if the enumeration finishes early.

<a id="Discussion"></a>

## Discussion

A text segment is a logically and visually contiguous portion of the text content inside a line fragment that you specify with a single text range. The framework enumerates the segments visually from left to right. Returning `false` breaks out of the enumeration.

## See Also

### Accessing the text storage

- [textContentManager](textcontentmanager.md): Returns the text content manager associated with this text layout manager.
- [textContainer](textcontainer.md): The text container object that provides geometric information for the layout destination.
- [textSelectionNavigation](textselectionnavigation.md): Returns a text selection manager configured to have the text layout manager as its data source.
- [textSelections](textselections.md): An array of text selections associated by the text layout manager.
- [usageBoundsForTextContainer](usageboundsfortextcontainer.md): Returns the usage bounds for the text container.
- [replace(\_:)](replace%28__%29.md): Replaces the current text content manager with a new one you provide.
- [replaceContents(in:with:)](replacecontents%28in_with_%29-2elb.md): Replaces content at the location you specify with an attributed string you provide.
- [replaceContents(in:with:)](replacecontents%28in_with_%29-80j0b.md): Replaces content at the location you specify with the text elements string you provide.

# enumerateTextSegmentsInRange:type:options:usingBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Enumerates text segments of a specific type and in the text range you provide.

## Declaration

```objectivec
- (void) enumerateTextSegmentsInRange:(NSTextRange *) textRange type:(NSTextLayoutManagerSegmentType) type options:(NSTextLayoutManagerSegmentOptions) options usingBlock:(BOOL (^)(NSTextRange *textSegmentRange, CGRect textSegmentFrame, CGFloat baselinePosition, NSTextContainer *textContainer)) block;
```

## Parameters

- `textRange`: The range as an [NSTextRange](../nstextrange.md).
- `type`: One of the available [NSTextLayoutManagerSegmentType](segmenttype.md) values.
- `options`: One or more of the [NSTextLayoutManagerSegmentOptions](segmentoptions.md) options.
- `block`: A closure you provide to determine if the enumeration finishes early.

<a id="Discussion"></a>

## Discussion

A text segment is a logically and visually contiguous portion of the text content inside a line fragment that you specify with a single text range. The framework enumerates the segments visually from left to right. Returning `false` breaks out of the enumeration.

## See Also

### Accessing the text storage

- [textContentManager](textcontentmanager.md): Returns the text content manager associated with this text layout manager.
- [textContainer](textcontainer.md): The text container object that provides geometric information for the layout destination.
- [textSelectionNavigation](textselectionnavigation.md): Returns a text selection manager configured to have the text layout manager as its data source.
- [textSelections](textselections.md): An array of text selections associated by the text layout manager.
- [usageBoundsForTextContainer](usageboundsfortextcontainer.md): Returns the usage bounds for the text container.
- [replaceTextContentManager:](replace%28__%29.md): Replaces the current text content manager with a new one you provide.
- [replaceContentsInRange:withAttributedString:](replacecontents%28in_with_%29-2elb.md): Replaces content at the location you specify with an attributed string you provide.
- [replaceContentsInRange:withTextElements:](replacecontents%28in_with_%29-80j0b.md): Replaces content at the location you specify with the text elements string you provide.
