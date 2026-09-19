> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanagerdidendselection(_:)

# selectionManagerDidEndSelection(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Tells the delegate that a selection gesture has ended.

## Declaration

```swift
optional func selectionManagerDidEndSelection(_ selectionManager: NSTextSelectionManager)
```

## Parameters

- `selectionManager`: The selection manager that ended selection.

<a id="discussion"></a>

## Discussion

The selection manager calls this method after finishing processing a selection gesture, such as when the user releases the mouse button.

# selectionManagerDidEndSelection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Tells the delegate that a selection gesture has ended.

## Declaration

```objectivec
- (void) selectionManagerDidEndSelection:(NSTextSelectionManager *) selectionManager;
```

## Parameters

- `selectionManager`: The selection manager that ended selection.

<a id="discussion"></a>

## Discussion

The selection manager calls this method after finishing processing a selection gesture, such as when the user releases the mouse button.
