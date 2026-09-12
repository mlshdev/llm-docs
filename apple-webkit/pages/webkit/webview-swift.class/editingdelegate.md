> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/editingdelegate](https://developer.apple.com/documentation/webkit/webview-swift.class/editingdelegate)

# editingDelegate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s editing delegate.

## Declaration

```swift
unowned(unsafe) var editingDelegate: (any WebEditingDelegate)! { get set }
```

## See Also

### Getting and Setting Document Editing Attributes

- [isEditable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editableDOMRange(for:)](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

# editingDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s editing delegate.

## Declaration

```objectivec
@property (nonatomic, assign) id<WebEditingDelegate> editingDelegate;
```

## See Also

### Getting and Setting Document Editing Attributes

- [editable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editableDOMRangeForPoint:](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.
