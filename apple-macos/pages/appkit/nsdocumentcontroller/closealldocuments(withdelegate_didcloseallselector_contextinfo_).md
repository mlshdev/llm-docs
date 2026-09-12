> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/closealldocuments(withdelegate:didcloseallselector:contextinfo:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/closealldocuments(withdelegate:didcloseallselector:contextinfo:))

# closeAllDocuments(withDelegate:didCloseAllSelector:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Iterates through all the open documents and tries to close them one by one using the specified delegate.

## Declaration

```swift
func closeAllDocuments(withDelegate delegate: Any?, didCloseAllSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `delegate`: The object responsible for closing the document.
- `didCloseAllSelector`: The selector to call after all documents have been closed.
- `contextInfo`: A pointer to user-supplied data.

<a id="Discussion"></a>

## Discussion

Each `NSDocument` object is sent [canClose(withDelegate:shouldClose:contextInfo:)](../nsdocument/canclose%28withdelegate_shouldclose_contextinfo_%29.md), which, if the document is dirty, gives it a chance to refuse to close or to save itself first. This method may ask whether to save or to perform a save.

The `didCloseAllSelector` callback method is called with [true](https://developer.apple.com/documentation/swift/true) if all documents are closed, and [false](https://developer.apple.com/documentation/swift/false) otherwise. Pass the `contextInfo` object with the callback. The `didCloseAllSelector` callback method should have the following signature:

```objc
- (void)documentController:(NSDocumentController *)docController  didCloseAll:(BOOL)didCloseAll contextInfo:(void *)contextInfo
```

## See Also

### Closing Documents

- [reviewUnsavedDocuments(withAlertTitle:cancellable:delegate:didReviewAllSelector:contextInfo:)](reviewunsaveddocuments%28withalerttitle_cancellable_delegate_didreviewallselector_contextinfo_%29.md): Displays an alert asking if the user wants to review unsaved documents, quit regardless of unsaved documents, or cancel the save operation.

# closeAllDocumentsWithDelegate:didCloseAllSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Iterates through all the open documents and tries to close them one by one using the specified delegate.

## Declaration

```objectivec
- (void) closeAllDocumentsWithDelegate:(id) delegate didCloseAllSelector:(SEL) didCloseAllSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `delegate`: The object responsible for closing the document.
- `didCloseAllSelector`: The selector to call after all documents have been closed.
- `contextInfo`: A pointer to user-supplied data.

<a id="Discussion"></a>

## Discussion

Each `NSDocument` object is sent [canCloseDocumentWithDelegate:shouldCloseSelector:contextInfo:](../nsdocument/canclose%28withdelegate_shouldclose_contextinfo_%29.md), which, if the document is dirty, gives it a chance to refuse to close or to save itself first. This method may ask whether to save or to perform a save.

The `didCloseAllSelector` callback method is called with [true](https://developer.apple.com/documentation/swift/true) if all documents are closed, and [false](https://developer.apple.com/documentation/swift/false) otherwise. Pass the `contextInfo` object with the callback. The `didCloseAllSelector` callback method should have the following signature:

```objc
- (void)documentController:(NSDocumentController *)docController  didCloseAll:(BOOL)didCloseAll contextInfo:(void *)contextInfo
```

## See Also

### Closing Documents

- [reviewUnsavedDocumentsWithAlertTitle:cancellable:delegate:didReviewAllSelector:contextInfo:](reviewunsaveddocuments%28withalerttitle_cancellable_delegate_didreviewallselector_contextinfo_%29.md): Displays an alert asking if the user wants to review unsaved documents, quit regardless of unsaved documents, or cancel the save operation.
