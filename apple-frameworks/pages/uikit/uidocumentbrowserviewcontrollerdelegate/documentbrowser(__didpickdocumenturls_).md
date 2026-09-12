> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontrollerdelegate/documentbrowser(_:didpickdocumenturls:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/documentbrowser(_:didpickdocumenturls:))

# documentBrowser(\_:didPickDocumentURLs:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the user has selected one or more documents.

> Use [documentPicker(\_:didPickDocumentsAt:)](../uidocumentpickerdelegate/documentpicker%28__didpickdocumentsat_%29.md) instead.

## Declaration

```swift
optional func documentBrowser(_ controller: UIDocumentBrowserViewController, didPickDocumentURLs documentURLs: [URL])
```

## Parameters

- `controller`: The current document browser.
- `documentURLs`: An array of URLs for the selected documents.

  If the document browser’s [allowsPickingMultipleItems](../uidocumentbrowserviewcontroller/allowspickingmultipleitems.md) property is [true](https://developer.apple.com/documentation/swift/true), the array contains one or more URLs. If [false](https://developer.apple.com/documentation/swift/false), it contains only a single URL.

## Mentioned In

- [Presenting selected documents](../presenting-selected-documents.md)

<a id="Discussion"></a>

## Discussion

Implement this method to process the documents selected by the user. Typically, you create a view controller to display the selected documents, then present that view modally, like in the following example.

```swift
// Did Select Documents
func documentBrowser(_ controller: UIDocumentBrowserViewController,
                     didPickDocumentURLs documentURLs: [URL]) {
    
    assert(controller.allowsPickingMultipleItems == false)
    
    assert(documentURLs.count > 0,
           "*** We received an empty array of documents ***")
    
    assert(documentURLs.count <= 1,
           "*** We received more than one document ***")
    
    guard let url = documentURLs.first else {
        fatalError("*** No URL Found! ***")
    }
    
    openDocument(controller, forFileURL: url)
}

private func openDocument(_ controller: UIDocumentBrowserViewController,
                          forFileURL url: URL) {
    
    let doc = // Create a UIDocument subclass for the selected URL.

    let editor = // Create a view controller to edit the document.

    // Optionally, set up a transition controller here...
        
    doc.open { (success) in
        guard success else {
            // Handle the error here...
        }
        
        // Present the document
        controller.present(editor, animated: true, completion: nil)
    }
}
```

# documentBrowser:didPickDocumentURLs: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the user has selected one or more documents.

> Use [documentPicker:didPickDocumentsAtURLs:](../uidocumentpickerdelegate/documentpicker%28__didpickdocumentsat_%29.md) instead.

## Declaration

```objectivec
- (void) documentBrowser:(UIDocumentBrowserViewController *) controller didPickDocumentURLs:(NSArray<NSURL *> *) documentURLs;
```

## Parameters

- `controller`: The current document browser.
- `documentURLs`: An array of URLs for the selected documents.

  If the document browser’s [allowsPickingMultipleItems](../uidocumentbrowserviewcontroller/allowspickingmultipleitems.md) property is [true](https://developer.apple.com/documentation/swift/true), the array contains one or more URLs. If [false](https://developer.apple.com/documentation/swift/false), it contains only a single URL.

## Mentioned In

- [Presenting selected documents](../presenting-selected-documents.md)

<a id="Discussion"></a>

## Discussion

Implement this method to process the documents selected by the user. Typically, you create a view controller to display the selected documents, then present that view modally, like in the following example.

```swift
// Did Select Documents
func documentBrowser(_ controller: UIDocumentBrowserViewController,
                     didPickDocumentURLs documentURLs: [URL]) {
    
    assert(controller.allowsPickingMultipleItems == false)
    
    assert(documentURLs.count > 0,
           "*** We received an empty array of documents ***")
    
    assert(documentURLs.count <= 1,
           "*** We received more than one document ***")
    
    guard let url = documentURLs.first else {
        fatalError("*** No URL Found! ***")
    }
    
    openDocument(controller, forFileURL: url)
}

private func openDocument(_ controller: UIDocumentBrowserViewController,
                          forFileURL url: URL) {
    
    let doc = // Create a UIDocument subclass for the selected URL.

    let editor = // Create a view controller to edit the document.

    // Optionally, set up a transition controller here...
        
    doc.open { (success) in
        guard success else {
            // Handle the error here...
        }
        
        // Present the document
        controller.present(editor, animated: true, completion: nil)
    }
}
```
