> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:isleafitem:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:isleafitem:))

# browser(\_:isLeafItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, isLeafItem item: Any?) -> Bool
```

## Parameters

- `browser`: The browser.
- `item`: The item to be checked.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified item is a leaf item; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing Components

- [browser(\_:child:ofItem:)](browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser(\_:shouldEditItem:)](browser%28__shouldedititem_%29.md): Asks the delegate whether the browser may start an editing session for the specified item.
- [browser(\_:objectValueForItem:)](browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [browser(\_:setObjectValue:forItem:)](browser%28__setobjectvalue_foritem_%29.md): Sets the object that the specified item uses to draw its contents to the specified object.
- [rootItem(for:)](rootitem%28for_%29.md): Asks the delegate to return the root item of the browser.
- [browser(\_:previewViewControllerForLeafItem:)](browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
- [browser(\_:headerViewControllerForItem:)](browser%28__headerviewcontrollerforitem_%29.md): Asks the delegate for a controller that provides a header view for the specified column item.

# browser:isLeafItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate whether the specified item is a leaf item (an item that cannot be expanded).

## Declaration

```objectivec
- (BOOL) browser:(NSBrowser *) browser isLeafItem:(id) item;
```

## Parameters

- `browser`: The browser.
- `item`: The item to be checked.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified item is a leaf item; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing Components

- [browser:child:ofItem:](browser%28__child_ofitem_%29.md): Asks the delegate to return the child of the specified item at the specified index.
- [browser:shouldEditItem:](browser%28__shouldedititem_%29.md): Asks the delegate whether the browser may start an editing session for the specified item.
- [browser:objectValueForItem:](browser%28__objectvalueforitem_%29.md): Returns the object that the specified item uses to draw its contents.
- [browser:setObjectValue:forItem:](browser%28__setobjectvalue_foritem_%29.md): Sets the object that the specified item uses to draw its contents to the specified object.
- [rootItemForBrowser:](rootitem%28for_%29.md): Asks the delegate to return the root item of the browser.
- [browser:previewViewControllerForLeafItem:](browser%28__previewviewcontrollerforleafitem_%29.md): Asks the delegate for a controller that provides a preview column for the specified leaf item.
- [browser:headerViewControllerForItem:](browser%28__headerviewcontrollerforitem_%29.md): Asks the delegate for a controller that provides a header view for the specified column item.
