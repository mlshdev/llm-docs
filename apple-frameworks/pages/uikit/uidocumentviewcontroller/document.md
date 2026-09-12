> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentviewcontroller/document](https://developer.apple.com/documentation/uikit/uidocumentviewcontroller/document)

# document (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The document that the controller presents or edits.

## Declaration

```swift
var document: UIDocument? { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the document that the document view controller displays. The default value of this property is `nil`. When the value of the `document` property is `nil`, the document view controller presents an empty state view with a message to “Select a document by tapping the ‘Documents’ button at the top.”

When the value of this property is not `nil`, the document view controller displays the document.

## See Also

### Managing the document view

- [openDocument(completionHandler:)](opendocument%28completionhandler_%29.md): Opens a document in a document view controller from outside the document view controller.
- [documentDidOpen()](documentdidopen%28%29.md): Provides an opportunity to configure the view after the system loads the controller’s document into memory.

# document (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The document that the controller presents or edits.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIDocument * document;
```

<a id="Discussion"></a>

## Discussion

This property represents the document that the document view controller displays. The default value of this property is `nil`. When the value of the `document` property is `nil`, the document view controller presents an empty state view with a message to “Select a document by tapping the ‘Documents’ button at the top.”

When the value of this property is not `nil`, the document view controller displays the document.

## See Also

### Managing the document view

- [openDocumentWithCompletionHandler:](opendocument%28completionhandler_%29.md): Opens a document in a document view controller from outside the document view controller.
- [documentDidOpen](documentdidopen%28%29.md): Provides an opportunity to configure the view after the system loads the controller’s document into memory.
