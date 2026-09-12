> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/replacecontents(in:with:)-80j0b](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/replacecontents(in:with:)-80j0b)

# replaceContents(in:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Replaces content at the location you specify with the text elements string you provide.

## Declaration

```swift
func replaceContents(in range: NSTextRange, with textElements: [NSTextElement])
```

## Parameters

- `range`: The range of the content to replace.
- `textElements`: An array of text elements.

## See Also

### Accessing the text storage

- [textContentManager](textcontentmanager.md): Returns the text content manager associated with this text layout manager.
- [textContainer](textcontainer.md): The text container object that provides geometric information for the layout destination.
- [textSelectionNavigation](textselectionnavigation.md): Returns a text selection manager configured to have the text layout manager as its data source.
- [textSelections](textselections.md): An array of text selections associated by the text layout manager.
- [usageBoundsForTextContainer](usageboundsfortextcontainer.md): Returns the usage bounds for the text container.
- [enumerateTextSegments(in:type:options:using:)](enumeratetextsegments%28in_type_options_using_%29.md): Enumerates text segments of a specific type and in the text range you provide.
- [replace(\_:)](replace%28__%29.md): Replaces the current text content manager with a new one you provide.
- [replaceContents(in:with:)](replacecontents%28in_with_%29-2elb.md): Replaces content at the location you specify with an attributed string you provide.

# replaceContentsInRange:withTextElements: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Replaces content at the location you specify with the text elements string you provide.

## Declaration

```objectivec
- (void) replaceContentsInRange:(NSTextRange *) range withTextElements:(NSArray<NSTextElement *> *) textElements;
```

## Parameters

- `range`: The range of the content to replace.
- `textElements`: An array of text elements.

## See Also

### Accessing the text storage

- [textContentManager](textcontentmanager.md): Returns the text content manager associated with this text layout manager.
- [textContainer](textcontainer.md): The text container object that provides geometric information for the layout destination.
- [textSelectionNavigation](textselectionnavigation.md): Returns a text selection manager configured to have the text layout manager as its data source.
- [textSelections](textselections.md): An array of text selections associated by the text layout manager.
- [usageBoundsForTextContainer](usageboundsfortextcontainer.md): Returns the usage bounds for the text container.
- [enumerateTextSegmentsInRange:type:options:usingBlock:](enumeratetextsegments%28in_type_options_using_%29.md): Enumerates text segments of a specific type and in the text range you provide.
- [replaceTextContentManager:](replace%28__%29.md): Replaces the current text content manager with a new one you provide.
- [replaceContentsInRange:withAttributedString:](replacecontents%28in_with_%29-2elb.md): Replaces content at the location you specify with an attributed string you provide.
