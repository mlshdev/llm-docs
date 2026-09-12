> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanager/replacecontents(in:with:)-2elb](https://developer.apple.com/documentation/appkit/nstextlayoutmanager/replacecontents(in:with:)-2elb)

# replaceContents(in:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Replaces content at the location you specify with an attributed string you provide.

## Declaration

```swift
func replaceContents(in range: NSTextRange, with attributedString: NSAttributedString)
```

## Parameters

- `range`: The range of the content to replace.
- `attributedString`: An attribued string to replace the content at `range`.

## See Also

### Accessing the text storage

- [textContentManager](textcontentmanager.md): Returns the text content manager associated with this text layout manager.
- [textContainer](textcontainer.md): The text container object that provides geometric information for the layout destination.
- [textSelectionNavigation](textselectionnavigation.md): Returns a text selection manager configured to have the text layout manager as its data source.
- [textSelections](textselections.md): An array of text selections associated by the text layout manager.
- [usageBoundsForTextContainer](usageboundsfortextcontainer.md): Returns the usage bounds for the text container.
- [enumerateTextSegments(in:type:options:using:)](enumeratetextsegments%28in_type_options_using_%29.md): Enumerates text segments of a specific type and in the text range you provide.
- [replace(\_:)](replace%28__%29.md): Replaces the current text content manager with a new one you provide.
- [replaceContents(in:with:)](replacecontents%28in_with_%29-80j0b.md): Replaces content at the location you specify with the text elements string you provide.

# replaceContentsInRange:withAttributedString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Replaces content at the location you specify with an attributed string you provide.

## Declaration

```objectivec
- (void) replaceContentsInRange:(NSTextRange *) range withAttributedString:(NSAttributedString *) attributedString;
```

## Parameters

- `range`: The range of the content to replace.
- `attributedString`: An attribued string to replace the content at `range`.

## See Also

### Accessing the text storage

- [textContentManager](textcontentmanager.md): Returns the text content manager associated with this text layout manager.
- [textContainer](textcontainer.md): The text container object that provides geometric information for the layout destination.
- [textSelectionNavigation](textselectionnavigation.md): Returns a text selection manager configured to have the text layout manager as its data source.
- [textSelections](textselections.md): An array of text selections associated by the text layout manager.
- [usageBoundsForTextContainer](usageboundsfortextcontainer.md): Returns the usage bounds for the text container.
- [enumerateTextSegmentsInRange:type:options:usingBlock:](enumeratetextsegments%28in_type_options_using_%29.md): Enumerates text segments of a specific type and in the text range you provide.
- [replaceTextContentManager:](replace%28__%29.md): Replaces the current text content manager with a new one you provide.
- [replaceContentsInRange:withTextElements:](replacecontents%28in_with_%29-80j0b.md): Replaces content at the location you specify with the text elements string you provide.
