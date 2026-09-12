> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/scoreannotation/pageid](https://developer.apple.com/documentation/assignables/assignedworkdocument/scoreannotation/pageid)

# pageID

**Framework:** Assignables  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

The ID of the page this score annotation is for.

## Declaration

```swift
var pageID: AssignedWorkDocument.Page.ID? { get set }
```

## See Also

### Inspecting a score annotation

- [AssignedWorkDocument.ScoreAnnotation.ID](id-swift.typealias.md): A type representing the stable identity of this score annotation.
- [id](id-swift.property.md): The stable identity of this score annotation.
- [AssignedWorkDocument.ScoreAnnotation.Kind](kind-swift.enum.md): The kind of a score annotation.
- [kind](kind-swift.property.md): The kind of score annotation this is. e.g. Incorrect or correct mark.
- [location](location.md): The location of the score annotation on the associated page.
- [AssignedWorkDocument.ScoreAnnotation.Document](document.md): The document type this element is for.
