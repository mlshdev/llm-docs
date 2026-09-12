> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/usageboundsfortextcontainer](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/usageboundsfortextcontainer)

# usageBoundsForTextContainer (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the usage bounds for the text container.

## Declaration

```swift
var usageBoundsForTextContainer: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

Views can observe this property to trigger a resize operation. For example, `UIView or NSView` call [setNeedsUpdateConstraints()](../uiview/setneedsupdateconstraints%28%29.md) when the usage bounds changes. This property is KVO-compliant.

## See Also

### Accessing the text storage

- [textContentManager](textcontentmanager.md): Returns the text content manager associated with this text layout manager.
- [textContainer](textcontainer.md): The text container object that provides geometric information for the layout destination.
- [textSelectionNavigation](textselectionnavigation.md): Returns a text selection manager configured to have the text layout manager as its data source.
- [textSelections](textselections.md): An array of text selections associated by the text layout manager.
- [enumerateTextSegments(in:type:options:using:)](enumeratetextsegments%28in_type_options_using_%29.md): Enumerates text segments of a specific type and in the text range you provide.
- [replace(\_:)](replace%28__%29.md): Replaces the current text content manager with a new one you provide.
- [replaceContents(in:with:)](replacecontents%28in_with_%29-2elb.md): Replaces content at the location you specify with an attributed string you provide.
- [replaceContents(in:with:)](replacecontents%28in_with_%29-80j0b.md): Replaces content at the location you specify with the text elements string you provide.

# usageBoundsForTextContainer (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the usage bounds for the text container.

## Declaration

```objectivec
@property (readonly) CGRect usageBoundsForTextContainer;
```

<a id="Discussion"></a>

## Discussion

Views can observe this property to trigger a resize operation. For example, `UIView or NSView` call [setNeedsUpdateConstraints](../uiview/setneedsupdateconstraints%28%29.md) when the usage bounds changes. This property is KVO-compliant.

## See Also

### Accessing the text storage

- [textContentManager](textcontentmanager.md): Returns the text content manager associated with this text layout manager.
- [textContainer](textcontainer.md): The text container object that provides geometric information for the layout destination.
- [textSelectionNavigation](textselectionnavigation.md): Returns a text selection manager configured to have the text layout manager as its data source.
- [textSelections](textselections.md): An array of text selections associated by the text layout manager.
- [enumerateTextSegmentsInRange:type:options:usingBlock:](enumeratetextsegments%28in_type_options_using_%29.md): Enumerates text segments of a specific type and in the text range you provide.
- [replaceTextContentManager:](replace%28__%29.md): Replaces the current text content manager with a new one you provide.
- [replaceContentsInRange:withAttributedString:](replacecontents%28in_with_%29-2elb.md): Replaces content at the location you specify with an attributed string you provide.
- [replaceContentsInRange:withTextElements:](replacecontents%28in_with_%29-80j0b.md): Replaces content at the location you specify with the text elements string you provide.
