> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/imagebrowser(_:writeitemsat:to:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser(_:writeitemsat:to:))

# imageBrowser(\_:writeItemsAt:to:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Signals that a drag should begin.

## Declaration

```swift
func imageBrowser(_ aBrowser: IKImageBrowserView!, writeItemsAt itemIndexes: IndexSet!, to pasteboard: NSPasteboard!) -> Int
```

## Parameters

- `aBrowser`: An image browser view.
- `itemIndexes`: The indexes of the items that should be dragged.
- `pasteboard`: The pasteboard to copy the items to.

<a id="return-value"></a>

## Return Value

The number of items written to the pasteboard.

<a id="Discussion"></a>

## Discussion

This method is optional. It is invoked after Image Kit determines that a drag should begin, but before the drag has been started.

# imageBrowser:writeItemsAtIndexes:toPasteboard: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Signals that a drag should begin.

## Declaration

```objectivec
- (NSUInteger) imageBrowser:(IKImageBrowserView *) aBrowser writeItemsAtIndexes:(NSIndexSet *) itemIndexes toPasteboard:(NSPasteboard *) pasteboard;
```

## Parameters

- `aBrowser`: An image browser view.
- `itemIndexes`: The indexes of the items that should be dragged.
- `pasteboard`: The pasteboard to copy the items to.

<a id="return-value"></a>

## Return Value

The number of items written to the pasteboard.

<a id="Discussion"></a>

## Discussion

This method is optional. It is invoked after Image Kit determines that a drag should begin, but before the drag has been started.
