> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/iseditable](https://developer.apple.com/documentation/webkit/webview-swift.class/iseditable)

# isEditable (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user is allowed to edit the document.

## Declaration

```swift
var isEditable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver allows the user to edit the HTML document, [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

You can change the receiver’s document programmatically regardless of this setting.

Normally, an HTML document is not editable unless the elements within the document are editable. This property provides a low-level way to make the contents of a `WebView` object editable without altering the document or DOM structure.

## See Also

### Getting and Setting Document Editing Attributes

- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRange(for:)](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

# editable (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user is allowed to edit the document.

## Declaration

```objectivec
@property (nonatomic, getter=isEditable) BOOL editable;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver allows the user to edit the HTML document, [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

You can change the receiver’s document programmatically regardless of this setting.

Normally, an HTML document is not editable unless the elements within the document are editable. This property provides a low-level way to make the contents of a `WebView` object editable without altering the document or DOM structure.

## See Also

### Getting and Setting Document Editing Attributes

- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [spellCheckerDocumentTag](spellcheckerdocumenttag.md): The spell-checker document tag for this document.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRangeForPoint:](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.
