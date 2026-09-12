> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitui/assigneddocumentlabel](https://developer.apple.com/documentation/classkitui/assigneddocumentlabel)

# AssignedDocumentLabel

**Framework:** ClassKit UI  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

A view that displays the status or date information of the assigned document.

## Declaration

```swift
@MainActor @preconcurrency struct AssignedDocumentLabel
```

<a id="overview"></a>

## Overview

`AssignedDocumentLabel` displays information about an assigned document for students, including submission status and relevant dates like due dates. The view automatically updates its appearance based on assigned document state, showing past-due items in red.

```swift
VStack(alignment: .leading) {
    Text("My Document")
        .font(.headline)

    HStack {
        AssignedDocumentLabel(role: .status, documentURL: documentURL)
        AssignedDocumentLabel(role: .date, documentURL: documentURL)
    }
    .font(.caption)
}
```

## Topics

### Structures

- [AssignedDocumentLabel.Role](assigneddocumentlabel/role.md): The type of assignment information to display.

### Initializers

- [init(role:documentURL:)](assigneddocumentlabel/init%28role_documenturl_%29.md): Creates a label that displays information about the assigned document.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
