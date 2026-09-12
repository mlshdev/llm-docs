> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdragdestinationaction](https://developer.apple.com/documentation/webkit/webdragdestinationaction)

# WebDragDestinationAction (Swift)

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Actions that the destination object of a drag operation can perform.

## Declaration

```swift
struct WebDragDestinationAction
```

## Topics

### Constants

- [DHTML](webdragdestinationaction/dhtml.md): Deprecated. Allows DHTML (such as JavaScript) to handle the drag.
- [edit](webdragdestinationaction/edit.md): Deprecated. Allows editable documents to be changed by the drag operation.
- [load](webdragdestinationaction/load.md): Deprecated. Allows the drag operation to change the location.
- [any](webdragdestinationaction/any.md): Deprecated. Allows any defined action to occur.

### Initializers

- [init(rawValue:)](webdragdestinationaction/init%28rawvalue_%29.md): Deprecated.

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
- [WebDragSourceAction](webdragsourceaction.md): Deprecated. Actions that the source object of a drag operation can perform.

# WebDragDestinationAction (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Actions that the destination object of a drag operation can perform.

## Declaration

```objectivec
enum WebDragDestinationAction : NSUInteger;
```

## Topics

### Constants

- [WebDragDestinationActionNone](webdragdestinationaction/webdragdestinationactionnone.md): Deprecated. No action.
- [WebDragDestinationActionDHTML](webdragdestinationaction/dhtml.md): Deprecated. Allows DHTML (such as JavaScript) to handle the drag.
- [WebDragDestinationActionEdit](webdragdestinationaction/edit.md): Deprecated. Allows editable documents to be changed by the drag operation.
- [WebDragDestinationActionLoad](webdragdestinationaction/load.md): Deprecated. Allows the drag operation to change the location.
- [WebDragDestinationActionAny](webdragdestinationaction/any.md): Deprecated. Allows any defined action to occur.

## See Also

### Constants

- [Menu Item Tags](menu-item-tags.md): Tags that define the types of default menu items passed to the [webView:contextMenuItemsForElement:defaultMenuItems:](webuidelegate/webview%28__contextmenuitemsforelement_defaultmenuitems_%29.md) method.
- [WebDragSourceAction](webdragsourceaction.md): Deprecated. Actions that the source object of a drag operation can perform.
