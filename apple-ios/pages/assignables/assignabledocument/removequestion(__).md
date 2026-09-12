> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/removequestion(_:)](https://developer.apple.com/documentation/assignables/assignabledocument/removequestion(_:))

# removeQuestion(\_:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0) · visionOS

Removes a question and its boxes from the document.

> Remove questions from AssignableDocument's questions array instead

## Declaration

```swift
@discardableResult mutating func removeQuestion(_ questionID: AssignableDocument.Question.ID) -> AssignableDocument.Question?
```

## Parameters

- `questionID`: The element to remove.

## See Also

### Getting and setting the questions

- [appendQuestion(pageID:rect:maxScore:)](appendquestion%28pageid_rect_maxscore_%29.md): Creates a new question and appends it to the document.
- [questions(on:)](questions%28on_%29.md): Find questions that exist on the specified page.
