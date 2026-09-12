> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/filenameextensionwashiddeninlastrunsavepanel](https://developer.apple.com/documentation/appkit/nsdocument/filenameextensionwashiddeninlastrunsavepanel)

# fileNameExtensionWasHiddenInLastRunSavePanel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the user chose to hide the document’s filename extension.

## Declaration

```swift
nonisolated var fileNameExtensionWasHiddenInLastRunSavePanel: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a Save panel was presented and the user chose to hide the extension; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The Save panel includes an option to hide a document’s filename extension. If the user selects this option, AppKit sets the value of this property to [true](https://developer.apple.com/documentation/swift/true); otherwise, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Presenting a Save Panel

- [runModalSavePanel(for:delegate:didSave:contextInfo:)](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md): Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.
- [prepareSavePanel(\_:)](preparesavepanel%28__%29.md): Tells the document to customize the specified Save panel.
- [shouldRunSavePanelWithAccessoryView](shouldrunsavepanelwithaccessoryview.md): Deprecated. A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.
- [fileTypeFromLastRunSavePanel](filetypefromlastrunsavepanel.md): The file type that was last selected in the Save panel.

# fileNameExtensionWasHiddenInLastRunSavePanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the user chose to hide the document’s filename extension.

## Declaration

```objectivec
@property (readonly) BOOL fileNameExtensionWasHiddenInLastRunSavePanel;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a Save panel was presented and the user chose to hide the extension; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The Save panel includes an option to hide a document’s filename extension. If the user selects this option, AppKit sets the value of this property to [true](https://developer.apple.com/documentation/swift/true); otherwise, the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Presenting a Save Panel

- [runModalSavePanelForSaveOperation:delegate:didSaveSelector:contextInfo:](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md): Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.
- [prepareSavePanel:](preparesavepanel%28__%29.md): Tells the document to customize the specified Save panel.
- [shouldRunSavePanelWithAccessoryView](shouldrunsavepanelwithaccessoryview.md): Deprecated. A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.
- [fileTypeFromLastRunSavePanel](filetypefromlastrunsavepanel.md): The file type that was last selected in the Save panel.
