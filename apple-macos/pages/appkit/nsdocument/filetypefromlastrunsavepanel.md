> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/filetypefromlastrunsavepanel](https://developer.apple.com/documentation/appkit/nsdocument/filetypefromlastrunsavepanel)

# fileTypeFromLastRunSavePanel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The file type that was last selected in the Save panel.

## Declaration

```swift
nonisolated var fileTypeFromLastRunSavePanel: String? { get }
```

<a id="Discussion"></a>

## Discussion

This type is primarily used by the [save(\_:)](save%28__%29.md), [saveAs(\_:)](saveas%28__%29.md), and [saveTo(\_:)](saveto%28__%29.md) methods to determine the type the user chose after the Save panel has been run. The string corresponds to the name of the document type as it is specified in the app’s `Info.plist` file.

## See Also

### Presenting a Save Panel

- [runModalSavePanel(for:delegate:didSave:contextInfo:)](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md): Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.
- [prepareSavePanel(\_:)](preparesavepanel%28__%29.md): Tells the document to customize the specified Save panel.
- [shouldRunSavePanelWithAccessoryView](shouldrunsavepanelwithaccessoryview.md): Deprecated. A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.
- [fileNameExtensionWasHiddenInLastRunSavePanel](filenameextensionwashiddeninlastrunsavepanel.md): A Boolean value that indicates whether the user chose to hide the document’s filename extension.

# fileTypeFromLastRunSavePanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The file type that was last selected in the Save panel.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * fileTypeFromLastRunSavePanel;
```

<a id="Discussion"></a>

## Discussion

This type is primarily used by the [saveDocument:](save%28__%29.md), [saveDocumentAs:](saveas%28__%29.md), and [saveDocumentTo:](saveto%28__%29.md) methods to determine the type the user chose after the Save panel has been run. The string corresponds to the name of the document type as it is specified in the app’s `Info.plist` file.

## See Also

### Presenting a Save Panel

- [runModalSavePanelForSaveOperation:delegate:didSaveSelector:contextInfo:](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md): Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.
- [prepareSavePanel:](preparesavepanel%28__%29.md): Tells the document to customize the specified Save panel.
- [shouldRunSavePanelWithAccessoryView](shouldrunsavepanelwithaccessoryview.md): Deprecated. A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.
- [fileNameExtensionWasHiddenInLastRunSavePanel](filenameextensionwashiddeninlastrunsavepanel.md): A Boolean value that indicates whether the user chose to hide the document’s filename extension.
