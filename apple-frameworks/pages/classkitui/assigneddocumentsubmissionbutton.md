> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitui/assigneddocumentsubmissionbutton](https://developer.apple.com/documentation/classkitui/assigneddocumentsubmissionbutton)

# AssignedDocumentSubmissionButton

**Framework:** ClassKit UI  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

A button that provides submission functionality for the assigned document.

## Declaration

```swift
@MainActor @preconcurrency struct AssignedDocumentSubmissionButton
```

<a id="overview"></a>

## Overview

`AssignedDocumentSubmissionButton` enables students to submit and withdraw assigned documents. The button fetches document data from ClassKit and updates its appearance and behavior based on the current submission status. The button shows loading states during both initial data loading and submission processing.

You can customize the submission process using view modifiers that execute at key points in the submission lifecycle. Use the modifiers to either validate or prepare documents before an action or update your app after an action completes:

For submissions, use:

- [onAssignedDocumentWillSubmit(\_:)](https://developer.apple.com/documentation/swiftui/view/onassigneddocumentwillsubmit%28_:%29) to validate the document before submission.
- [onAssignedDocumentDidSubmit(\_:)](https://developer.apple.com/documentation/swiftui/view/onassigneddocumentdidsubmit%28_:%29) to update your interface or log analytics after a successful submission.

For withdrawing submissions use:

- [onAssignedDocumentWillWithdraw(\_:)](https://developer.apple.com/documentation/swiftui/view/onassigneddocumentwillwithdraw%28_:%29) to confirm the withdrawal action with the student or prepare your app state.
- [onAssignedDocumentDidWithdraw(\_:)](https://developer.apple.com/documentation/swiftui/view/onassigneddocumentdidwithdraw%28_:%29) to update your interface or notify the student that their document is no longer submitted.

The following example shows how to create an assigned document submission button and customize its behavior with validation and completion actions:

```swift
// Create a basic submission button
AssignedDocumentSubmissionButton(documentURL: documentURL)

// Create menu item with validation and logging
// Provide closures to validate document submissions and respond to completed submissions:
AssignedDocumentSubmissionButton(documentURL: documentURL)
    .onAssignedDocumentWillSubmit { url in
        // Validate the assigned document before submission
        guard await validateDocument(url) else {
            await showAlert("Please complete all sections before submitting")
            return false // Prevents submission
        }
        return true // Allows submission to continue
    }
    .onAssignedDocumentDidSubmit { url in
        // Handle successful submission
        logEvent("Assigned document submitted successfully!")
    }
```

## Topics

### Initializers

- [init(documentURL:)](assigneddocumentsubmissionbutton/init%28documenturl_%29.md): Creates a button for document submission.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Submitting assigned documents

- [AssignedDocumentDeferredMenuElement](assigneddocumentdeferredmenuelement.md): A deferred menu element that provides assigned document submission functionality.
- [AssignedDocumentMenuItem](assigneddocumentmenuitem.md): A menu item that provides assigned document submission functionality.
