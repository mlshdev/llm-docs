> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/canclose(withdelegate:shouldclose:contextinfo:)](https://developer.apple.com/documentation/appkit/nsdocument/canclose(withdelegate:shouldclose:contextinfo:))

# canClose(withDelegate:shouldClose:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Determines whether to close the document, prompting the user as needed to choose a course of action.

## Declaration

```swift
func canClose(withDelegate delegate: Any, shouldClose shouldCloseSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `delegate`: The delegate to which the selector message is sent.
- `shouldCloseSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

If the document is not dirty, this method immediately calls the `shouldCloseSelector` callback on the specified delegate with [true](https://developer.apple.com/documentation/swift/true).

If the document is dirty, an alert is presented giving the user a chance to save, not save, or cancel. If the user chooses to save, this method saves the document. If the save completes successfully, this method calls the callback with [true](https://developer.apple.com/documentation/swift/true). If the save is canceled or otherwise unsuccessful, this method calls the callback with [false](https://developer.apple.com/documentation/swift/false). This method may be called by [shouldCloseWindowController(\_:delegate:shouldClose:contextInfo:)](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md). It is also called by the `NSDocumentController` method [closeAllDocuments(withDelegate:didCloseAllSelector:contextInfo:)](../nsdocumentcontroller/closealldocuments%28withdelegate_didcloseallselector_contextinfo_%29.md). You should call it before you call [close()](close%28%29.md) if you are closing the document and want to give the user a chance to save any edits. Pass the `contextInfo` object with the callback.

The `shouldCloseSelector` callback method should have the following signature:

```objc
- (void)document:(NSDocument *)doc shouldClose:(BOOL)shouldClose  contextInfo:(void  *)contextInfo
```

## See Also

### Closing the Document

- [close()](close%28%29.md): Closes all of the document’s windows and removes the document from its document controller.

# canCloseDocumentWithDelegate:shouldCloseSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Determines whether to close the document, prompting the user as needed to choose a course of action.

## Declaration

```objectivec
- (void) canCloseDocumentWithDelegate:(id) delegate shouldCloseSelector:(SEL) shouldCloseSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `delegate`: The delegate to which the selector message is sent.
- `shouldCloseSelector`: The selector of the message sent to the delegate.
- `contextInfo`: Object passed with the callback to provide any additional context information.

<a id="Discussion"></a>

## Discussion

If the document is not dirty, this method immediately calls the `shouldCloseSelector` callback on the specified delegate with [true](https://developer.apple.com/documentation/swift/true).

If the document is dirty, an alert is presented giving the user a chance to save, not save, or cancel. If the user chooses to save, this method saves the document. If the save completes successfully, this method calls the callback with [true](https://developer.apple.com/documentation/swift/true). If the save is canceled or otherwise unsuccessful, this method calls the callback with [false](https://developer.apple.com/documentation/swift/false). This method may be called by [shouldCloseWindowController:delegate:shouldCloseSelector:contextInfo:](shouldclosewindowcontroller%28__delegate_shouldclose_contextinfo_%29.md). It is also called by the `NSDocumentController` method [closeAllDocumentsWithDelegate:didCloseAllSelector:contextInfo:](../nsdocumentcontroller/closealldocuments%28withdelegate_didcloseallselector_contextinfo_%29.md). You should call it before you call [close](close%28%29.md) if you are closing the document and want to give the user a chance to save any edits. Pass the `contextInfo` object with the callback.

The `shouldCloseSelector` callback method should have the following signature:

```objc
- (void)document:(NSDocument *)doc shouldClose:(BOOL)shouldClose  contextInfo:(void  *)contextInfo
```

## See Also

### Closing the Document

- [close](close%28%29.md): Closes all of the document’s windows and removes the document from its document controller.
