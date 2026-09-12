> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/shouldrunsavepanelwithaccessoryview](https://developer.apple.com/documentation/appkit/nsdocument/shouldrunsavepanelwithaccessoryview)

# shouldRunSavePanelWithAccessoryView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.

## Declaration

```swift
var shouldRunSavePanelWithAccessoryView: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the document includes a pop-up menu of supported writable document types when it displays the Save panel. The default value of this property is [true](https://developer.apple.com/documentation/swift/true). Subclasses can override this property to provide a different value. For example, you might provide the following implementation:

```objc
- (BOOL)shouldRunSavePanelWithAccessoryView {
    return [self fileURL] == nil;
}
```

## See Also

### Presenting a Save Panel

- [runModalSavePanel(for:delegate:didSave:contextInfo:)](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md): Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.
- [prepareSavePanel(\_:)](preparesavepanel%28__%29.md): Tells the document to customize the specified Save panel.
- [fileTypeFromLastRunSavePanel](filetypefromlastrunsavepanel.md): The file type that was last selected in the Save panel.
- [fileNameExtensionWasHiddenInLastRunSavePanel](filenameextensionwashiddeninlastrunsavepanel.md): A Boolean value that indicates whether the user chose to hide the document’s filename extension.

# shouldRunSavePanelWithAccessoryView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

A Boolean value that indicates whether the document’s Save panel displays a list of supported writable document types.

## Declaration

```objectivec
@property (readonly) BOOL shouldRunSavePanelWithAccessoryView;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the document includes a pop-up menu of supported writable document types when it displays the Save panel. The default value of this property is [true](https://developer.apple.com/documentation/swift/true). Subclasses can override this property to provide a different value. For example, you might provide the following implementation:

```objc
- (BOOL)shouldRunSavePanelWithAccessoryView {
    return [self fileURL] == nil;
}
```

## See Also

### Presenting a Save Panel

- [runModalSavePanelForSaveOperation:delegate:didSaveSelector:contextInfo:](runmodalsavepanel%28for_delegate_didsave_contextinfo_%29.md): Presents a modal Save panel to the user, then tries to save the document if the user approves the operation.
- [prepareSavePanel:](preparesavepanel%28__%29.md): Tells the document to customize the specified Save panel.
- [fileTypeFromLastRunSavePanel](filetypefromlastrunsavepanel.md): The file type that was last selected in the Save panel.
- [fileNameExtensionWasHiddenInLastRunSavePanel](filenameextensionwashiddeninlastrunsavepanel.md): A Boolean value that indicates whether the user chose to hide the document’s filename extension.
