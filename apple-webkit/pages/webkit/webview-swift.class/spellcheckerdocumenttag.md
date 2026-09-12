> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/spellcheckerdocumenttag](https://developer.apple.com/documentation/webkit/webview-swift.class/spellcheckerdocumenttag)

# spellCheckerDocumentTag (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The spell-checker document tag for this document.

## Declaration

```swift
var spellCheckerDocumentTag: Int { get }
```

<a id="Discussion"></a>

## Discussion

A tag identifying the receiver’s text as a document for the spell-checker server. See the [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker) and NSSpellServer class specifications for more information on how this tag is used.

## See Also

### Related Documentation

- [spellCheckerDocumentTag](https://developer.apple.com/documentation/appkit/nstextview/spellcheckerdocumenttag): A tag identifying the text view’s text as a document for the spell checker server.

### Getting and Setting Document Editing Attributes

- [isEditable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [isContinuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRange(for:)](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.

# spellCheckerDocumentTag (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS

The spell-checker document tag for this document.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger spellCheckerDocumentTag;
```

<a id="Discussion"></a>

## Discussion

A tag identifying the receiver’s text as a document for the spell-checker server. See the [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker) and NSSpellServer class specifications for more information on how this tag is used.

## See Also

### Related Documentation

- [spellCheckerDocumentTag](https://developer.apple.com/documentation/appkit/nstextview/spellcheckerdocumenttag): A tag identifying the text view’s text as a document for the spell checker server.

### Getting and Setting Document Editing Attributes

- [editable](iseditable.md): A Boolean that indicates whether the user is allowed to edit the document.
- [smartInsertDeleteEnabled](smartinsertdeleteenabled.md): A Boolean that indicates whether smart-space insertion and deletion is enabled.
- [continuousSpellCheckingEnabled](iscontinuousspellcheckingenabled.md): A Boolean that indicates whether the web view has continuous spell-checking enabled.
- [undoManager](undomanager.md): The receiver’s undo manager.
- [editingDelegate](editingdelegate.md): The receiver’s editing delegate.
- [editableDOMRangeForPoint:](editabledomrange%28for_%29.md): Returns the editable DOM object located at a given point.
