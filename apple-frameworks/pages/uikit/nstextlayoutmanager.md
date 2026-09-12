> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager](https://developer.apple.com/documentation/uikit/nstextlayoutmanager)

# NSTextLayoutManager (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The primary class that you use to manage text layout and presentation for custom text displays.

## Declaration

```swift
class NSTextLayoutManager
```

<a id="overview"></a>

## Overview

`NSTextLayoutManager` is the centerpiece of the TextKit object network that maintains the layout geometry through an array of [NSTextContainer](nstextcontainer.md) objects. It lays out results using [NSTextLayoutFragment](nstextlayoutfragment.md) and [NSTextElement](nstextelement.md) objects vended from a [NSTextContentManager](nstextcontentmanager.md) that participates in the content layout process.

## Topics

### Creating a layout manager

- [init()](nstextlayoutmanager/init%28%29.md): Creates a new text layout manager.
- [init(coder:)](nstextlayoutmanager/init%28coder_%29.md): Creates a new text layout manager with the coder you provide.

### Configuring global layout manager options

- [layoutQueue](nstextlayoutmanager/layoutqueue.md): The queue that the framework dispatches layout operations on.
- [renderingAttributesValidator](nstextlayoutmanager/renderingattributesvalidator.md): A callback block that the framework invokes whenever the text layout manager needs to validate the rendering attributes for the range.
- [usesFontLeading](nstextlayoutmanager/usesfontleading.md): A Boolean value that controls whether the framework uses the leading information specified by the font when laying out text.
- [usesHyphenation](nstextlayoutmanager/useshyphenation.md): A Boolean values that controls whether the text layout manager attempts to hyphenate when wrapping lines.
- [limitsLayoutForSuspiciousContents](nstextlayoutmanager/limitslayoutforsuspiciouscontents.md): A Boolean value that controls internal security analysis for malicious inputs and activates defensive behaviors.

### Managing the layout process

- [delegate](nstextlayoutmanager/delegate.md): The delegate for the text layout manager object.
- [NSTextLayoutManagerDelegate](nstextlayoutmanagerdelegate.md): Optional methods that delegates implement to respond to layout changes.

### Accessing the text storage

- [textContentManager](nstextlayoutmanager/textcontentmanager.md): Returns the text content manager associated with this text layout manager.
- [textContainer](nstextlayoutmanager/textcontainer.md): The text container object that provides geometric information for the layout destination.
- [textSelectionNavigation](nstextlayoutmanager/textselectionnavigation.md): Returns a text selection manager configured to have the text layout manager as its data source.
- [textSelections](nstextlayoutmanager/textselections.md): An array of text selections associated by the text layout manager.
- [usageBoundsForTextContainer](nstextlayoutmanager/usageboundsfortextcontainer.md): Returns the usage bounds for the text container.
- [enumerateTextSegments(in:type:options:using:)](nstextlayoutmanager/enumeratetextsegments%28in_type_options_using_%29.md): Enumerates text segments of a specific type and in the text range you provide.
- [replace(\_:)](nstextlayoutmanager/replace%28__%29.md): Replaces the current text content manager with a new one you provide.
- [replaceContents(in:with:)](nstextlayoutmanager/replacecontents%28in_with_%29-2elb.md): Replaces content at the location you specify with an attributed string you provide.
- [replaceContents(in:with:)](nstextlayoutmanager/replacecontents%28in_with_%29-80j0b.md): Replaces content at the location you specify with the text elements string you provide.

### Adjusting rendering

- [linkRenderingAttributes](nstextlayoutmanager/linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [addRenderingAttribute(\_:value:for:)](nstextlayoutmanager/addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [enumerateRenderingAttributes(from:reverse:using:)](nstextlayoutmanager/enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [renderingAttributes(forLink:at:)](nstextlayoutmanager/renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [invalidateRenderingAttributes(for:)](nstextlayoutmanager/invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [removeRenderingAttribute(\_:for:)](nstextlayoutmanager/removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes(\_:for:)](nstextlayoutmanager/setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.

### Causing layout generation

- [textViewportLayoutController](nstextlayoutmanager/textviewportlayoutcontroller.md): Returns text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayout(for:)](nstextlayoutmanager/invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragment(for:)](nstextlayoutmanager/textlayoutfragment%28for_%29-68dez.md): Returns the text layout fragment from the document at the specified location.
- [textLayoutFragment(for:)](nstextlayoutmanager/textlayoutfragment%28for_%29-4dhrx.md): Returns the text layout fragment at the position you specify in the text container.
- [ensureLayout(for:)](nstextlayoutmanager/ensurelayout%28for_%29-6ptsj.md): Performs the layout for filling the bounds you specify inside the last text container.
- [ensureLayout(for:)](nstextlayoutmanager/ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragments(from:options:using:)](nstextlayoutmanager/enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManager.SegmentType](nstextlayoutmanager/segmenttype.md): Values that describe the rendering of selection boundaries.
- [NSTextLayoutManager.SegmentOptions](nstextlayoutmanager/segmentoptions.md): Values that describe where and how the framework extends segments of a selection.

### Instance Properties

- [resolvesNaturalAlignmentWithBaseWritingDirection](nstextlayoutmanager/resolvesnaturalalignmentwithbasewritingdirection.md): Specifies the behavior for resolving [NSTextAlignment.natural](nstextalignment/natural.md) to the visual alignment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSTextSelectionDataSource](nstextselectiondatasource.md)

## See Also

### Layout

- [Using TextKit 2 to interact with text](using-textkit-2-to-interact-with-text.md): Interact with text by managing text selection and inserting custom text elements.
- [Display text with a custom layout](display-text-with-a-custom-layout.md): Lay out text in a custom-shaped container and apply glyph substitutions.
- [Managing viewport layout and attachment reuse in text views](managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass.md): Customize layout and preserve attachment views in your text view subclass.
- [NSTextContainer](nstextcontainer.md): A region where text layout occurs.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextLineFragment](nstextlinefragment.md): A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.
- [NSTextViewportLayoutController](nstextviewportlayoutcontroller.md): Manages the layout process inside the viewport interacting with its delegate.
- [NSTextViewportRenderingSurface](nstextviewportrenderingsurface.md): A protocol that identifies a view or layer as a drawable element for a text layout fragment.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.

# NSTextLayoutManager (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The primary class that you use to manage text layout and presentation for custom text displays.

## Declaration

```objectivec
@interface NSTextLayoutManager : NSObject
```

<a id="overview"></a>

## Overview

`NSTextLayoutManager` is the centerpiece of the TextKit object network that maintains the layout geometry through an array of [NSTextContainer](nstextcontainer.md) objects. It lays out results using [NSTextLayoutFragment](nstextlayoutfragment.md) and [NSTextElement](nstextelement.md) objects vended from a [NSTextContentManager](nstextcontentmanager.md) that participates in the content layout process.

## Topics

### Creating a layout manager

- [init](nstextlayoutmanager/init%28%29.md): Creates a new text layout manager.
- [initWithCoder:](nstextlayoutmanager/init%28coder_%29.md): Creates a new text layout manager with the coder you provide.

### Configuring global layout manager options

- [layoutQueue](nstextlayoutmanager/layoutqueue.md): The queue that the framework dispatches layout operations on.
- [renderingAttributesValidator](nstextlayoutmanager/renderingattributesvalidator.md): A callback block that the framework invokes whenever the text layout manager needs to validate the rendering attributes for the range.
- [usesFontLeading](nstextlayoutmanager/usesfontleading.md): A Boolean value that controls whether the framework uses the leading information specified by the font when laying out text.
- [usesHyphenation](nstextlayoutmanager/useshyphenation.md): A Boolean values that controls whether the text layout manager attempts to hyphenate when wrapping lines.
- [limitsLayoutForSuspiciousContents](nstextlayoutmanager/limitslayoutforsuspiciouscontents.md): A Boolean value that controls internal security analysis for malicious inputs and activates defensive behaviors.

### Managing the layout process

- [delegate](nstextlayoutmanager/delegate.md): The delegate for the text layout manager object.
- [NSTextLayoutManagerDelegate](nstextlayoutmanagerdelegate.md): Optional methods that delegates implement to respond to layout changes.

### Accessing the text storage

- [textContentManager](nstextlayoutmanager/textcontentmanager.md): Returns the text content manager associated with this text layout manager.
- [textContainer](nstextlayoutmanager/textcontainer.md): The text container object that provides geometric information for the layout destination.
- [textSelectionNavigation](nstextlayoutmanager/textselectionnavigation.md): Returns a text selection manager configured to have the text layout manager as its data source.
- [textSelections](nstextlayoutmanager/textselections.md): An array of text selections associated by the text layout manager.
- [usageBoundsForTextContainer](nstextlayoutmanager/usageboundsfortextcontainer.md): Returns the usage bounds for the text container.
- [enumerateTextSegmentsInRange:type:options:usingBlock:](nstextlayoutmanager/enumeratetextsegments%28in_type_options_using_%29.md): Enumerates text segments of a specific type and in the text range you provide.
- [replaceTextContentManager:](nstextlayoutmanager/replace%28__%29.md): Replaces the current text content manager with a new one you provide.
- [replaceContentsInRange:withAttributedString:](nstextlayoutmanager/replacecontents%28in_with_%29-2elb.md): Replaces content at the location you specify with an attributed string you provide.
- [replaceContentsInRange:withTextElements:](nstextlayoutmanager/replacecontents%28in_with_%29-80j0b.md): Replaces content at the location you specify with the text elements string you provide.

### Adjusting rendering

- [linkRenderingAttributes](nstextlayoutmanager/linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [addRenderingAttribute:value:forTextRange:](nstextlayoutmanager/addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [enumerateRenderingAttributesFromLocation:reverse:usingBlock:](nstextlayoutmanager/enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [renderingAttributesForLink:atLocation:](nstextlayoutmanager/renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [invalidateRenderingAttributesForTextRange:](nstextlayoutmanager/invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [removeRenderingAttribute:forTextRange:](nstextlayoutmanager/removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes:forTextRange:](nstextlayoutmanager/setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.

### Causing layout generation

- [textViewportLayoutController](nstextlayoutmanager/textviewportlayoutcontroller.md): Returns text viewport layout controller associated with the layout manager’s text container.
- [invalidateLayoutForRange:](nstextlayoutmanager/invalidatelayout%28for_%29.md): Invalidates the layout information for specified text range.
- [textLayoutFragmentForLocation:](nstextlayoutmanager/textlayoutfragment%28for_%29-68dez.md): Returns the text layout fragment from the document at the specified location.
- [textLayoutFragmentForPosition:](nstextlayoutmanager/textlayoutfragment%28for_%29-4dhrx.md): Returns the text layout fragment at the position you specify in the text container.
- [ensureLayoutForBounds:](nstextlayoutmanager/ensurelayout%28for_%29-6ptsj.md): Performs the layout for filling the bounds you specify inside the last text container.
- [ensureLayoutForRange:](nstextlayoutmanager/ensurelayout%28for_%29-3duae.md): Performs the layout for specified text range.
- [enumerateTextLayoutFragmentsFromLocation:options:usingBlock:](nstextlayoutmanager/enumeratetextlayoutfragments%28from_options_using_%29.md): Enumerates the text layout fragments starting at the specified location.
- [NSTextLayoutManagerSegmentType](nstextlayoutmanager/segmenttype.md): Values that describe the rendering of selection boundaries.
- [NSTextLayoutManagerSegmentOptions](nstextlayoutmanager/segmentoptions.md): Values that describe where and how the framework extends segments of a selection.

### Instance Properties

- [resolvesNaturalAlignmentWithBaseWritingDirection](nstextlayoutmanager/resolvesnaturalalignmentwithbasewritingdirection.md): Specifies the behavior for resolving [NSTextAlignmentNatural](nstextalignment/natural.md) to the visual alignment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSTextSelectionDataSource](nstextselectiondatasource.md)

## See Also

### Layout

- [Using TextKit 2 to interact with text](using-textkit-2-to-interact-with-text.md): Interact with text by managing text selection and inserting custom text elements.
- [Display text with a custom layout](display-text-with-a-custom-layout.md): Lay out text in a custom-shaped container and apply glyph substitutions.
- [Managing viewport layout and attachment reuse in text views](managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass.md): Customize layout and preserve attachment views in your text view subclass.
- [NSTextContainer](nstextcontainer.md): A region where text layout occurs.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextLineFragment](nstextlinefragment.md): A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.
- [NSTextViewportLayoutController](nstextviewportlayoutcontroller.md): Manages the layout process inside the viewport interacting with its delegate.
- [NSTextViewportRenderingSurface](nstextviewportrenderingsurface.md): A protocol that identifies a view or layer as a drawable element for a text layout fragment.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.
