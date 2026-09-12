> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:headerviewcontrollerforitem:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:headerviewcontrollerforitem:))

# browser(\_:headerViewControllerForItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate for a controller that provides a header view for the specified column item.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, headerViewControllerForItem item: Any?) -> NSViewController?
```

## Parameters

- `browser`: The browser.
- `item`: The column item.

<a id="return-value"></a>

## Return Value

A view controller that provides a header view, or `nil` to omit the header view.

<a id="Discussion"></a>

## Discussion

The returned controller’s represented object will be set to the column item. This method is called only if the delegate implements the item data source methods.

## See Also

### Accessing Components

- [browser(\_:child:ofItem:)](browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser(\_:isLeafItem:)](browser%28__isleafitem_%29.md): Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).
- [browser(\_:shouldEditItem:)](browser%28__shouldedititem_%29.md): Asks the delegate whether the browser may start an editing session for the specified item.
- [browser(\_:objectValueForItem:)](browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [browser(\_:setObjectValue:forItem:)](browser%28__setobjectvalue_foritem_%29.md): Sets the object that the specified item uses to draw its contents to the specified object.
- [rootItem(for:)](rootitem%28for_%29.md): Asks the delegate to return the root item of the browser.
- [browser(\_:previewViewControllerForLeafItem:)](browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.

# browser:headerViewControllerForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate for a controller that provides a header view for the specified column item.

## Declaration

```objectivec
- (NSViewController *) browser:(NSBrowser *) browser headerViewControllerForItem:(id) item;
```

## Parameters

- `browser`: The browser.
- `item`: The column item.

<a id="return-value"></a>

## Return Value

A view controller that provides a header view, or `nil` to omit the header view.

<a id="Discussion"></a>

## Discussion

The returned controller’s represented object will be set to the column item. This method is called only if the delegate implements the item data source methods.

## See Also

### Accessing Components

- [browser:child:ofItem:](browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser:isLeafItem:](browser%28__isleafitem_%29.md): Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).
- [browser:shouldEditItem:](browser%28__shouldedititem_%29.md): Asks the delegate whether the browser may start an editing session for the specified item.
- [browser:objectValueForItem:](browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [browser:setObjectValue:forItem:](browser%28__setobjectvalue_foritem_%29.md): Sets the object that the specified item uses to draw its contents to the specified object.
- [rootItemForBrowser:](rootitem%28for_%29.md): Asks the delegate to return the root item of the browser.
- [browser:previewViewControllerForLeafItem:](browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
