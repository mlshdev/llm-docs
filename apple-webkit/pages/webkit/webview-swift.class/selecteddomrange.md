> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/selecteddomrange](https://developer.apple.com/documentation/webkit/webview-swift.class/selecteddomrange)

# selectedDOMRange (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The range of the current selection.

## Declaration

```swift
var selectedDOMRange: DOMRange! { get }
```

<a id="Discussion"></a>

## Discussion

`nil` if nothing is selected.

## See Also

### Related Documentation

- [editableDOMRange(for:)](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

### Selecting Content in the Document

- [setSelectedDOMRange(\_:affinity:)](setselecteddomrange%28__affinity_%29.md): Selects a range of nodes.
- [selectionAffinity](selectionaffinity.md): The current selection affinity.

# selectedDOMRange (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The range of the current selection.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) DOMRange * selectedDOMRange;
```

<a id="Discussion"></a>

## Discussion

`nil` if nothing is selected.

## See Also

### Related Documentation

- [editableDOMRangeForPoint:](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

### Selecting Content in the Document

- [setSelectedDOMRange:affinity:](setselecteddomrange%28__affinity_%29.md): Selects a range of nodes.
- [selectionAffinity](selectionaffinity.md): The current selection affinity.
