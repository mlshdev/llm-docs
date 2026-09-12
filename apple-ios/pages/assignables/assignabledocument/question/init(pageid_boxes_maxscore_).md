> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/question/init(pageid:boxes:maxscore:)](https://developer.apple.com/documentation/assignables/assignabledocument/question/init(pageid:boxes:maxscore:))

# init(pageID:boxes:maxScore:)

**Framework:** Assignables  
**Kind:** Initializer  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0) · visionOS

Initializes an instance of this object with the given values.

> Use init(boxes:maxScore:) instead

## Declaration

```swift
init(pageID: AssignableDocument.Page.ID, boxes: [AssignableDocument.QuestionBox], maxScore: Double? = nil)
```

## Parameters

- `pageID`: The page ID this question is for.
- `boxes`: The question boxes associated with this question. Treated as a set.
- `maxScore`: An optional maximum score value for this question.
