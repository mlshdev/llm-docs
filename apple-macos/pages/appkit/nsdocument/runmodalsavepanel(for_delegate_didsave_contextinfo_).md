> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/runmodalsavepanel(for:delegate:didsave:contextinfo:)](https://developer.apple.com/documentation/appkit/nsdocument/runmodalsavepanel(for:delegate:didsave:contextinfo:))

# runModalSavePanel(for:delegate:didSave:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.

## Declaration

```swift
func runModalSavePanel(for saveOperation: NSDocument.SaveOperationType, delegate: Any?, didSave didSaveSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `saveOperation`: The type of save operation.
- `delegate`: The delegate to which the selector message is sent.
- `didSaveSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

When saving is completed, regardless of success or failure, or has been canceled, sends the message selected by `didSaveSelector` to the `delegate`, with `contextInfo` as the last argument. The method selected by `didSaveSelector` must have the same signature as:

```objc
- (void)document:(NSDocument *)doc didSave:(BOOL)didSave contextInfo:(void  *)contextInfo
```

Invoked from [save(withDelegate:didSave:contextInfo:)](save%28withdelegate_didsave_contextinfo_%29.md), and from the [saveAs(\_:)](saveas%28__%29.md) and [saveTo(\_:)](saveto%28__%29.md) action methods. The default implementation of this method first makes sure that any editor registered using the Cocoa Bindings [NSEditorRegistration](../nseditorregistration.md) informal protocol has committed its changes, then creates a Save panel, adds a standard file format accessory view (if there is more than one file type for the user to choose from and [shouldRunSavePanelWithAccessoryView](shouldrunsavepanelwithaccessoryview.md) returns [true](https://developer.apple.com/documentation/swift/true)), sets various attributes of the panel, invokes [prepareSavePanel(\_:)](preparesavepanel%28__%29.md) to provide an opportunity for customization, then presents the panel. If the user approves the panel, the default implementation sends the message [save(to:ofType:for:delegate:didSave:contextInfo:)](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md).

For backward binary compatibility with Mac OS v10.3 and earlier, the default implementation of this method instead invokes the deprecated [saveToFile:saveOperation:delegate:didSaveSelector:contextInfo:](savetofile_saveoperation_delegate_didsaveselector_contextinfo_.md) if it is overridden, even if the user cancels the panel.

## See Also

### Presenting a Save Panel

- [prepareSavePanel(\_:)](preparesavepanel%28__%29.md): Tells the document to customize the specified Save panel.
- [shouldRunSavePanelWithAccessoryView](shouldrunsavepanelwithaccessoryview.md): Deprecated. A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.
- [fileTypeFromLastRunSavePanel](filetypefromlastrunsavepanel.md): The file type that was last selected in the Save panel.
- [fileNameExtensionWasHiddenInLastRunSavePanel](filenameextensionwashiddeninlastrunsavepanel.md): A Boolean value that indicates whether the user chose to hide the document’s filename extension.

# runModalSavePanelForSaveOperation:delegate:didSaveSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.

## Declaration

```objectivec
- (void) runModalSavePanelForSaveOperation:(NSSaveOperationType) saveOperation delegate:(id) delegate didSaveSelector:(SEL) didSaveSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `saveOperation`: The type of save operation.
- `delegate`: The delegate to which the selector message is sent.
- `didSaveSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

When saving is completed, regardless of success or failure, or has been canceled, sends the message selected by `didSaveSelector` to the `delegate`, with `contextInfo` as the last argument. The method selected by `didSaveSelector` must have the same signature as:

```objc
- (void)document:(NSDocument *)doc didSave:(BOOL)didSave contextInfo:(void  *)contextInfo
```

Invoked from [saveDocumentWithDelegate:didSaveSelector:contextInfo:](save%28withdelegate_didsave_contextinfo_%29.md), and from the [saveDocumentAs:](saveas%28__%29.md) and [saveDocumentTo:](saveto%28__%29.md) action methods. The default implementation of this method first makes sure that any editor registered using the Cocoa Bindings [NSEditorRegistration](../nseditorregistration.md) informal protocol has committed its changes, then creates a Save panel, adds a standard file format accessory view (if there is more than one file type for the user to choose from and [shouldRunSavePanelWithAccessoryView](shouldrunsavepanelwithaccessoryview.md) returns [true](https://developer.apple.com/documentation/swift/true)), sets various attributes of the panel, invokes [prepareSavePanel:](preparesavepanel%28__%29.md) to provide an opportunity for customization, then presents the panel. If the user approves the panel, the default implementation sends the message [saveToURL:ofType:forSaveOperation:delegate:didSaveSelector:contextInfo:](save%28to_oftype_for_delegate_didsave_contextinfo_%29.md).

For backward binary compatibility with Mac OS v10.3 and earlier, the default implementation of this method instead invokes the deprecated [saveToFile:saveOperation:delegate:didSaveSelector:contextInfo:](savetofile_saveoperation_delegate_didsaveselector_contextinfo_.md) if it is overridden, even if the user cancels the panel.

## See Also

### Presenting a Save Panel

- [prepareSavePanel:](preparesavepanel%28__%29.md): Tells the document to customize the specified Save panel.
- [shouldRunSavePanelWithAccessoryView](shouldrunsavepanelwithaccessoryview.md): Deprecated. A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.
- [fileTypeFromLastRunSavePanel](filetypefromlastrunsavepanel.md): The file type that was last selected in the Save panel.
- [fileNameExtensionWasHiddenInLastRunSavePanel](filenameextensionwashiddeninlastrunsavepanel.md): A Boolean value that indicates whether the user chose to hide the document’s filename extension.
