> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onassigneddocumentdidsubmit(_:)](https://developer.apple.com/documentation/swiftui/view/onassigneddocumentdidsubmit(_:))

# onAssignedDocumentDidSubmit(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · macOS 26.4+ · visionOS 26.4+

Adds an action to perform after submitting an assigned document.

## Declaration

```swift
@MainActor @preconcurrency func onAssignedDocumentDidSubmit(_ action: @escaping (URL) -> Void) -> some View

```

## Parameters

- `action`: An asynchronous closure that receives the document URL and executes after successful submission.

<a id="return-value"></a>

## Return Value

A view that executes the specified action after assigned document submission.

<a id="discussion"></a>

## Discussion

This action runs only after successful submission, regardless of whether you provided an [onAssignedDocumentWillSubmit(\_:)](onassigneddocumentwillsubmit%28__%29.md) action.

```swift
AssignedDocumentSubmissionButton(documentURL: documentURL)
    .onAssignedDocumentDidSubmit { url in
        // Handle successful submission
        logEvent("Assigned document submitted successfully!")
    }
```

## See Also

### Submission

- [onAssignedDocumentDidWithdraw(\_:)](onassigneddocumentdidwithdraw%28__%29.md): Adds an action to perform after an assigned document submission has been withdrawn.
- [onAssignedDocumentWillSubmit(\_:)](onassigneddocumentwillsubmit%28__%29.md): Adds an action to perform before submitting an assigned document.
- [onAssignedDocumentWillWithdraw(\_:)](onassigneddocumentwillwithdraw%28__%29.md): Adds an action to perform before withdrawing an assigned document submission.
- [onSubmit(of:\_:)](onsubmit%28of___%29.md): Adds an action to perform when the user submits a value to this view.
- [submitScope(\_:)](submitscope%28__%29.md): Prevents submission triggers originating from this view to invoke a submission action configured by a submission modifier higher up in the view hierarchy.
- [submitLabel(\_:)](submitlabel%28__%29.md): Sets the submit label for this view.
