> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/setdraggingsourceoperationmask(_:forlocal:)](https://developer.apple.com/documentation/appkit/nsbrowser/setdraggingsourceoperationmask(_:forlocal:))

# setDraggingSourceOperationMask(\_:forLocal:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies the drag-operation mask for dragging operations with local or external destinations.

## Declaration

```swift
func setDraggingSourceOperationMask(_ mask: NSDragOperation, forLocal isLocal: Bool)
```

## Parameters

- `mask`: Dragging operation mask to use for either local or external drag operations, as specified by localDestination.
- `isLocal`: Indicates the location of the dragging operation’s destination object:

  [true](https://developer.apple.com/documentation/swift/true) for this application; [false](https://developer.apple.com/documentation/swift/false) for another application.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Do not override this method.

## See Also

### Dragging

- [canDragRows(with:inColumn:with:)](candragrows%28with_incolumn_with_%29.md): Indicates whether the browser can attempt to initiate a drag of the given rows for the given event.
- [draggingImageForRows(with:inColumn:with:offset:)](draggingimageforrows%28with_incolumn_with_offset_%29.md): Provides an image to represent dragged rows during a drag operation on the browser.

# setDraggingSourceOperationMask:forLocal: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies the drag-operation mask for dragging operations with local or external destinations.

## Declaration

```objectivec
- (void) setDraggingSourceOperationMask:(NSDragOperation) mask forLocal:(BOOL) isLocal;
```

## Parameters

- `mask`: Dragging operation mask to use for either local or external drag operations, as specified by localDestination.
- `isLocal`: Indicates the location of the dragging operation’s destination object:

  [true](https://developer.apple.com/documentation/swift/true) for this application; [false](https://developer.apple.com/documentation/swift/false) for another application.

<a id="Discussion"></a>

## Discussion

> **Important**

>  Do not override this method.

## See Also

### Dragging

- [canDragRowsWithIndexes:inColumn:withEvent:](candragrows%28with_incolumn_with_%29.md): Indicates whether the browser can attempt to initiate a drag of the given rows for the given event.
- [draggingImageForRowsWithIndexes:inColumn:withEvent:offset:](draggingimageforrows%28with_incolumn_with_offset_%29.md): Provides an image to represent dragged rows during a drag operation on the browser.
