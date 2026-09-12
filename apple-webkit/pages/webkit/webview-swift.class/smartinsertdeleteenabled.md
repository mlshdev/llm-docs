> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/smartinsertdeleteenabled](https://developer.apple.com/documentation/webkit/webview-swift.class/smartinsertdeleteenabled)

# smartInsertDeleteEnabled (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether smart-space insertion and deletion is enabled.

## Declaration

```swift
var smartInsertDeleteEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver inserts or deletes space around selected words so as to preserve proper spacing and punctuation. [false](https://developer.apple.com/documentation/swift/false) if it inserts and deletes exactly what’s selected.

## See Also

### Getting and Setting Document Editing Attributes

- [isEditable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRange(for:)](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

# smartInsertDeleteEnabled (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether smart-space insertion and deletion is enabled.

## Declaration

```objectivec
@property (nonatomic) BOOL smartInsertDeleteEnabled;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver inserts or deletes space around selected words so as to preserve proper spacing and punctuation. [false](https://developer.apple.com/documentation/swift/false) if it inserts and deletes exactly what’s selected.

## See Also

### Getting and Setting Document Editing Attributes

- [editable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRangeForPoint:](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.
