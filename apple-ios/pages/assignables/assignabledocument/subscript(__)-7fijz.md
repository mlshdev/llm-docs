> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/assignabledocument/subscript(_:)-7fijz

# subscript(\_:)

**Framework:** Assignables  
**Kind:** Instance Subscript  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0) · visionOS

Access the question that the identifier denotes, if any.

> Access questions using AssignableDocument's questions array instead

## Declaration

```swift
subscript(questionID: AssignableDocument.Question.ID) -> AssignableDocument.Question? { get set }
```

## See Also

### Accessing documents

- [subscript(\_:)](subscript%28__%29-8ou91.md): Access the page that the identifier denotes, if any.
- [subscript(\_:)](subscript%28__%29-68enn.md): Deprecated. Access the question box that the identifier denotes, if any.
