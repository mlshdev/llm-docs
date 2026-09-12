> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/iscontinuousspellcheckingenabled](https://developer.apple.com/documentation/webkit/webview-swift.class/iscontinuousspellcheckingenabled)

# isContinuousSpellCheckingEnabled (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the web view has continuous spell-checking enabled.

## Declaration

```swift
var isContinuousSpellCheckingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the object has continuous spell-checking enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting and Setting Document Editing Attributes

- [isEditable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRange(for:)](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

# continuousSpellCheckingEnabled (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the web view has continuous spell-checking enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isContinuousSpellCheckingEnabled) BOOL continuousSpellCheckingEnabled;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the object has continuous spell-checking enabled; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting and Setting Document Editing Attributes

- [editable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRangeForPoint:](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.
