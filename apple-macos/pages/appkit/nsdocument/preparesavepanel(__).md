> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/preparesavepanel(_:)](https://developer.apple.com/documentation/appkit/nsdocument/preparesavepanel(_:))

# prepareSavePanel(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the document to customize the specified Save panel.

## Declaration

```swift
func prepareSavePanel(_ savePanel: NSSavePanel) -> Bool
```

## Parameters

- `savePanel`: The Save panel.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successfully prepared; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation is empty and returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Presenting a Save Panel

- [runModalSavePanel(for:delegate:didSave:contextInfo:)](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md): Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.
- [shouldRunSavePanelWithAccessoryView](shouldrunsavepanelwithaccessoryview.md): Deprecated. A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.
- [fileTypeFromLastRunSavePanel](filetypefromlastrunsavepanel.md): The file type that was last selected in the Save panel.
- [fileNameExtensionWasHiddenInLastRunSavePanel](filenameextensionwashiddeninlastrunsavepanel.md): A Boolean value that indicates whether the user chose to hide the document’s filename extension.

# prepareSavePanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the document to customize the specified Save panel.

## Declaration

```objectivec
- (BOOL) prepareSavePanel:(NSSavePanel *) savePanel;
```

## Parameters

- `savePanel`: The Save panel.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successfully prepared; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default implementation is empty and returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Presenting a Save Panel

- [runModalSavePanelForSaveOperation:delegate:didSaveSelector:contextInfo:](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md): Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.
- [shouldRunSavePanelWithAccessoryView](shouldrunsavepanelwithaccessoryview.md): Deprecated. A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.
- [fileTypeFromLastRunSavePanel](filetypefromlastrunsavepanel.md): The file type that was last selected in the Save panel.
- [fileNameExtensionWasHiddenInLastRunSavePanel](filenameextensionwashiddeninlastrunsavepanel.md): A Boolean value that indicates whether the user chose to hide the document’s filename extension.
