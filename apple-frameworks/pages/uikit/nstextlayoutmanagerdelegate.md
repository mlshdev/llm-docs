> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanagerdelegate](https://developer.apple.com/documentation/uikit/nstextlayoutmanagerdelegate)

# NSTextLayoutManagerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Optional methods that delegates implement to respond to layout changes.

## Declaration

```swift
protocol NSTextLayoutManagerDelegate : NSObjectProtocol
```

## Topics

### Responding to layout changes

- [textLayoutManager(\_:renderingAttributesForLink:at:defaultAttributes:)](nstextlayoutmanagerdelegate/textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): The method the framework calls to return a dictionary of attributes for rendering a link attribute name.
- [textLayoutManager(\_:shouldBreakLineBefore:hyphenating:)](nstextlayoutmanagerdelegate/textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): The method the framework calls to determine the soft line break point.
- [textLayoutManager(\_:textLayoutFragmentFor:in:)](nstextlayoutmanagerdelegate/textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): The method the framework calls to give the delegate an opportunity to return a custom text layout fragment.

### Reusing text attachment view providers

- [textLayoutManager(\_:cacheTextAttachmentViewProvider:for:)](nstextlayoutmanagerdelegate/textlayoutmanager%28__cachetextattachmentviewprovider_for_%29.md): Notifies the delegate that a view provider associated with a text attachment is about to be invalidated.
- [textLayoutManager(\_:retrieveCachedTextAttachmentViewProviderFor:)](nstextlayoutmanagerdelegate/textlayoutmanager%28__retrievecachedtextattachmentviewproviderfor_%29.md): Returns a cached `NSTextAttachmentViewProvider` to be associated with a particular attachment.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the layout process

- [delegate](nstextlayoutmanager/delegate.md): The delegate for the text layout manager object.

# NSTextLayoutManagerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Optional methods that delegates implement to respond to layout changes.

## Declaration

```objectivec
@protocol NSTextLayoutManagerDelegate <NSObject>
```

## Topics

### Responding to layout changes

- [textLayoutManager:renderingAttributesForLink:atLocation:defaultAttributes:](nstextlayoutmanagerdelegate/textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): The method the framework calls to return a dictionary of attributes for rendering a link attribute name.
- [textLayoutManager:shouldBreakLineBeforeLocation:hyphenating:](nstextlayoutmanagerdelegate/textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): The method the framework calls to determine the soft line break point.
- [textLayoutManager:textLayoutFragmentForLocation:inTextElement:](nstextlayoutmanagerdelegate/textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): The method the framework calls to give the delegate an opportunity to return a custom text layout fragment.

### Reusing text attachment view providers

- [textLayoutManager:cacheTextAttachmentViewProvider:forTextAttachment:](nstextlayoutmanagerdelegate/textlayoutmanager%28__cachetextattachmentviewprovider_for_%29.md): Notifies the delegate that a view provider associated with a text attachment is about to be invalidated.
- [textLayoutManager:retrieveCachedTextAttachmentViewProviderForTextAttachment:](nstextlayoutmanagerdelegate/textlayoutmanager%28__retrievecachedtextattachmentviewproviderfor_%29.md): Returns a cached `NSTextAttachmentViewProvider` to be associated with a particular attachment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the layout process

- [delegate](nstextlayoutmanager/delegate.md): The delegate for the text layout manager object.
