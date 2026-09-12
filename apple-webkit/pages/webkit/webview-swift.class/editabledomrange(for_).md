> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/editabledomrange(for:)](https://developer.apple.com/documentation/webkit/webview-swift.class/editabledomrange(for:))

# editableDOMRange(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the editable DOM object located at a given point.

## Declaration

```swift
func editableDOMRange(for point: NSPoint) -> DOMRange!
```

## Parameters

- `point`: The location of the editable DOM object.

<a id="return-value"></a>

## Return Value

A single range object of the editable DOM object located at `point` in the receiver’s coordinates.

## See Also

### Related Documentation

- [setSelectedDOMRange(\_:affinity:)](setselecteddomrange%28__affinity_%29.md): Selects a range of nodes.
- [selectedDOMRange](selecteddomrange.md): The range of the current selection.

### Getting and Setting Document Editing Attributes

- [isEditable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.

# editableDOMRangeForPoint: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the editable DOM object located at a given point.

## Declaration

```objectivec
- (DOMRange *) editableDOMRangeForPoint:(NSPoint) point;
```

## Parameters

- `point`: The location of the editable DOM object.

<a id="return-value"></a>

## Return Value

A single range object of the editable DOM object located at `point` in the receiver’s coordinates.

## See Also

### Related Documentation

- [setSelectedDOMRange:affinity:](setselecteddomrange%28__affinity_%29.md): Selects a range of nodes.
- [selectedDOMRange](selecteddomrange.md): The range of the current selection.

### Getting and Setting Document Editing Attributes

- [editable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
