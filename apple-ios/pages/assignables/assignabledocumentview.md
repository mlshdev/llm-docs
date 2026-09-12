> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocumentview](https://developer.apple.com/documentation/assignables/assignabledocumentview)

# AssignableDocumentView

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

SwiftUI View to display an `AssignableDocument`.

## Declaration

```swift
@MainActor @preconcurrency struct AssignableDocumentView
```

## Topics

### Creating a document view

- [init(document:activePartID:hiddenPartIDs:selectedPageID:selectedQuestionID:showsPageThumbnails:isStructureEditingEnabled:)](assignabledocumentview/init%28document_activepartid_hiddenpartids_selectedpageid_selectedquestionid_showspagethumbnails_isstructureeditingenabled_%29.md): Displays an `AssignableDocument`.

### Customizing the view

- [AssignableDocumentView.Document](assignabledocumentview/document.md): The document type that this view presents.

### Initializers

- [init(document:activePartID:hiddenPartIDs:selectedPageID:selectedQuestionID:showsPageThumbnails:isStructureEditingEnabled:allowsPencilDrawing:onMarkupActivation:)](assignabledocumentview/init%28document_activepartid_hiddenpartids_selectedpageid_selectedquestionid_showspagethumbnails_isstructureeditingenabled_allowspencildrawing_onmarkupactivation_%29.md): Displays an `AssignableDocument`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Presentation

- [AssignedWorkDocumentView](assignedworkdocumentview.md): SwiftUI View to display an `AssignedWorkDocument`
