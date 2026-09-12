> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/undomanager](https://developer.apple.com/documentation/webkit/webview-swift.class/undomanager)

# undoManager (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s undo manager.

## Declaration

```swift
var undoManager: UndoManager! { get }
```

## See Also

### Getting and Setting Document Editing Attributes

- [isEditable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRange(for:)](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

# undoManager (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s undo manager.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSUndoManager * undoManager;
```

## See Also

### Getting and Setting Document Editing Attributes

- [editable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRangeForPoint:](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.
