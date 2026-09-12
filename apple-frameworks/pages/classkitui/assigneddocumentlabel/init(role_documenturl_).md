> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitui/assigneddocumentlabel/init(role:documenturl:)](https://developer.apple.com/documentation/classkitui/assigneddocumentlabel/init(role:documenturl:))

# init(role:documentURL:)

**Framework:** ClassKit UI  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

Creates a label that displays information about the assigned document.

## Declaration

```swift
@MainActor @preconcurrency init(role: AssignedDocumentLabel.Role, documentURL: URL)
```

## Parameters

- `role`: The type of document information to display.
- `documentURL`: The URL of the assigned document.
