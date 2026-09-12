> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/questions(on:)](https://developer.apple.com/documentation/assignables/assignabledocument/questions(on:))

# questions(on:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Find questions that exist on the specified page.

## Declaration

```swift
func questions(on pageID: AssignableDocument.Page.ID) -> [AssignableDocument.Question]
```

## Parameters

- `pageID`: The identifier of the page that contains the questions being sought.

<a id="return-value"></a>

## Return Value

Questions on the specified page.

## See Also

### Getting and setting the questions

- [appendQuestion(pageID:rect:maxScore:)](appendquestion%28pageid_rect_maxscore_%29.md): Creates a new question and appends it to the document.
- [removeQuestion(\_:)](removequestion%28__%29.md): Deprecated. Removes a question and its boxes from the document.
