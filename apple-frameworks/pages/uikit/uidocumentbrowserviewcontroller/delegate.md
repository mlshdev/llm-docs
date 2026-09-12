> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/delegate](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The document browser’s delegate.

## Declaration

```swift
weak var delegate: (any UIDocumentBrowserViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate object must implement the [UIDocumentBrowserViewControllerDelegate](../uidocumentbrowserviewcontrollerdelegate.md) protocol.

## See Also

### Responding to browser events

- [UIDocumentBrowserViewControllerDelegate](../uidocumentbrowserviewcontrollerdelegate.md): The protocol you implement to respond as the user interacts with the document browser.
- [importDocument(at:nextToDocumentAt:mode:completionHandler:)](importdocument%28at_nexttodocumentat_mode_completionhandler_%29.md): Imports a document into the same location as an existing document.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The document browser’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIDocumentBrowserViewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate object must implement the [UIDocumentBrowserViewControllerDelegate](../uidocumentbrowserviewcontrollerdelegate.md) protocol.

## See Also

### Responding to browser events

- [UIDocumentBrowserViewControllerDelegate](../uidocumentbrowserviewcontrollerdelegate.md): The protocol you implement to respond as the user interacts with the document browser.
- [importDocumentAtURL:nextToDocumentAtURL:mode:completionHandler:](importdocument%28at_nexttodocumentat_mode_completionhandler_%29.md): Imports a document into the same location as an existing document.
