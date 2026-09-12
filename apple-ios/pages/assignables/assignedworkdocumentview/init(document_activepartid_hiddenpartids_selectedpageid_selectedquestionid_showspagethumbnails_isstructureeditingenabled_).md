> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocumentview/init(document:activepartid:hiddenpartids:selectedpageid:selectedquestionid:showspagethumbnails:isstructureeditingenabled:)](https://developer.apple.com/documentation/assignables/assignedworkdocumentview/init(document:activepartid:hiddenpartids:selectedpageid:selectedquestionid:showspagethumbnails:isstructureeditingenabled:))

# init(document:activePartID:hiddenPartIDs:selectedPageID:selectedQuestionID:showsPageThumbnails:isStructureEditingEnabled:)

**Framework:** Assignables  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Displays an `AssignedWorkDocument`.

## Declaration

```swift
@MainActor @preconcurrency init(document: Binding<AssignedWorkDocumentView.Document>, activePartID: MergeablePartsContainerPartID? = nil, hiddenPartIDs: [MergeablePartsContainerPartID], selectedPageID: Binding<AssignedWorkDocumentView.Document.Page.ID?>? = nil, selectedQuestionID: Binding<AssignableDocument.Question.ID?>? = nil, showsPageThumbnails: Bool = true, isStructureEditingEnabled: Bool = false)
```

## Parameters

- `document`: A binding to the [AssignedWorkDocumentView.Document](document.md) to present in the view.
- `activePartID`: The `PartID` to enable user interaction on.
- `hiddenPartIDs`: A set of `PartID`s to hide on this view. Treated as a set.
- `selectedPageID`: A binding to the selected page.
- `selectedQuestionID`: A binding to the selected question.
- `showsPageThumbnails`: Controls showing or hiding the document pages thumbnail previews.
- `isStructureEditingEnabled`: Controls access to actions that allow changing the structure of the document on the page thumbnail view contextual menu (i.e. add/duplicate/move/remove pages).

<a id="discussion"></a>

## Discussion

- Example:

```
    AssignedWorkDocumentView(
        document: $document,
        activePartID: activeLayerID,
        hiddenPartIDs: hiddenPartIDs,
        selectedPageID: $selectedPageID,
        showsPageThumbnails: isMultiPageDocument,
        isStructureEditingEnabled: false,
        onMarkupActivation: { isMarkupActivated in
            if isMarkupActivated {
                activeLayerID = AssignedWorkDocument.PartIDs.scorerMarkup
                isMarkupSelected = true
            }
        }
    )
```
