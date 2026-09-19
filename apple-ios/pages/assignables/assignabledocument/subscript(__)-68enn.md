> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/assignabledocument/subscript(_:)-68enn

# subscript(\_:)

**Framework:** Assignables  
**Kind:** Instance Subscript  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0) · visionOS

Access the question box that the identifier denotes, if any.

> Access question boxes using AssignableDocument's question's boxes array instead

## Declaration

```swift
subscript(questionBoxID: AssignableDocument.QuestionBox.ID) -> AssignableDocument.QuestionBox? { get set }
```

## See Also

### Accessing documents

- [subscript(\_:)](subscript%28__%29-8ou91.md): Access the page that the identifier denotes, if any.
- [subscript(\_:)](subscript%28__%29-7fijz.md): Deprecated. Access the question that the identifier denotes, if any.
