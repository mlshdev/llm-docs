> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onassigneddocumentwillwithdraw(_:)](https://developer.apple.com/documentation/swiftui/view/onassigneddocumentwillwithdraw(_:))

# onAssignedDocumentWillWithdraw(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · macOS 26.4+ · visionOS 26.4+

Adds an action to perform before withdrawing an assigned document submission.

## Declaration

```swift
@MainActor @preconcurrency func onAssignedDocumentWillWithdraw(_ action: @escaping @Sendable (URL) async -> Bool) -> some View

```

## Parameters

- `action`: An asynchronous closure that receives the document URL and returns a Boolean value indicating whether to proceed. Return `true` to continue, or `false` to cancel.

<a id="return-value"></a>

## Return Value

A view that executes the specified action before withdrawing an assigned document.

<a id="discussion"></a>

## Discussion

Return `true` to allow the withdrawal to proceed or `false` to cancel it. This action confirms whether the person wants to withdraw their work.

```swift
AssignedDocumentSubmissionButton(documentURL: documentURL)
    .onAssignedDocumentWillWithdraw { url in
        // Confirm the person's intent
        let confirmed = await showConfirmation(
            "Are you sure you want to withdraw your document submission?"
        )
        return confirmed
    }
```

## See Also

### Submission

- [onAssignedDocumentDidSubmit(\_:)](onassigneddocumentdidsubmit%28__%29.md): Adds an action to perform after submitting an assigned document.
- [onAssignedDocumentDidWithdraw(\_:)](onassigneddocumentdidwithdraw%28__%29.md): Adds an action to perform after an assigned document submission has been withdrawn.
- [onAssignedDocumentWillSubmit(\_:)](onassigneddocumentwillsubmit%28__%29.md): Adds an action to perform before submitting an assigned document.
- [onSubmit(of:\_:)](onsubmit%28of___%29.md): Adds an action to perform when the user submits a value to this view.
- [submitScope(\_:)](submitscope%28__%29.md): Prevents submission triggers originating from this view to invoke a submission action configured by a submission modifier higher up in the view hierarchy.
- [submitLabel(\_:)](submitlabel%28__%29.md): Sets the submit label for this view.
