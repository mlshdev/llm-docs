> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/imagebrowser(_:cellwasrightclickedat:with:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser(_:cellwasrightclickedat:with:))

# imageBrowser(\_:cellWasRightClickedAt:with:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Performs custom tasks when the user right-clicks an item in the image browser view.

## Declaration

```swift
func imageBrowser(_ aBrowser: IKImageBrowserView!, cellWasRightClickedAt index: Int, with event: NSEvent!)
```

## Parameters

- `aBrowser`: An image browser view.
- `index`: The index of the cell.
- `event`: The event that invoked the method.

<a id="Discussion"></a>

## Discussion

This method signals that the user either right-clicked an item in the browser or left-clicked the item with the Alt key pressed. You can implement this method if you want to perform custom tasks at that time.

# imageBrowser:cellWasRightClickedAtIndex:withEvent: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Performs custom tasks when the user right-clicks an item in the image browser view.

## Declaration

```objectivec
- (void) imageBrowser:(IKImageBrowserView *) aBrowser cellWasRightClickedAtIndex:(NSUInteger) index withEvent:(NSEvent *) event;
```

## Parameters

- `aBrowser`: An image browser view.
- `index`: The index of the cell.
- `event`: The event that invoked the method.

<a id="Discussion"></a>

## Discussion

This method signals that the user either right-clicked an item in the browser or left-clicked the item with the Alt key pressed. You can implement this method if you want to perform custom tasks at that time.
