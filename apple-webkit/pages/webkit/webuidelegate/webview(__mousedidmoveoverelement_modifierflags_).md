> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:mousedidmoveoverelement:modifierflags:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:mousedidmoveoverelement:modifierflags:))

# webView(\_:mouseDidMoveOverElement:modifierFlags:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Updates information about the element the user is mousing over.

## Declaration

```swift
optional func webView(_ sender: WebView!, mouseDidMoveOverElement elementInformation: [AnyHashable : Any]!, modifierFlags: Int)
```

## Parameters

- `sender`: The web view that sent the message.
- `elementInformation`: A dictionary that describes the element under the mouse, or `nil`. See “Constants” in [WebView](../webview-swift.class.md) for information about the key-value pairs in this dictionary.
- `modifierFlags`: An integer bit field that indicates the modifier keys in effect during the event. See “Modifier Flags” in [NSEvent](https://developer.apple.com/documentation/appkit/nsevent) for information about possible modifiers. Note that this parameter was changed from an `unsigned int` to an `NSUInteger` in OS X v10.5.

## See Also

### Handling Mouse Events

- [webView(\_:contextMenuItemsForElement:defaultMenuItems:)](webview%28__contextmenuitemsforelement_defaultmenuitems_%29.md): Deprecated. Returns menu items to display in an element’s contextual menu.

# webView:mouseDidMoveOverElement:modifierFlags: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Updates information about the element the user is mousing over.

## Declaration

```objectivec
- (void) webView:(WebView *) sender mouseDidMoveOverElement:(NSDictionary *) elementInformation modifierFlags:(NSUInteger) modifierFlags;
```

## Parameters

- `sender`: The web view that sent the message.
- `elementInformation`: A dictionary that describes the element under the mouse, or `nil`. See “Constants” in [WebView](../webview-swift.class.md) for information about the key-value pairs in this dictionary.
- `modifierFlags`: An integer bit field that indicates the modifier keys in effect during the event. See “Modifier Flags” in [NSEvent](https://developer.apple.com/documentation/appkit/nsevent) for information about possible modifiers. Note that this parameter was changed from an `unsigned int` to an `NSUInteger` in OS X v10.5.

## See Also

### Handling Mouse Events

- [webView:contextMenuItemsForElement:defaultMenuItems:](webview%28__contextmenuitemsforelement_defaultmenuitems_%29.md): Deprecated. Returns menu items to display in an element’s contextual menu.
