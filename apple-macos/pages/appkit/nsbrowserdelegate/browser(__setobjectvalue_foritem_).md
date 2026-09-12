> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:setobjectvalue:foritem:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:setobjectvalue:foritem:))

# browser(\_:setObjectValue:forItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the object that the specified item uses to draw its contents to the specified object.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, setObjectValue object: Any?, forItem item: Any?)
```

## Parameters

- `browser`: The browser.
- `object`: The object to set.
- `item`: The item whose object is set.

## See Also

### Accessing Components

- [browser(\_:child:ofItem:)](browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser(\_:isLeafItem:)](browser%28__isleafitem_%29.md): Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).
- [browser(\_:shouldEditItem:)](browser%28__shouldedititem_%29.md): Asks the delegate whether the browser may start an editing session for the specified item.
- [browser(\_:objectValueForItem:)](browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [rootItem(for:)](rootitem%28for_%29.md): Asks the delegate to return the root item of the browser.
- [browser(\_:previewViewControllerForLeafItem:)](browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
- [browser(\_:headerViewControllerForItem:)](browser%28__headerviewcontrollerforitem_%29.md): Asks the delegate for a controller that provides a header view for the specified column item.

# browser:setObjectValue:forItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the object that the specified item uses to draw its contents to the specified object.

## Declaration

```objectivec
- (void) browser:(NSBrowser *) browser setObjectValue:(id) object forItem:(id) item;
```

## Parameters

- `browser`: The browser.
- `object`: The object to set.
- `item`: The item whose object is set.

## See Also

### Accessing Components

- [browser:child:ofItem:](browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser:isLeafItem:](browser%28__isleafitem_%29.md): Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).
- [browser:shouldEditItem:](browser%28__shouldedititem_%29.md): Asks the delegate whether the browser may start an editing session for the specified item.
- [browser:objectValueForItem:](browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [rootItemForBrowser:](rootitem%28for_%29.md): Asks the delegate to return the root item of the browser.
- [browser:previewViewControllerForLeafItem:](browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
- [browser:headerViewControllerForItem:](browser%28__headerviewcontrollerforitem_%29.md): Asks the delegate for a controller that provides a header view for the specified column item.
