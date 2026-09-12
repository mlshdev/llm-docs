> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/document](https://developer.apple.com/documentation/appkit/nswindowcontroller/document)

# document (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The document associated with the window controller.

## Declaration

```swift
unowned(unsafe) var document: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if no document is associated with the window. When a window controller is added to a document’s list of window controllers, the document uses this property to set the window controller’s document; you should not set this property. AppKit uses this property to access the document for relevant next-responder messages.

## See Also

### Accessing the Document

- [setDocumentEdited(\_:)](setdocumentedited%28__%29.md): Sets the document edited flag for the window controller.

# document (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The document associated with the window controller.

## Declaration

```objectivec
@property (assign, nullable) id document;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if no document is associated with the window. When a window controller is added to a document’s list of window controllers, the document uses this property to set the window controller’s document; you should not set this property. AppKit uses this property to access the document for relevant next-responder messages.

## See Also

### Accessing the Document

- [setDocumentEdited:](setdocumentedited%28__%29.md): Sets the document edited flag for the window controller.
