> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/assignabledocument/questionbox/init(id:pageid:bounds:)

# init(id:pageID:bounds:)

**Framework:** Assignables  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Initialize a question box.

## Declaration

```swift
init(id: AssignableDocument.QuestionBox.ID, pageID: AssignableDocument.Page.ID, bounds: CGRect)
```

## Parameters

- `id`: An ID for the box you can use to reference it within the document.
- `pageID`: The ID of the page the box is for.
- `bounds`: The bounds of the box on the page.
