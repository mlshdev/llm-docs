> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/close()](https://developer.apple.com/documentation/appkit/nsdocument/close())

# close() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Closes all of the document’s windows and removes the document from its document controller.

## Declaration

```swift
func close()
```

<a id="Discussion"></a>

## Discussion

This method closes the document immediately, without asking users if they want to save the document. This method may not always be called.

## See Also

### Related Documentation

- [shouldCloseWindowController(\_:delegate:shouldClose:contextInfo:)](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.

### Closing the Document

- [canClose(withDelegate:shouldClose:contextInfo:)](canclose%28withdelegate_shouldclose_contextinfo_%29.md): Determines whether to close the document, prompting the user as needed to choose a course of action.

# close (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Closes all of the document’s windows and removes the document from its document controller.

## Declaration

```objectivec
- (void) close;
```

<a id="Discussion"></a>

## Discussion

This method closes the document immediately, without asking users if they want to save the document. This method may not always be called.

## See Also

### Related Documentation

- [shouldCloseWindowController:delegate:shouldCloseSelector:contextInfo:](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md): Determines whether the system should close the document and its associated window.

### Closing the Document

- [canCloseDocumentWithDelegate:shouldCloseSelector:contextInfo:](canclose%28withdelegate_shouldclose_contextinfo_%29.md): Determines whether to close the document, prompting the user as needed to choose a course of action.
