> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/setselecteddomrange(_:affinity:)](https://developer.apple.com/documentation/webkit/webview-swift.class/setselecteddomrange(_:affinity:))

# setSelectedDOMRange(\_:affinity:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects a range of nodes.

## Declaration

```swift
func setSelectedDOMRange(_ range: DOMRange!, affinity selectionAffinity: NSSelectionAffinity)
```

## Parameters

- `range`: The range of nodes to select. If `range` is `nil`, the current selection is cleared. This method raises a `DOMRangeExcepton` if the range has been detached or refers to nodes not displayed by the receiver.
- `selectionAffinity`: See the [selectionAffinity](selectionaffinity.md) property for information on selection affinity.

## See Also

### Related Documentation

- [editableDOMRange(for:)](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

### Selecting Content in the Document

- [selectedDOMRange](selecteddomrange.md): The range of the current selection.
- [selectionAffinity](selectionaffinity.md): The current selection affinity.

# setSelectedDOMRange:affinity: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects a range of nodes.

## Declaration

```objectivec
- (void) setSelectedDOMRange:(DOMRange *) range affinity:(NSSelectionAffinity) selectionAffinity;
```

## Parameters

- `range`: The range of nodes to select. If `range` is `nil`, the current selection is cleared. This method raises a `DOMRangeExcepton` if the range has been detached or refers to nodes not displayed by the receiver.
- `selectionAffinity`: See the [selectionAffinity](selectionaffinity.md) property for information on selection affinity.

## See Also

### Related Documentation

- [editableDOMRangeForPoint:](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

### Selecting Content in the Document

- [selectedDOMRange](selecteddomrange.md): The range of the current selection.
- [selectionAffinity](selectionaffinity.md): The current selection affinity.
