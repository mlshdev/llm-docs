> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/appendquestion(pageid:rect:maxscore:)](https://developer.apple.com/documentation/assignables/assignabledocument/appendquestion(pageid:rect:maxscore:))

# appendQuestion(pageID:rect:maxScore:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Creates a new question and appends it to the document.

## Declaration

```swift
@discardableResult mutating func appendQuestion(pageID: AssignableDocument.Page.ID, rect: CGRect, maxScore: Double? = nil) -> AssignableDocument.Question.ID
```

## Parameters

- `pageID`: The ID of the page to append the question to.
- `rect`: The region of the question on the page.

<a id="return-value"></a>

## Return Value

The newly created question’s ID.

## See Also

### Getting and setting the questions

- [questions(on:)](questions%28on_%29.md): Find questions that exist on the specified page.
- [removeQuestion(\_:)](removequestion%28__%29.md): Deprecated. Removes a question and its boxes from the document.
