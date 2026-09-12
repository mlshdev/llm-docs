> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:shouldedititem:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:shouldedititem:))

# browser(\_:shouldEditItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate whether the browser may start an editing session for the specified item.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, shouldEditItem item: Any?) -> Bool
```

## Parameters

- `browser`: The browser.
- `item`: The item to edit.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the editing session to begin; [false](https://developer.apple.com/documentation/swift/false) to disallow it.

## See Also

### Accessing Components

- [browser(\_:child:ofItem:)](browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser(\_:isLeafItem:)](browser%28__isleafitem_%29.md): Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).
- [browser(\_:objectValueForItem:)](browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [browser(\_:setObjectValue:forItem:)](browser%28__setobjectvalue_foritem_%29.md): Sets the object that the specified item uses to draw its contents to the specified object.
- [rootItem(for:)](rootitem%28for_%29.md): Asks the delegate to return the root item of the browser.
- [browser(\_:previewViewControllerForLeafItem:)](browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
- [browser(\_:headerViewControllerForItem:)](browser%28__headerviewcontrollerforitem_%29.md): Asks the delegate for a controller that provides a header view for the specified column item.

# browser:shouldEditItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate whether the browser may start an editing session for the specified item.

## Declaration

```objectivec
- (BOOL) browser:(NSBrowser *) browser shouldEditItem:(id) item;
```

## Parameters

- `browser`: The browser.
- `item`: The item to edit.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the editing session to begin; [false](https://developer.apple.com/documentation/swift/false) to disallow it.

## See Also

### Accessing Components

- [browser:child:ofItem:](browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser:isLeafItem:](browser%28__isleafitem_%29.md): Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).
- [browser:objectValueForItem:](browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [browser:setObjectValue:forItem:](browser%28__setobjectvalue_foritem_%29.md): Sets the object that the specified item uses to draw its contents to the specified object.
- [rootItemForBrowser:](rootitem%28for_%29.md): Asks the delegate to return the root item of the browser.
- [browser:previewViewControllerForLeafItem:](browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
- [browser:headerViewControllerForItem:](browser%28__headerviewcontrollerforitem_%29.md): Asks the delegate for a controller that provides a header view for the specified column item.
