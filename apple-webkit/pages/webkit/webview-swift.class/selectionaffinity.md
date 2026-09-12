> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/selectionaffinity](https://developer.apple.com/documentation/webkit/webview-swift.class/selectionaffinity)

# selectionAffinity (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The current selection affinity.

## Declaration

```swift
var selectionAffinity: NSSelectionAffinity { get }
```

<a id="Discussion"></a>

## Discussion

For example, if text wraps across line boundaries, the value of this property indicates whether or not the insertion point appears after the last charactrer of the first line or before the first character of the following line.

## See Also

### Selecting Content in the Document

- [selectedDOMRange](selecteddomrange.md): The range of the current selection.
- [setSelectedDOMRange(\_:affinity:)](setselecteddomrange%28__affinity_%29.md): Selects a range of nodes.

# selectionAffinity (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The current selection affinity.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSelectionAffinity selectionAffinity;
```

<a id="Discussion"></a>

## Discussion

For example, if text wraps across line boundaries, the value of this property indicates whether or not the insertion point appears after the last charactrer of the first line or before the first character of the following line.

## See Also

### Selecting Content in the Document

- [selectedDOMRange](selecteddomrange.md): The range of the current selection.
- [setSelectedDOMRange:affinity:](setselecteddomrange%28__affinity_%29.md): Selects a range of nodes.
