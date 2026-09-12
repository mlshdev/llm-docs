> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanagerdelegate](https://developer.apple.com/documentation/appkit/nstextlayoutmanagerdelegate)

# NSTextLayoutManagerDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

Optional methods that delegates implement to respond to layout changes.

## Declaration

```swift
protocol NSTextLayoutManagerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Optional methods that delegates implement to respond to layout changes.

## Topics

### Responding to layout changes

- [textLayoutManager(\_:renderingAttributesForLink:at:defaultAttributes:)](nstextlayoutmanagerdelegate/textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [textLayoutManager(\_:shouldBreakLineBefore:hyphenating:)](nstextlayoutmanagerdelegate/textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): Invoked while determining the soft line break point.
- [textLayoutManager(\_:textLayoutFragmentFor:in:)](nstextlayoutmanagerdelegate/textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): Returns a text layout fragment for the specified location in the text element.

### Instance Methods

- [textLayoutManager(\_:cacheTextAttachmentViewProvider:for:)](nstextlayoutmanagerdelegate/textlayoutmanager%28__cachetextattachmentviewprovider_for_%29.md): Notifies the delegate that a view provider associated with a text attachment is about to be invalidated.
- [textLayoutManager(\_:retrieveCachedTextAttachmentViewProviderFor:)](nstextlayoutmanagerdelegate/textlayoutmanager%28__retrievecachedtextattachmentviewproviderfor_%29.md): Returns a cached `NSTextAttachmentViewProvider` to be associated with a particular attachment.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Managing the layout process

- [delegate](nstextlayoutmanager/delegate.md): The delegate for the text layout manager object.

# NSTextLayoutManagerDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

Optional methods that delegates implement to respond to layout changes.

## Declaration

```objectivec
@protocol NSTextLayoutManagerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Optional methods that delegates implement to respond to layout changes.

## Topics

### Responding to layout changes

- [textLayoutManager:renderingAttributesForLink:atLocation:defaultAttributes:](nstextlayoutmanagerdelegate/textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [textLayoutManager:shouldBreakLineBeforeLocation:hyphenating:](nstextlayoutmanagerdelegate/textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): Invoked while determining the soft line break point.
- [textLayoutManager:textLayoutFragmentForLocation:inTextElement:](nstextlayoutmanagerdelegate/textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): Returns a text layout fragment for the specified location in the text element.

### Instance Methods

- [textLayoutManager:cacheTextAttachmentViewProvider:forTextAttachment:](nstextlayoutmanagerdelegate/textlayoutmanager%28__cachetextattachmentviewprovider_for_%29.md): Notifies the delegate that a view provider associated with a text attachment is about to be invalidated.
- [textLayoutManager:retrieveCachedTextAttachmentViewProviderForTextAttachment:](nstextlayoutmanagerdelegate/textlayoutmanager%28__retrievecachedtextattachmentviewproviderfor_%29.md): Returns a cached `NSTextAttachmentViewProvider` to be associated with a particular attachment.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Managing the layout process

- [delegate](nstextlayoutmanager/delegate.md): The delegate for the text layout manager object.
