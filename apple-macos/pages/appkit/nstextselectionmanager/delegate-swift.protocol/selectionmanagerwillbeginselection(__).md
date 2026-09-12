> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanagerwillbeginselection(_:)](https://developer.apple.com/documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanagerwillbeginselection(_:))

# selectionManagerWillBeginSelection(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Tells the delegate that a selection gesture is about to begin.

## Declaration

```swift
optional func selectionManagerWillBeginSelection(_ selectionManager: NSTextSelectionManager)
```

## Parameters

- `selectionManager`: The selection manager that is about to begin selection.

<a id="discussion"></a>

## Discussion

The selection manager calls this method after `selectionManager:shouldBeginSelectionAtPoint:` returns `YES` (or if that method isn’t implemented) and before any selection changes are made.

# selectionManagerWillBeginSelection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Tells the delegate that a selection gesture is about to begin.

## Declaration

```objectivec
- (void) selectionManagerWillBeginSelection:(NSTextSelectionManager *) selectionManager;
```

## Parameters

- `selectionManager`: The selection manager that is about to begin selection.

<a id="discussion"></a>

## Discussion

The selection manager calls this method after `selectionManager:shouldBeginSelectionAtPoint:` returns `YES` (or if that method isn’t implemented) and before any selection changes are made.
