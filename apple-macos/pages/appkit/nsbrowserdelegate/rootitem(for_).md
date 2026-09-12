> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/rootitem(for:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/rootitem(for:))

# rootItem(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate to return the root item of the browser.

## Declaration

```swift
@MainActor optional func rootItem(for browser: NSBrowser) -> Any?
```

## Parameters

- `browser`: The browser.

<a id="return-value"></a>

## Return Value

The browser’s root item.

<a id="Discussion"></a>

## Discussion

By default, `nil` identifies the root item. This method can specify a different root item. To reload the previously set root item, call [loadColumnZero()](../nsbrowser/loadcolumnzero%28%29.md), and [rootItem(for:)](rootitem%28for_%29.md) will be called again.

## See Also

### Accessing Components

- [browser(\_:child:ofItem:)](browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser(\_:isLeafItem:)](browser%28__isleafitem_%29.md): Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).
- [browser(\_:shouldEditItem:)](browser%28__shouldedititem_%29.md): Asks the delegate whether the browser may start an editing session for the specified item.
- [browser(\_:objectValueForItem:)](browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [browser(\_:setObjectValue:forItem:)](browser%28__setobjectvalue_foritem_%29.md): Sets the object that the specified item uses to draw its contents to the specified object.
- [browser(\_:previewViewControllerForLeafItem:)](browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
- [browser(\_:headerViewControllerForItem:)](browser%28__headerviewcontrollerforitem_%29.md): Asks the delegate for a controller that provides a header view for the specified column item.

# rootItemForBrowser: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate to return the root item of the browser.

## Declaration

```objectivec
- (id) rootItemForBrowser:(NSBrowser *) browser;
```

## Parameters

- `browser`: The browser.

<a id="return-value"></a>

## Return Value

The browser’s root item.

<a id="Discussion"></a>

## Discussion

By default, `nil` identifies the root item. This method can specify a different root item. To reload the previously set root item, call [loadColumnZero](../nsbrowser/loadcolumnzero%28%29.md), and [rootItemForBrowser:](rootitem%28for_%29.md) will be called again.

## See Also

### Accessing Components

- [browser:child:ofItem:](browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser:isLeafItem:](browser%28__isleafitem_%29.md): Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).
- [browser:shouldEditItem:](browser%28__shouldedititem_%29.md): Asks the delegate whether the browser may start an editing session for the specified item.
- [browser:objectValueForItem:](browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [browser:setObjectValue:forItem:](browser%28__setobjectvalue_foritem_%29.md): Sets the object that the specified item uses to draw its contents to the specified object.
- [browser:previewViewControllerForLeafItem:](browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
- [browser:headerViewControllerForItem:](browser%28__headerviewcontrollerforitem_%29.md): Asks the delegate for a controller that provides a header view for the specified column item.
