> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdragsourceaction](https://developer.apple.com/documentation/webkit/webdragsourceaction)

# WebDragSourceAction (Swift)

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Actions that the source object of a drag operation can perform.

## Declaration

```swift
struct WebDragSourceAction
```

## Topics

### Constants

- [DHTML](webdragsourceaction/dhtml.md): Deprecated. Allows DHTML (such as JavaScript) in the source object to initiate a drag operation.
- [image](webdragsourceaction/image.md): Deprecated. Allows the user to drag an image in the source object.
- [link](webdragsourceaction/link.md): Deprecated. Allows the user to drag a link in the source object.
- [selection](webdragsourceaction/selection.md): Deprecated. Allows the user to drag a selection in the source object.
- [any](webdragsourceaction/any.md): Deprecated. Allows any defined action to occur.

### Initializers

- [init(rawValue:)](webdragsourceaction/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [Menu Item Tags](menu-item-tags.md): Tags that define the types of default menu items passed to the [webView(\_:contextMenuItemsForElement:defaultMenuItems:)](webuidelegate/webview%28__contextmenuitemsforelement_defaultmenuitems_%29.md) method.
- [WebDragDestinationAction](webdragdestinationaction.md): Deprecated. Actions that the destination object of a drag operation can perform.

# WebDragSourceAction (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Actions that the source object of a drag operation can perform.

## Declaration

```objectivec
enum WebDragSourceAction : NSUInteger;
```

## Topics

### Constants

- [WebDragSourceActionNone](webdragsourceaction/webdragsourceactionnone.md): Deprecated. No action.
- [WebDragSourceActionDHTML](webdragsourceaction/dhtml.md): Deprecated. Allows DHTML (such as JavaScript) in the source object to initiate a drag operation.
- [WebDragSourceActionImage](webdragsourceaction/image.md): Deprecated. Allows the user to drag an image in the source object.
- [WebDragSourceActionLink](webdragsourceaction/link.md): Deprecated. Allows the user to drag a link in the source object.
- [WebDragSourceActionSelection](webdragsourceaction/selection.md): Deprecated. Allows the user to drag a selection in the source object.
- [WebDragSourceActionAny](webdragsourceaction/any.md): Deprecated. Allows any defined action to occur.

## See Also

### Constants

- [Menu Item Tags](menu-item-tags.md): Tags that define the types of default menu items passed to the [webView:contextMenuItemsForElement:defaultMenuItems:](webuidelegate/webview%28__contextmenuitemsforelement_defaultmenuitems_%29.md) method.
- [WebDragDestinationAction](webdragdestinationaction.md): Deprecated. Actions that the destination object of a drag operation can perform.
