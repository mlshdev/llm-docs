> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/assignabledocument/questionthumbnails(visibleparts:)

# questionThumbnails(visibleParts:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Produces thumbnails of question regions within the document.

## Declaration

```swift
func questionThumbnails(visibleParts: [AssignableDocument.PartID]) async -> [AssignableDocument.Question.ID : [AssignableDocument.Question.Thumbnail]]
```

## Parameters

- `visibleParts`: The parts to display in the thumbnails.

<a id="return-value"></a>

## Return Value

A dictionary of [AssignableDocument.Question.ID](question/id-swift.typealias.md) to array of [AssignableDocument.Question.Thumbnail](question/thumbnail.md).
