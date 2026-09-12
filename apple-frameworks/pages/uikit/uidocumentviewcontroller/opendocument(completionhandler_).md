> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentviewcontroller/opendocument(completionhandler:)](https://developer.apple.com/documentation/uikit/uidocumentviewcontroller/opendocument(completionhandler:))

# openDocument(completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Opens a document in a document view controller from outside the document view controller.

## Declaration

```swift
func openDocument(completionHandler: @escaping (Bool) -> Void)
```

```swift
func openDocument() async -> Bool
```

## Parameters

- `completionHandler`: The function that executes after the document view controller opens the document

## See Also

### Managing the document view

- [document](document.md): The document that the controller presents or edits.
- [documentDidOpen()](documentdidopen%28%29.md): Provides an opportunity to configure the view after the system loads the controller’s document into memory.

# openDocumentWithCompletionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Opens a document in a document view controller from outside the document view controller.

## Declaration

```objectivec
- (void) openDocumentWithCompletionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `completionHandler`: The function that executes after the document view controller opens the document

## See Also

### Managing the document view

- [document](document.md): The document that the controller presents or edits.
- [documentDidOpen](documentdidopen%28%29.md): Provides an opportunity to configure the view after the system loads the controller’s document into memory.
