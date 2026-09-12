> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onassigneddocumentwillsubmit(_:)](https://developer.apple.com/documentation/swiftui/view/onassigneddocumentwillsubmit(_:))

# onAssignedDocumentWillSubmit(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · macOS 26.4+ · visionOS 26.4+

Adds an action to perform before submitting an assigned document.

## Declaration

```swift
@MainActor @preconcurrency func onAssignedDocumentWillSubmit(_ action: @escaping @Sendable (URL) async -> Bool) -> some View

```

## Parameters

- `action`: An asynchronous closure that receives the document URL and returns a Boolean value indicating whether to proceed with submission. Return `true` to continue, or `false` to cancel.

<a id="return-value"></a>

## Return Value

A view that executes the specified action before assigned document submission.

<a id="discussion"></a>

## Discussion

Return `true` to allow the submission to proceed, or `false` to cancel the submission. This is useful for validating document content, confirming user intent, or performing prerequisite operations.

```swift
AssignedDocumentSubmissionButton(documentURL: documentURL)
    .onAssignedDocumentWillSubmit { url in
        // Validate the assigned document before submission
        guard await isDocumentComplete(url) else {
            await showAlert("Please complete all sections before submitting")
            return false // Prevents submission
        }
        return true // Allows submission to continue
    }
```

## See Also

### Submission

- [onAssignedDocumentDidSubmit(\_:)](onassigneddocumentdidsubmit%28__%29.md): Adds an action to perform after submitting an assigned document.
- [onAssignedDocumentDidWithdraw(\_:)](onassigneddocumentdidwithdraw%28__%29.md): Adds an action to perform after an assigned document submission has been withdrawn.
- [onAssignedDocumentWillWithdraw(\_:)](onassigneddocumentwillwithdraw%28__%29.md): Adds an action to perform before withdrawing an assigned document submission.
- [onSubmit(of:\_:)](onsubmit%28of___%29.md): Adds an action to perform when the user submits a value to this view.
- [submitScope(\_:)](submitscope%28__%29.md): Prevents submission triggers originating from this view to invoke a submission action configured by a submission modifier higher up in the view hierarchy.
- [submitLabel(\_:)](submitlabel%28__%29.md): Sets the submit label for this view.
