> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:contextmenuitemsforelement:defaultmenuitems:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:contextmenuitemsforelement:defaultmenuitems:))

# webView(\_:contextMenuItemsForElement:defaultMenuItems:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns menu items to display in an element’s contextual menu.

## Declaration

```swift
optional func webView(_ sender: WebView!, contextMenuItemsForElement element: [AnyHashable : Any]!, defaultMenuItems: [Any]!) -> [Any]!
```

## Parameters

- `sender`: The web view that sent the message.
- `element`: A dictionary that describes the element that was clicked. See “Constants” in [WebView](../webview-swift.class.md) for information about the key-value pairs in this dictionary.
- `defaultMenuItems`: The menu items included by default in the element’s contextual menu. See [Menu Item Tags](../menu-item-tags.md) for values you can use to differentiate among specific menu items.

<a id="return-value"></a>

## Return Value

An array of menu items to display in the element’s contextual menu.

<a id="Discussion"></a>

## Discussion

This method is invoked every time the user clicks the right mouse button, or control-clicks, on an element to reveal a contextual menu. The receiver typically returns a modified copy of the default menu items dictionary, adding and removing menu items as appropriate for this type of element. You can use this mechanism to remove items that are not appropriate for a particular environment or task, such as saving files to the desktop in a web kiosk. You do not need to set the actions and targets of the default items.

## See Also

### Handling Mouse Events

- [webView(\_:mouseDidMoveOverElement:modifierFlags:)](webview%28__mousedidmoveoverelement_modifierflags_%29.md): Deprecated. Updates information about the element the user is mousing over.

# webView:contextMenuItemsForElement:defaultMenuItems: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns menu items to display in an element’s contextual menu.

## Declaration

```objectivec
- (NSArray *) webView:(WebView *) sender contextMenuItemsForElement:(NSDictionary *) element defaultMenuItems:(NSArray *) defaultMenuItems;
```

## Parameters

- `sender`: The web view that sent the message.
- `element`: A dictionary that describes the element that was clicked. See “Constants” in [WebView](../webview-swift.class.md) for information about the key-value pairs in this dictionary.
- `defaultMenuItems`: The menu items included by default in the element’s contextual menu. See [Menu Item Tags](../menu-item-tags.md) for values you can use to differentiate among specific menu items.

<a id="return-value"></a>

## Return Value

An array of menu items to display in the element’s contextual menu.

<a id="Discussion"></a>

## Discussion

This method is invoked every time the user clicks the right mouse button, or control-clicks, on an element to reveal a contextual menu. The receiver typically returns a modified copy of the default menu items dictionary, adding and removing menu items as appropriate for this type of element. You can use this mechanism to remove items that are not appropriate for a particular environment or task, such as saving files to the desktop in a web kiosk. You do not need to set the actions and targets of the default items.

## See Also

### Handling Mouse Events

- [webView:mouseDidMoveOverElement:modifierFlags:](webview%28__mousedidmoveoverelement_modifierflags_%29.md): Deprecated. Updates information about the element the user is mousing over.
