> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/reviewunsaveddocuments(withalerttitle:cancellable:delegate:didreviewallselector:contextinfo:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/reviewunsaveddocuments(withalerttitle:cancellable:delegate:didreviewallselector:contextinfo:))

# reviewUnsavedDocuments(withAlertTitle:cancellable:delegate:didReviewAllSelector:contextInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays an alert asking if the user wants to review unsaved documents, quit regardless of unsaved documents, or cancel the save operation.

## Declaration

```swift
func reviewUnsavedDocuments(withAlertTitle title: String?, cancellable: Bool, delegate: Any?, didReviewAllSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `title`: The title of the alert.
- `cancellable`: A Boolean indicating whether the operation can be canceled.
- `delegate`: The object that calls the selector.
- `didReviewAllSelector`: The selector to call when all documents have been reviewed.
- `contextInfo`: A pointer to user-supplied data.

<a id="Discussion"></a>

## Discussion

Assigns `delegate` to the panel. Calls `didReviewAllSelector` with [true](https://developer.apple.com/documentation/swift/true) if quit without saving is chosen or if there are no dirty documents, and [false](https://developer.apple.com/documentation/swift/false) otherwise. If the user selects the “Review Unsaved” option, [closeAllDocuments(withDelegate:didCloseAllSelector:contextInfo:)](closealldocuments%28withdelegate_didcloseallselector_contextinfo_%29.md) is called. This method is called when the user chooses the Quit menu command, and also when the computer power is being turned off. Note that `title` is ignored. Pass the `contextInfo` object with the callback.

The `didReviewAllSelector` callback method should have the following signature:

```objc
- (void)documentController:(NSDocumentController *)docController  didReviewAll: (BOOL)didReviewAll contextInfo:(void *)contextInfo
```

## See Also

### Closing Documents

- [closeAllDocuments(withDelegate:didCloseAllSelector:contextInfo:)](closealldocuments%28withdelegate_didcloseallselector_contextinfo_%29.md): Iterates through all the open documents and tries to close them one by one using the specified delegate.

# reviewUnsavedDocumentsWithAlertTitle:cancellable:delegate:didReviewAllSelector:contextInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays an alert asking if the user wants to review unsaved documents, quit regardless of unsaved documents, or cancel the save operation.

## Declaration

```objectivec
- (void) reviewUnsavedDocumentsWithAlertTitle:(NSString *) title cancellable:(BOOL) cancellable delegate:(id) delegate didReviewAllSelector:(SEL) didReviewAllSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `title`: The title of the alert.
- `cancellable`: A Boolean indicating whether the operation can be canceled.
- `delegate`: The object that calls the selector.
- `didReviewAllSelector`: The selector to call when all documents have been reviewed.
- `contextInfo`: A pointer to user-supplied data.

<a id="Discussion"></a>

## Discussion

Assigns `delegate` to the panel. Calls `didReviewAllSelector` with [true](https://developer.apple.com/documentation/swift/true) if quit without saving is chosen or if there are no dirty documents, and [false](https://developer.apple.com/documentation/swift/false) otherwise. If the user selects the “Review Unsaved” option, [closeAllDocumentsWithDelegate:didCloseAllSelector:contextInfo:](closealldocuments%28withdelegate_didcloseallselector_contextinfo_%29.md) is called. This method is called when the user chooses the Quit menu command, and also when the computer power is being turned off. Note that `title` is ignored. Pass the `contextInfo` object with the callback.

The `didReviewAllSelector` callback method should have the following signature:

```objc
- (void)documentController:(NSDocumentController *)docController  didReviewAll: (BOOL)didReviewAll contextInfo:(void *)contextInfo
```

## See Also

### Closing Documents

- [closeAllDocumentsWithDelegate:didCloseAllSelector:contextInfo:](closealldocuments%28withdelegate_didcloseallselector_contextinfo_%29.md): Iterates through all the open documents and tries to close them one by one using the specified delegate.
